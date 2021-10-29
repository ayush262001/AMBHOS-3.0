import React from 'react'

import Header from '../../Common/header/Header';
import HeaderAfter from '../../Common/header_two/Header';
import Footer from '../../Common/Footer/Footer';

import Bubble from './Components/Bubble/Bubble';
import Banner from './Components/Banner/Banner';
import Subscription from './Components/Subscription/Subscription';
import Services from './Components/Services/Services';
import Dance from './Components/Dance/Dance';
import BannerTwo from './Components/BannerTwo/BannerTwo';
import Event from './Components/Event/Event';
import Care from './Components/Care/Care';
import ConsultFinal from './Components/Consult/ConsultFinal';
import Client from './Components/Client/Client';
import Trending from './Components/Trending/Trending';
import Testimonials from './Components/Testimonials/Testimonials';
import Blogs from './Components/Blogs/Blogs';
import Application from './Components/Applications/Application';
import Upcoming from './Components/Upcoming/Upcoming';
import HeaderMobile from '../../Common/HeaderMobile/HeaderMobile';


function Home() {

  const login=true;
    return (
        <div>
          {login ? <HeaderAfter />: <Header/>}
          <HeaderMobile />
          <Banner />
          <Services />
          <Dance />
          <BannerTwo />
          <Event />
          <Care />
          <Trending />
          <Testimonials />
          <Blogs />
          <Upcoming />
          <Footer />
        </div>
    )
}

export default Home
