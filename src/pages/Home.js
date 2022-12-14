import React, { useEffect, useState } from "react";
import Adds from "../components/Adds";
import CarouselComponents from "../components/CarouselComponents";
import Fasilitas from "../components/Fasilitas";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";
import Landing from "../components/Landing";

const Home = () => {
  const [change, setChange] = useState(false);

  return (
    <div>
      <Hero change={change} setChange={setChange} />
      <Hero2 change={change} setChange={setChange} />
      <Adds change={change} setChange={setChange} />
      <Fasilitas change={change} setChange={setChange}/>
      <CarouselComponents />
      <Landing />
      <Footer />
    </div>
  );
};

export default Home;
