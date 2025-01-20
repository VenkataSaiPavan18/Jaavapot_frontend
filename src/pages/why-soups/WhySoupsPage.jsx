import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import WhySoups from './WhySoups';
import SoupsVsCoffee from './SoupsVsCoffee';
import SoupsScrolling from './SoupsScrolling';
import './whysoups.css';

function WhySoupsPage() {

  return (
    <div className='soups-main'>
        <WhySoups/>
        <SoupsVsCoffee/>
        <SoupsScrolling/>
    </div>
  )
}

export default WhySoupsPage
