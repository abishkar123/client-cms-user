import React from 'react'
import {Link} from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className='sidebar-menu'>
      <div className='mt-5'>
      <div className="text-center fw-bolder">MyAccount</div>
      </div>
      <hr />
    <div className='mt-5'>
                <ul>
                  <li>
                    <Link to="/dashboard">
                      <i className="fa-solid fa-gauge"></i> Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link to="/category">
                      <i className="fa-sharp fa-solid fa-sitemap"></i>MyAccount
                    </Link>
                  </li>
                  <li>
                    <Link to="/products">
                      <i className="fa-solid fa-box"></i> Order History
                    </Link>
                  </li>
                  <li>
                    <Link to="/paymentMethods">
                      <i className="fa-solid fa-credit-card"></i> Profile
                    </Link>
                  </li>
                  
                  <li>
                    <Link to="/setting">
                      <i className="fa-solid fa-gear"></i> Logout
                    </Link>
                  </li>
                </ul>
              </div>
              
         </div>
  )
}
