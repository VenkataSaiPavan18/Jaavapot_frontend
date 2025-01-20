import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "../src/assets/css/main.css";
import ContactScreen from "./pages/contact/ContactPage";
import 'bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from './components/navbar/Header'
import BlogsPage from "./pages/blogs/BlogsPage";
import WhyPorridgePage from "./pages/why-millet-porridges/WhyPorridgePage";
import SuperFoodsMilletPage from "./pages/super-foods/SuperFoodsMilletPage";

// import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import WhySoupsPage from "./pages/why-soups/WhySoupsPage";
import MilletTypes from "./pages/super-foods/millets-types/MilletTypes";
import PorridgesPage from "./pages/offerings/PorridgesPage";
import SoupsPage from "./pages/offerings/SoupsPage";
import Details from "./pages/offerings/Details";
import OfferingsMainPage from "./pages/offerings/OfferingsMainPage";
import Navbar from "./components/navbar/Navbar.jsx";
import Newhome from "./components/homepagenew/homepage.jsx";
import Menubenefits from "./components/homepagenew/menubenifits.jsx";
import Steps from "./components/homepagenew/subdivisions/steps.jsx";
import Signup from "./pages/auth/SignupForm.jsx";
import Login from "./pages/auth/Login.jsx";
import { CartProvider } from "./store/ContextReducer.js";
import OnlineOrderPage from "./pages/order-online/menu/OnlineOrderPage.jsx";
import Cart from "./pages/order-online/order/Cart.jsx";
import OrderHistory from "./pages/order-online/history/OrderHistory.jsx";
import AdminLogin from "./components/admin/AdminLogin.jsx";
import AdminRegistration from "./components/admin/AdminRegistration.jsx";
import AdminDashboard from "./components/admin/AdminDashboard.jsx";
import Adminmenu from "./components/admin/Adminmenu.jsx";
import AddMenu from "./components/admin/AddMenu.jsx";
import ReceivedOrders from "./components/admin/ReceivedOrders.jsx";
import EachProduct from "./components/homepagenew/EachProduct.jsx";
import NewOnlineordermenu from "./pages/order-online/menu/NewOnlineordermenu.jsx";


function App() {
  return (
    <div>
<CartProvider>
      <Router>
      <Navbar/>
        <Routes>
       
          <Route exact path="/" element={<Newhome/>} />
          <Route exact path="/about" element={<AboutPage/>} />  
          <Route exact path="/whyporridge" element={<WhyPorridgePage/>} />
          <Route exact path="/whysoups" element={<WhySoupsPage/>} />
          <Route exact path="/superfoodsmillet" element={<SuperFoodsMilletPage/>} />
          <Route exact path="/millettypes" element={<MilletTypes/>} />
          <Route exact path="/offerings-main" element={<OfferingsMainPage/>} />
          <Route exact path="/details/:id" element={<Details/>} />
          <Route exact path="/porridges" element={<PorridgesPage/>} />
          <Route exact path="/soups" element={<SoupsPage/>} />
          <Route exact path="/blogspage" element={<BlogsPage />} />
          <Route exact path="/contact" element={<ContactScreen />} />
          <Route exact path="/OrderOnline" element={<NewOnlineordermenu/>} />
          {/* <Route exact path="/OrderOnline" element={<OnlineOrderPage/>} /> */}
          <Route exact path="/Cart" element={<Cart/>} />
          <Route exact path="/OrderHistory" element={<OrderHistory/>} />
          <Route exact path="/menubenefits/:id" element={<Steps/>} />
          <Route exact path="signup" element={<Signup/>} />
          <Route exact path="Login" element={<Login/>} />      
          <Route exact path="/adminlogin" element={<AdminLogin/>} />
          <Route exact path="/adminregistration" element={<AdminRegistration/>} />
          <Route exact path="/admindashboard/:email" element={<AdminDashboard/>} />
          <Route exact path="/adminmenu/:adminEmail" element={<Adminmenu/>} />
          <Route exact path="/addmenu/:adminEmail" element={<AddMenu/>} />
          <Route exact path="/receivedorders" element={<ReceivedOrders/>} />
          <Route exact path="/product/:productId" element={<EachProduct/>} />
        </Routes>
        <Footer />
      </Router>
      </CartProvider>
    </div>
  );
}

export default App;
