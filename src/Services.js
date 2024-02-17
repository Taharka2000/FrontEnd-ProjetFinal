import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from './NavBar'
import "./style/Services.css"
export default function Services() {
  const [originalProducts, setOriginalProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchPrice, setSearchPrice] = useState('');

  useEffect(() => {
    axios.get("http://localhost:4000/take")
      .then(result => {
        setOriginalProducts(result.data);
        setProducts(result.data);
      })
      .catch(err => console.log(err));
  }, []);

  const filterProducts = () => {
    let filteredProducts = originalProducts;

    if (searchName) {
      const nameSearch = searchName.toLowerCase();
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(nameSearch)
      );
    }

    if (searchPrice) {
      const priceSearch = parseFloat(searchPrice);
      filteredProducts = filteredProducts.filter(product =>
        product.price === priceSearch
      );
    }

    setProducts(filteredProducts);
  }

  const handleNameSearch = (e) => {
    const value = e.target.value;
    setSearchName(value);
    if (!value) {
      // Si le champ de recherche est vide, réinitialise la liste des produits
      setProducts(originalProducts);
    }
  }

  const handlePriceSearch = (e) => {
    const value = e.target.value;
    setSearchPrice(value);
    if (!value) {
      // Si le champ de recherche est vide, réinitialise la liste des produits
      setProducts(originalProducts);
    }
  }

  return (
    <>
      <NavBar />
      <body className="services">

        <main className='body1'>
          <div className='flex justify-around '>
            <div className='pt-[150px]'>
              <img src="/plane.png" className='' alt="" />
            </div>
            <div className='pt-[150px]'>
              <img src="/tiak.png" alt="" />
            </div>
            <h4>
              <div className="str7 text-white  border-full mt-[425px] w-[70%]">
                Avec SenGp SENEGAL, restez informé des déplacements de vos GPs préférés, et découvrez l'intégralité de leurs destinations à travers le monde. Nous ne proposons pas de service GP, mais nous facilitons la mise en relation avec les GPs... Pour de plus amples informations, veuillez consulter attentivement les conditions d'utilisation dans la section "Services".
              </div>
            </h4>
          </div>
          <div className='main1'>
          <div>
                <div class="mb-3 w-[50%] flex flex-row justify-center">
                    <div class="mb-6 flex">
                    <input
                type="text"
                placeholder="Search by Product Name"
                value={searchName}
                onChange={handleNameSearch}
                className="block w-auto p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="Search by Product Price"
                value={searchPrice}
                onChange={handlePriceSearch}
                className="block w-auto p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <button onClick={filterProducts}>Filter</button>
                        <span for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Search by Title or Rating</span>
                    </div>
                </div>
            </div>
          </div>
          <div>
            <div className='grid grid-cols-3'>
              {
                products.map((user) => {
                  return (
                    <>
                      <div className='  flex justify-center pt-8 ml-2'>
                        <div className='bg-gray-300  pnl'>
                          <div className='flex pt-[10px] justify-between'>
                            <h2 className='pl-2'>{user.DateDepart}</h2>
                            <button className='bg-green-400 rounded-lg w-[30%] mr-[10px]  p-[12px]'>Availble</button>
                          </div>
                            <h3 className='mr-[10px]'>{user.DateArrive}</h3>
                          <div className='flex  justify-between pt-[20px]'>
                            <h3>{user.LieuDepart}</h3>
                            <h3>{user.LieuArrive}</h3>
                            <h3>{user.name}</h3>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })
              }
            </div>
          </div>
        </main>
      </body>
    </>
  )
}
