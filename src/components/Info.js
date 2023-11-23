import React from 'react'
import "../style/Info.css"
import { useLogout } from '../Hooks/useLogout'
export default function Info() {
    const { logout } = useLogout()
    const handleClick = () => {
        logout()
    }
    return (
        <div className='principale'>
            <div className='main1'>
                <div>
                    <h1>About</h1>
                </div>
                <a href="/account/about">
                    <div>
                        <img src="/dashboard.png" width="30px" alt="" />
                    </div>
                </a>
                <a href="">
                    <div className='flex'>
                        <img src="/mail.png" width="33px" alt="" />
                        <p className='pl-5 pt-3' >Heloo</p>
                    </div>
                </a>
                <a href="">
                    <div className='flex'>
                        <img src="/user1.png" width="35px" alt="" />
                        <p className='pl-5 pt-3'>ggdgd</p>
                    </div>
                </a>
                <div>
                    <a href="">
                        <img src="/commercer.png" alt="" />
                    </a>
                </div>
            </div>
            <div className="flex pl-[25px] ">
                <button className='bnt2' onClick={handleClick}>Se deconnecter</button>
                <img src="./deconnecter.png" width="30px" height="10px" alt="" />
            </div>
        </div>
    )
}
