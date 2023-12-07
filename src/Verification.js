import React, { useState } from 'react'
import { Useverification } from './Hooks/Verifi';
export default function Verification() {

    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [pays, setPays] = useState("");

    const { verification } = Useverification()
    const sendEmail = async (e) => {
        e.preventDefault();
        await verification(email, firstname, lastname, pays)
    }
    return (
        <>

            <div className="container mt-2">
                <div className='d-flex justify-content-center'>
                    <h2>Send Email With React & NodeJs</h2>
                    <img src="/gmail.png" alt="gmail img" className='mx-3' style={{ width: "50px" }} />
                </div>
                <div className="d-flex justify-content-center">
                    <form className="max-w-md mx-auto">
                        <div>

                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                value={email}
                            />
                        </div>
                        <label htmlFor="email">FirstName</label>
                        <input
                            type="text"
                            name="firstname"
                            placeholder="firstname"
                            onChange={(e) =>
                                setFirstname(e.target.value)
                            }
                            value={firstname}
                        />
                        <label htmlFor="email">LastNme</label>
                        <input
                            type="text"
                            name="lastname"
                            placeholder="lastname"
                            onChange={(e) =>
                                setLastname(e.target.value)
                            }
                            value={lastname}
                        />

                        <div className="relative w-full lg:max-w-sm">
                            <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600" onChange={(e) =>
                                setPays(e.target.value)
                            }
                                value={pays}>
                                <option>Regions</option>
                                <option>Dakar</option>
                                <option>Diourbel</option>
                                <option>Fatick</option>
                                <option>Kaffrine</option>
                                <option>Kaolack</option>
                                <option>Kolda</option>
                                <option>Louga</option>
                                <option>Matam</option>
                                <option>Saint-Louis</option>
                                <option>Sédhiou</option>
                                <option>Tambacounda</option>
                                <option>Thiès</option>
                                <option>Ziguinchor</option>
                            </select>
                        </div >
<div class="relative mb-3 ">
  <input
    type="tel"
    class="peer block min-h-[auto] w-full rounded    px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opaci peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 :text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
    id="exampleFormControlInputTel"
 />
  <label
    for="exampleFormControlInputTel"
    class="pointer-events-none absolute left-3  top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
    >
  </label>
</div>
                            <button type="submit" onClick={sendEmail}>Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}