import React from "react";
import { Link } from "react-router-dom";
import "./style/Nav.css";
import NavBar from "./NavBar";
import LesGp from "./LesGp";
import Gp from "./CardGp";
import Caroussel from "./Caroussel";
import Footer from "./components/Footer";
import FeatureCard from "./components/FeatureCard";
import CountryCard from "./components/CountryCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
  const features = [
    {
      image: "./colisss.png",
      title: "Easy Shipment",
      description: "Shipping Easy provides the simplest online shipping web is here"
    },
    {
      image: "./price.png",
      title: "Cheap Price",
      description: "Shipping Easy provides the simplest online shipping web is here",
      variant: "elevated"
    },
    {
      image: "./bus.png",
      title: "Secure Delivery",
      description: "Shipping Easy provides the simplest online shipping web is here"
    }
  ];

  const countries = [
    { image: "./europe.jpg", name: "Europe" },
    { image: "./Africa.png", name: "Africa", variant: "elevated" },
    { image: "./canada.png", name: "Canada" },
    { image: "./china.png", name: "China", variant: "elevated" },
    { image: "./usa.jpg", name: "United State of America" }
  ];

  const stats = [
    { value: "200+", label: "Daily Shipments" },
    { value: "450", label: "Trusted Clients" },
    { value: "78", label: "Office Branch" },
    { value: "62+", label: "Awards" }
  ];

  return (
    <>
      <div className="body">
        <div className="str text-white h-[40%] w-[70%] over border-full mt-[425px]">
          <Caroussel />
        </div>
        <NavBar />

        <main className="main p-[150px]">
          <div className="flex justify-around">
            <div className="titre">
              <h5>
                Hassle free <br /> Shipping and <br /> Logistics
              </h5>
              <p>
                Rapidrun list is the leading source for the maritime industry <br />
                covering all sectors of the shipping including tankers,
              </p>
            </div>
            <div>
              <img src="./taharka.png" width="403px" alt="Shipping" />
            </div>
          </div>
        </main>

        <div className="tak">
          <div className="flex justify-around title p-[130px]">
            <h1>
              The Safest Shipping <br /> Service in Senegal
            </h1>
            <p>
              Rapidrun List the leading source for the maritime <br />
              industry covering all sectors of shipping <br />
              including tankers,containers Rapidrun List
            </p>
          </div>

          <div className="flex pb-[70px] justify-around">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                image={feature.image}
                title={feature.title}
                description={feature.description}
                variant={feature.variant}
              />
            ))}
          </div>

          <div className="title pl-[100px]">
            <h1 className="pt-[70px]">
              We Get Your Goods <br /> On The Way!
            </h1>
          </div>

          <div className="flex justify-center ml-[150px] pb-[100px]"></div>

          <div className="flex mt-[100px]">
            <div className="pt-[80px] ml-[80px]">
              <img src="./take.webp" width="1700px" alt="Delivery" />
            </div>
            <div className="rounded str2 pb-[900px] pl-[100px] w-[500px] mb-[100px]">
              <div className="rounded border-2 h-[300px] w-[300px] pt-5 border-black">
                <div className="rounded border-2 str5 p-4 ml-7 h-[250px] pt-[10px] border-black w-[250px] bg-white mb-[10px]">
                  <img src="./price.png" alt="Price" />
                  <h1>Cheap Price</h1>
                  <p>Shipping Easy provides the simpl</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-center title">
              <h1>
                Our Achievements Made Us <br /> Well Know Through
              </h1>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-center">
                <div className="title">
                  <div className="border-l-2 p-5">
                    <h1>{stats[0].value}</h1>
                    <p>{stats[0].label}</p>
                  </div>
                  <div className="border-t-2 border-l-2 p-5 mt-5">
                    <h1>{stats[1].value}</h1>
                    <p>{stats[1].label}</p>
                  </div>
                </div>
                <div className="flex">
                  <img src="colisgp.png" width="750px" alt="Package" />
                </div>
                <div className="title">
                  <div className="border-l-2 p-5">
                    <h1>{stats[2].value}</h1>
                    <p>{stats[2].label}</p>
                  </div>
                  <div className="border-t-2 border-l-2 p-5 mt-5">
                    <h1>{stats[3].value}</h1>
                    <p>{stats[3].label}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="country">
            <h1>
              We Serve More Than <br /> 9+ Countries
            </h1>
          </div>

          <div className="flex pays justify-around pb-[50px]">
            {countries.map((country, index) => (
              <CountryCard
                key={index}
                image={country.image}
                name={country.name}
                variant={country.variant}
              />
            ))}
          </div>

          <div>
            {Gp.map((gp) => (
              <Link key={gp.id}>
                <LesGp {...gp} />
              </Link>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
