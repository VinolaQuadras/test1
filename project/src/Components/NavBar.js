import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <>
         <nav className='navbar navbar-expand-lg bg-dark navbar-dark'>
            <div className='container-fluid'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrw6hCl0P0-I0b_Y8_GgvUAlFN0qlHhZeTSg&usqp=CAU"
            alt="Loading"
            height="50px"
            />
            
                <Link className='navbar-brand' to="/">
                    Happy Travelling
                </Link>
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav me-auto'>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/">
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/destination">
                                Destination
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/aboutus">
                                About_Us
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* <ul className="breadcrumb-navigation">
                    <li><Link className="Sign in">Sign in </li>
                    <li><a href="sign up">Sign up</a></li>
                    <li><a href="cart">Cart</a></li>
       
                </ul> */}

            </div>
        </nav> 
        {/* <div className="container">
        <div className="row">
            <div className="col-md-4">
                <div className="card ">
                    <div className="card-header text-center bg-info-subtle">
                        <h1>Happy Travelling</h1>
                        </div>
                        <div className="card-body bg-secondary-subtle">
                        <center>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTywR9M5cVyh7zoSqcEv7Miiox6uqglU2fNKA&usqp=CAU"/>
                            
                        </center>
                        </div>
                    <div className="card-footer bg-danger-subtle">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <center>
                        <button  type="button" className="btn btn-danger">
                            Read more
                        </button>
                    </center>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
       
    </>
  )
}

export default NavBar