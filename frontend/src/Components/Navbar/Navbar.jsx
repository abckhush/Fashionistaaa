import React from 'react'
import generateSvg from '../../assets/svg/generate.svg'
import homeSvg from '../../assets/svg/home.svg'
import logoutSvg from '../../assets/svg/logout.svg'
import savedSvg from '../../assets/svg/saved.svg'
import searchSvg from '../../assets/svg/search.svg'
import avatar from '../../assets/image/avatar.jpg'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();

    function handleAvatarClick() {
        if (localStorage.getItem('token') === null) {
            navigate('/login')
        }
        else {
            navigate('/profile')
        }
    }
    return (
        <>
            <nav className="navbar navbar-light bg-light ">
                <div className="container-fluid">

                    <button className="bg-light border-0 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="offcanvas offcanvas-start text-bg-light w-25" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">FashionInstaa</h5>
                            <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>


                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item d-flex align-items-center gap-4 px-3">
                                    <img className="svg" src={homeSvg} />
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item d-flex align-items-center gap-4 px-3">
                                    <img className="svg" src={searchSvg} />
                                    <Link className="nav-link active" aria-current="page" to="/contests">Browse Contests</Link>
                                </li>
                                <li className="nav-item d-flex align-items-center gap-4 px-3">
                                    <img className="svg" src={generateSvg} />
                                    <Link className="nav-link active" aria-current="page" to="/colorGenerate">Find Your Color</Link>
                                </li>
                                <li className="nav-item d-flex align-items-center gap-4 px-3">
                                    <img className="svg" src={generateSvg} />
                                    <Link className="nav-link active" aria-current="page" to="/generateDesigns">Generate Designs</Link>
                                </li>
                                <li className="nav-item d-flex align-items-center gap-4 px-3">
                                    <img className="svg" src={savedSvg} />
                                    <Link className="nav-link active" aria-current="page" to="/">Your saved Designs</Link>
                                </li>
                                <li className="nav-item d-flex align-items-center gap-4 px-3">
                                    <img className="svg" src={logoutSvg} />
                                    <Link className="nav-link active" aria-current="page" to="/">Logout</Link>
                                </li>

                            </ul>

                        </div>

                    </div>

                    <div className="input-group input-group-lg w-50 mx-auto my-2 ">
                        <img src={searchSvg} style={{ 'height': '7vh' }} className="input-group-text svg "></img>
                        <input type="text" className="form-control fs-6" placeholder="Search for designs,contests or artists...." />

                    </div>
                    <div className="d-flex align-items-center gap-4">
                        <button className="btn bg-dark text-light" type="submit">Become a Seller</button>
                        <div className="">
                            <img className="avatar rounded-circle" src={avatar} onClick={handleAvatarClick} />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
