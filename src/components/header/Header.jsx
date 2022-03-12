import React from 'react'

export default function Header() {
  return (
    <nav>
      <div className="container">
        {/* <img src="" alt="" /> */}
        <div className='header__main'>
          <h2>Bimbo</h2>
          <button><i className='bx bx-menu'></i></button>

        </div>
        <div className="profile__area">
          <div className="theme__btn">
            <span className='active' ><i className='bx bxs-sun' ></i></span>
            <span><i className='bx bxs-moon' ></i></span>
          </div>
          <div className="profile">
            <div className="profile__photo">
              <img src="/img/avatar.png" alt="" />
            </div>
            <h3>Admin <i className='bx bx-chevron-down' ></i></h3>
          </div>
        </div>
      </div>
    </nav>
  )
}
