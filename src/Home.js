import React from "react";
import "./style/Nav.css";
import NavBar from "./NavBar";
import LesGp from "./LesGp";
import Gp from "./CardGp";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function Home() {
  return (
    <>
      <body className="body">
        <h4>
          <div className="str text-white h-[40%] w-[70%] over  border-full mt-[425px]">
              <div className=" carrousel flex">
                <div className="container1 flex ">
                  <img src="./colis.webp" width="" alt="" />
                 
                </div>
                <div className="container1 flex">
                  <img src="./Liste1.webp" alt="" />
                  
                </div>
                <div className="container1 flex">
                  <img src="./plane.webp" alt="" />

                 
                </div>
              </div>
          </div>
        </h4>
        <NavBar />
        <main className="main p-[150px]">
          <div className="flex justify-around">
            <div className="titre">
              <h5>
                Hassle free <br /> Shipping and <br /> Logistics
              </h5>
              <p>
                Rapidrun list is the leading source for the maritime industry <br /> covering all sectors of the shipping including tankers,
              </p>
            </div>
            <div className="">
              <img src="./taharka.png" width="403px" alt="" />
            </div>
          </div>
        </main>
        <div className="tak">
          <div className="flex justify-around title p-[130px]">
            <h1>The Safest Shipping <br /> Service in Senegal</h1>
            <p>Rpidrun List the leading source for the maritime <br /> industry covering all sectors of shipping <br /> including tankers,containers Rapidrun List</p>
          </div>
          <div className="flex pb-[70px] justify-around">
            <div className="rounded border-2 w-[15%] border-black  p-10">
              <img src="./colisss.png" alt="" />
              <h1>Easy Shipmnet</h1>
              <p>Shipping Easy provides the simplest online shipping web is here</p>
            </div>
            <div className="flex">
              <div className="rounded border-2  h-[300px] w-[250px] mt-3 border-black">
              </div>
              <div className="rounded border-2 str1 p-4 h-[300px] pt-[50px]  border-black w-[250px] bg-white mb-[10px]">
                <img src="./price.png" alt="" />
                <h1>Cheap Price</h1>
                <p>Shipping Easy provides the simplest online shipping web is here</p>
              </div>
            </div>
            <div className="rounded border-2  w-[15%]  border-black p-10">
              <img src="./bus.png" alt="" />
              <h1>Secure Delivery</h1>
              <p>Shipping Easy provides the simplest online shipping web is here</p>
            </div>
          </div>

          <div className="title  pl-[100px]">
            <h1 className="pt-[70px]">We Get Your Goods <br /> On The Way!</h1>
          </div>
          <div className="flex justify-center ml-[150px] pb-[100px]">
          </div>
          <div className="flex mt-[100px] ">
            <div className=" pt-[80px] ml-[80px]">
              <img src="./take.webp" width="1700px" alt="" />
            </div>
            <div className="rounded str2 pb-[900px]   pl-[100px] w-[500px]  mb-[100px]">
              <div className="rounded border-2  h-[300px] w-[300px] pt-5 border-black">
                <div className="rounded border-2 str5 p-4 ml-7 h-[250px] pt-[10px]  border-black w-[250px] bg-white mb-[10px]">
                  <div className="">
                  </div>
                  <img src="./price.png" alt="" />
                  <h1>Cheap Price</h1>
                  <p>Shipping Easy provides the simpl</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className=" text-center  title">
              <h1>Our Achievements Made Us <br /> Well Know Through</h1>
            </div>
            <div className="flex flex-col">
              <div className="">
                <div className="flex justify-center">
                  <div className="title ">
                    <div>
                      <div className="border-l-2 p-5">
                        <h1>200+</h1>
                        <p>Daily Shipments</p>
                      </div>
                      <div className="border-t-2 border-l-2 p-5  mt-5">
                        <h1>450</h1>
                        <p>Trusted Clients</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex ">
                    <img src="colisgp.png" width="750px" alt="" />
                  </div>
                  <div className="title ">
                    <div>
                      <div className="border-l-2 p-5 ">
                        <h1>78</h1>
                        <p>Office Brunch</p>
                      </div>
                    </div>
                    <div>
                      <div className="border-t-2 border-l-2 p-5  mt-5">
                        <h1>62+</h1>
                        <p>Awards</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="country">
            <h1>We Serve More Than <br /> 9+ Countries</h1>
          </div>
          <div className="flex pays justify-around pb-[50px]">
            <div className="rounded border-2 w-[15%] border-black  p-10">
              <img src="./europe.jpg" className="rounded" alt="" />
              <h1>Europe</h1>
            </div>
            <div className="flex">
              <div className="rounded border-2  h-[300px] w-[250px] mt-3 border-black">
              </div>
              <div className="rounded border-2 str1 p-6 h-[300px] pt-[50px]  border-black w-[250px] bg-white mb-[10px]">
                <img src="./Africa.png" alt="" />
                <h1>Africa</h1>
              </div>
            </div>
            <div className="rounded border-2  w-[15%]  border-black p-10">
              <img src="./canada.png" alt="" />
              <h1>Canada</h1>
            </div>
            <div className="flex">
              <div className="rounded border-2  h-[300px] w-[250px] mt-3 border-black">
              </div>
              <div className="rounded border-2 str1 p-4 h-[300px] pt-[50px]  border-black w-[250px] bg-white mb-[10px]">
                <img src="./china.png" alt="" />
                <h1>China</h1>
              </div>
            </div>
            <div className="rounded border-2  w-[15%]  border-black p-10">
              <img src="./usa.jpg" alt="" />
              <h1>United State of America</h1>
            </div>
          </div>
          <div>
            {Gp.map((gp) => (
              <Link>
                <LesGp {...gp} />
              </Link>
            ))}
          </div>
        </div>
        <footer class="dark:bg-gray-900">
          <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div class="md:flex md:justify-between">
              <div class="mb-6 md:mb-0">
                <a href="https://flowbite.com/" class="flex items-center">
                  <img src="/Sengp.png" class="h-[190px] mr-3" alt="FlowBite Logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SenGP</span>
                </a>
              </div>
              <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                    <li class="mb-4">
                      <a href="https://flowbite.com/" class="hover:underline">Flowbite</a>
                    </li>
                    <li>
                      <a href="https://tailwindcss.com/" class="hover:underline">Tailwind CSS</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                    <li class="mb-4">
                      <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
                    </li>
                    <li>
                      <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                    <li class="mb-4">
                      <a href="#" class="hover:underline">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div class="sm:flex sm:items-center sm:justify-between">
              <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">SenGP™</a>. All Rights Reserved.
              </span>
              <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                    <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Facebook page</span>
                </a>
                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                    <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                  </svg>
                  <span class="sr-only">Discord community</span>
                </a>
                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Twitter page</span>
                </a>
                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">GitHub account</span>
                </a>
                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Dribbble account</span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </>
  );
}
