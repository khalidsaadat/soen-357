import React, {useEffect, useRef, useState} from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from '../../static/images/logo.png'

function Navbar(props) { 
    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <div>
                    <Link to="/">
                        <picture>
                        <source media="(max-width: 390px)" srcSet={logo} className="h-16"/>
                            <img className="h-16" src={logo} alt="MealPlan" />
                        </picture>
                    </Link>
                </div>
                <div className="flex items-center md:order-2 gap-6 text-lg" id="profile_dropdown">
                    <div>
                        <Link to="/Login">
                            Login
                        </Link>
                    </div>
                    <div>
                        <Link to="/Signup">
                            Sign up 
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;