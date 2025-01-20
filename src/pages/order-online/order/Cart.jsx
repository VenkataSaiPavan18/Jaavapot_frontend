import React, { useState } from "react";
import axios from "axios";
import { useNavigate,Link } from 'react-router-dom';
import { useCart, useDispatchCart } from "../../../store/ContextReducer";
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function Cart() {
  const navigate=useNavigate();
  let data = useCart();
  let dispatch = useDispatchCart();
  const [showSummary, setShowSummary] = useState(true);
  const [isAddress, setIsAddress] = useState(false);
  const cart = useCart();
console.log('cart data',data.length);
  const [errorMsg, setErrorMsg] = useState("");

  const [address, setAddress] = useState({
    name: "",
    email: "",
    phoneNo: "",
    location: "",
    city: "",
    pincode: "",
  });

  console.log('responsesToKitchen',data);
  console.log('Address',address);
  const onChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

   // Function to fill address using Geolocation API
   const fillAddressWithGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(position.coords);
          // Call reverse geocoding API to get address from coordinates
          axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAdkoYYorJ9XICIk4pcAKmvjc1dd1gMWgo`)
            .then(response => {
              const { results } = response.data;
              if (results && results.length > 0) {
                const addressComponents = results[0].address_components;
                const formattedAddress = results[0].formatted_address;
                const city = addressComponents.find(component => component.types.includes('locality')).long_name;
                const pincode = addressComponents.find(component => component.types.includes('postal_code')).long_name;
                setAddress({
                  ...address,
                  location: formattedAddress,
                  city,
                  pincode
                });
              }
            })
            .catch(error => {
              console.error("Error fetching address from coordinates:", error);
            });
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };


  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Using this pincode list to validate
    const pincodeList = [
      "500003",
      "500101",
      "500078",
      "500029",
      "500039",
      "500050",
      "500029",
      "500008",
      "500038",
      "501301",
      "500055",
      "501101",
      "500045",
      "500013",
      "500008",
      "500015",
      "500092",
      "500087",
      "500095",
      "500008",
    ];

    // Validate that the address is located in Hyderabad
    // const response = await axios.get(
    //     `https://maps.googleapis.com/maps/api/geocode/json?address=${address.location},${address.city},${address.pincode}&key=AIzaSyAdkoYYorJ9XICIk4pcAKmvjc1dd1gMWgo`
    // //   `https://maps.googleapis.com/maps/api/geocode/json?address=${address.location},${address.city},${address.pincode}&key=YOUR_API_KEY`
    // );
    // const hyderabadAddress =
    //   response.data.results[0].formatted_address.includes("Hyderabad");

    // if (!hyderabadAddress) {
    //   setErrorMsg(
    //     "Sorry, we currently only deliver to addresses in Hyderabad."
    //   );
    //   return;
    // }

    // Validate the pincode entered by the user
    // const pincodeMatches = pincodeList.includes(address.pincode);
    // if (!pincodeMatches) {
    //   setErrorMsg("Sorry, the entered pincode is not serviceable.");
    //   return;
    // }

    // Address is in Hyderabad and pincode is valid, continue with form submission
    // if (hyderabadAddress && pincodeMatches) {
      setErrorMsg("");
      setIsAddress(true);
      alert(
        "Your Address has been saved Successfully please go to checkout and make payment"
      );
    // }
  };

  const toggleShowSummary = () => {
    setShowSummary(!showSummary);
  };

  if (data.length === 0) {
    return (
      <div>
        <div className="m-5 text-center text-success fs-3 bg-light p-2">
          The Cart is Empty!
        </div>
          <div className="fs-5">
          <p style={{textAlign:"center",}}>Go To Order Menu 
      <Link to="/OrderOnline"> Click Here</Link>
      </p>
      </div>
      </div>
    );
  }

  const handleCheckOut = async (amount) => {
    const {
      data
      : { key },
  //   // } = ("rzp_test_83Bc3RiWyJVKOm")
  } = await axios.get("https://pagoanalytics.azurewebsites.net/jaavapotpayment/api/getkey");
// const key = ("rzp_test_83Bc3RiWyJVKOm")
    const {
      data: { order },
    } = await axios.post("https://pagoanalytics.azurewebsites.net/jaavapotpayment/checkout", {
    // } = await axios.post("http://localhost:5000/api/checkout", {
      amount,
    });
    
    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Jaavapot",
      description: "Food ordering",
      order_id: order.id,
      callback_url: "https://pagoanalytics.azurewebsites.net/jaavapotpayment/paymentverification",
      // callback_url: "http://localhost:5000/api/paymentverification",
      handler: async function (response) {
        let userEmail = localStorage.getItem("userEmail");
        let responses = await axios.post(
          "https://pagoanalytics.azurewebsites.net/jaavapotorders/api/orders",
          {
            order_data: [data, address],
            email: userEmail,
          }
        );

        let responseTokitchen = await axios.post(
          "https://pagoanalytics.azurewebsites.net/jaavapotemailnotification/send-email",
          // "http://localhost:5000/api/orderData",
          {
            emailid: "ramesh@thejaavapot.com",       
            order_data:[data, address]
          }
          );
          
          // console.log(responses)
    
        // console.log('responsesToKitchen',responses.status,);
        if (responses.status === 200 && responseTokitchen.status===200) {
          dispatch({ type: "DROP" });
          alert("Your Order is Succefully Placed and soon it will be deliver");
          navigate('/orderhistory')
        }



      },
      prefill: {
        name: address.name,
        email: address.email,
        contact: address.phoneNo,
      },
      notes: {
        city: address.city,
        address: address.location,
        pincode: address.pincode,
      },
      theme: {
        color: "#121212",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  let amount = data.reduce((total, food) => total + food.price, 0);
  const GST = amount * 0.18; // calculate GST amount
  amount += GST; // add GST to the total amount
  amount = Math.round(amount * 100) / 100; // round off to 2 decimal places

  return (
    <div className="container">
      <div className="row justify-content-center">
            {/* {(data.length === 0)?
            <div className="m-5 w-100 text-center text-white fs-3">
            The Cart is Empty!
          </div>:
          ""} */}
        <div className="col-lg-8 col-md-10">
          <div className="text-white">
          <div className="fs-5 text-dark">
          <p style={{textAlign:"center",}}>Go To Order Menu 
      <Link to="/OrderOnline"> Click Here</Link>
      </p>
      </div>
            {showSummary ? (
              <div className="table-responsive">
                <table className="table table-dark table-hover">
                  <thead className=" text-success fs-5">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Option</th>
                      <th scope="col">Taxable Amount</th>
                      <th scope="col">GST</th>
                      <th scope="col">Amount</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody className="text-white">
                    {data.map((food, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{food.name}</td>
                        <td>{food.qty}</td>
                        <td>{food.size}</td>
                        <td>{food.price}</td>
                        <td>{food.price * 0.18}</td>
                        <td>{food.price * 0.18 + food.price}</td>
                        <td className="text-white">
                          <button
                            type="button"
                            className="btn btn-light p-0"
                            onClick={() => {
                              dispatch({ type: "REMOVE", index: index });
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div>
                  <h1 className="fs-2">Total Price: {amount}/-</h1>
                </div>
                <div>
                  <button
                    className="btn bg-success mt-5 "
                    onClick={toggleShowSummary}
                  >
                    {showSummary ? "Next" : "Back"}
                  </button>
                </div>
              </div>
            ) : (
              <div className="row justify-content-center" style={{color:"black",backgroundColor: "rgba(189, 152, 109,0.5)",margin:"20px",padding:"20px",borderRadius:"20px",boxShadow:"2px 2px 2px 2px black"}}>
                <div className="col-md-8">
                  <h1 style={{color:"black",textAlign:"center"}}>Delivery Address</h1>
                  <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                        <input
                        placeholder="Enter Full Name"
                        placeholderTextColor="#999" 
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={address.name}
                          onChange={onChange}
                          required
                        />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                       placeholder="Enter Email"
                       placeholderTextColor="#999" 
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={address.email}
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phoneNo">Phone</label>
                      <input
                       placeholder="Enter Phone Number"
                       placeholderTextColor="#999" 
                        type="tel"
                        className="form-control"
                        id="phoneNo"
                        name="phoneNo"
                        pattern="^[1-9]{1}[0-9]{9}$"
                        value={address.phoneNo}
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="location"  style={{ marginRight: "5px" }}>Address</label>
                      <button type="button" className="btn btn-primary m-3 ml-3" onClick={fillAddressWithGeolocation}>
                      <FaMapMarkerAlt style={{ marginRight: "5px" }} /> Use My Location
                    </button>..
                    {/* <button type="button" className="btn btn-primary" onClick={fillAddressWithGeolocation}>Use My Location</button> */}
                      <input
                       placeholder="Enter Address"
                       placeholderTextColor="#999" 
                        type="text"
                        className="form-control"
                        id="location"
                        name="location"
                        value={address.location}
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="city">City</label>
                      <input
                       placeholder="Enter City"
                       placeholderTextColor="#999" 
                        type="text"
                        className="form-control"
                        id="city"
                        name="city"
                        value={address.city}
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="pincode">Pincode</label>
                      <input
                       placeholder="Enter Pincode"
                       placeholderTextColor="#999" 
                        type="text"
                        className="form-control"
                        id="pincode"
                        name="pincode"
                        value={address.pincode}
                        onChange={onChange}
                        required
                      />
                    </div>
                    {errorMsg && (
                      <div className="alert alert-danger">{errorMsg}</div>
                    )}

                    <div className="d-flex justify-content-between">
                      <div className="mt-3">
                        {" "}
                        <button type="submit" className="btn btn-primary">
                          Save Address
                        </button>
                      </div>
                      <div>
                        <button
                          className="btn bg-success mt-5 mb-3"
                          onClick={toggleShowSummary}
                        >
                          {showSummary ? "Next" : "Back"}
                        </button>
                      </div>
                      <div>
                        {isAddress && (
                          <button
                            className="btn bg-success mt-5 mb-5"
                            type="button"
                            onClick={() => handleCheckOut(amount)}
                          >
                            Check Out and Payment
                          </button>
                        )}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
