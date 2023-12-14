import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from './NavBar'
import "./style/Services.css"
export default function Services() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get("http://localhost:4000/take")
      .then(result => setUsers(result.data))
      .catch(err => console.log(err))
  }, [])
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
            <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni laudantium tempore odio obcaecati aliquam saepe. Libero ipsam dolorum aliquid ipsum. Atque necessitatibus id sed non laborum, amet distinctio ex corrupti?
              Commodi porro autem facere nam cum repellendus voluptatum eius neque soluta nostrum sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laudantium, deserunt error, quis aliquid ut quod rem suscipit earum pariatur similique cumque maxime, non eos dolores totam explicabo distinctio unde?
              Illum error eius eligendi officiis, cumque est quam nulla alias at natus ipsa eos harum qui unde explicabo exercitationem officia itaque ab autem perferendis aut debitis. Earum vel natus sequi?
              Repellenero minima quibusdam quidem animi tempore quaerat, sapiente eligendi explicabo fuga? Dolor accusamus natus minima.
              Itaque, non nihil fugiat vero error maiores necessitatibus maxime molestiae hic veniam optio voluptatum illo quo excepturi officiis nemo cum. Natus iste quae fugiat neque ducimus ea temporibus in delectus?
              Iste ratione, nostrum impedit molestias aliquam amet autem? Omnis ducimus delectus voluptates eligendi culpa. Fugit cum totam inventore incidunt modi provident quia dolorem. Ipsa magni voluptate recusandae eveniet laudantium doloremque!
              Illo voluptatem nobis, illum, nihil soluta explicabo labore at adipisci, eveniet eum optio quo odio. Vel dolore aperiam laboriosam nostrum, unde rerum, accusamus iusto ratione qui esse iste repudiandae quibusdam.</h1>
          </div>
          <div>
            <div className='grid grid-cols-3'>
              {
                users.map((user) => {
                  return (
                    <>
                      <div className='  flex justify-center pt-8 ml-2'>
                        <div className='bg-gray-300  pnl'>
                          <div className='flex pt-[10px] justify-between'>
                            <h2 className='pl-2'>{user.name}</h2>
                            <button className='bg-green-400 rounded-lg w-[30%] mr-[10px]  p-[12px]'>Availble</button>
                          </div>
                          <div className='flex  justify-between pt-[20px]'>
                            <h3 className='mr-[10px]'>{user.name}</h3>
                            <h3>{user.date}</h3>
                            <h3>{user.heure}</h3>
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
