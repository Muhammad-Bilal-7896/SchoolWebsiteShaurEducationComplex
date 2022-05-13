import React, { useEffect, useState } from "react";
//Importing the message icon
import { MdMessage } from 'react-icons/md';
//Importing the Notifications Icons
import { BsBellFill } from "react-icons/bs";
import Link from 'next/link';
import Image from "next/image";

import Paths from "../../Data/Components/Header/Paths/index";

const Header = () => {

    const [active, setActive] = useState(0);

    useEffect(() => {
        const current_path = window.location.pathname;

        console.log(window.location.pathname);
        //console.log("The Current Active Key is : ", active)
        //__________________________For each loop started__________________________
        Paths.forEach((item, index, array) => {
            // console.log("Item at ", index, " is equal to : ", item);
            // console.log("Index at ", index, " is equal to : ", index);
            // console.log("Array at ", index, " is equal to : ", array);

            // If the path is current path then set the underline line on that path to be visible
            if (true) {
                if (current_path == item.path) {
                    setActive(item.value)
                    // setChange(false);
                    console.log("Current path is equal to: ", item.path)
                }
            }
        })
        //____________________________For each loop ended___________________________


        // The debounce function receives our function as a parameter
        const debounce = (fn) => {
            // This holds the requestAnimationFrame reference, so we can cancel it if we wish
            let frame;
            // The debounce function returns a new function that can receive a variable number of arguments
            return (...params) => {
                // If the frame variable has been defined, clear it now, and queue for next frame
                if (frame) {
                    cancelAnimationFrame(frame);
                }
                // Queue our function call for the next frame
                frame = requestAnimationFrame(() => {
                    // Call our function and pass any params we received
                    fn(...params);
                });
            }
        };

        // Reads out the scroll position and stores it in the data attribute
        // so we can use it in our stylesheets
        const storeScroll = () => {
            document.documentElement.dataset.scroll = window.scrollY;
        }

        // Listen for new scroll events, here we debounce our `storeScroll` function
        document.addEventListener('scroll', debounce(storeScroll), { passive: true });

        // Update scroll position for first time
        storeScroll();
    })

    return (
        <header>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light">
                {/* Container wrapper */}
                <div className="container-fluid">
                    {/* Toggle button */}
                    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars" />
                    </button>
                    {/* Collapsible wrapper */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* Navbar brand */}
                        <a className="navbar-brand mt-2 mt-lg-0">
                            <img src="/resources/logo.ico" alt="Shaur Educational Complex" title="Shaur Educational Complex" id="logo" />
                            <h1 id="logoCaption">SHAUR
                                <p className="insideLogoCaption">educational complex</p>
                            </h1>
                        </a>
                        {/* Left links */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <Link href="/">
                                    <a className={`nav-link ${(active == 0) ? "border_bottom" : ""}`} href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                        About
                                    </a>
                                </Link>
                                <ul className="dropdown-menu navDropDown" aria-labelledby="navbarDropdownMenuLink">
                                    <li>
                                        <a className="dropdown-item navDropDownItem" href="#">MISSION & HISTORY</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item navDropDownItem" href="#">HEAD OF SCHOOL</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item navDropDownItem" href="#">SCHOOL GOVERNANCE</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item navDropDownItem" href="#">POLICIES & FORMS</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item navDropDownItem" href="#">CAREERS</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item text-blue mt-2">
                                /
                            </li>
                            <li className="nav-item dropdown">
                                <Link href="/">
                                    <a className={`nav-link ${(active == 1) ? "border_bottom" : ""}`} href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                        Academics
                                    </a>
                                </Link>
                                <ul className="dropdown-menu navDropDown" aria-labelledby="navbarDropdownMenuLink">
                                    <li>
                                        <a className="dropdown-item navDropDownItem" href="#">ACADEMIC GUIDANCE</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item navDropDownItem" href="#">STEM CAREER PATHWAYS</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item navDropDownItem" href="#">COLLEGE DUAL ENROLLMENT</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item navDropDownItem" href="#">PAID INTERNSHIP PROGRAM</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item navDropDownItem" href="#">SPECIAL EDUCATION SERVICES</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item navDropDownItem" href="#">HONOR ROLL & ACHIEVEMENTS</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item text-blue mt-2">
                                /
                            </li>
                            <li className="nav-item dropdown">
                                <Link href="/">
                                    <a className={`nav-link ${(active == 2) ? "border_bottom" : ""}`} href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                        Campus Life
                                    </a>
                                </Link>
                                <ul className="dropdown-menu navDropDown" aria-labelledby="navbarDropdownMenuLink">
                                    <li>
                                        <a className="dropdown-item navDropDownItem" href="#">Action</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item navDropDownItem" href="#">Another action</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item navDropDownItem" href="#">Something else here</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item text-blue mt-2">
                                /
                            </li>
                            <li className="nav-item dropdown">
                                <Link href="/">
                                    <a className={`nav-link ${(active == 3) ? "border_bottom" : ""}`} href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                        Contact Us
                                    </a>
                                </Link>
                                <ul className="dropdown-menu navDropDown" aria-labelledby="navbarDropdownMenuLink">
                                    <li>
                                        <a className="dropdown-item navDropDownItem" href="#">Action</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item navDropDownItem" href="#">Another action</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item navDropDownItem" href="#">Something else here</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item text-blue mt-2">
                                /
                            </li>
                            <li className="nav-item dropdown">
                                <Link href="/">
                                    <a className={`nav-link ${(active == 4) ? "border_bottom" : ""}`} href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                        Quick Links
                                    </a>
                                </Link>
                                <ul className="dropdown-menu navDropDown" aria-labelledby="navbarDropdownMenuLink">
                                    <li>
                                        <a className="dropdown-item navDropDownItem" href="#">Action</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item navDropDownItem" href="#">Another action</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item navDropDownItem" href="#">Something else here</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        {/* Left links */}
                    </div>
                    {/* Collapsible wrapper */}
                    {/* Right elements */}
                    <div className="icon_navbar_container d-flex align-items-center">
                        <a href="www.facebook.com">
                            <i class="fab icon_navbar fa-facebook text-blue"></i>
                        </a>
                        <a href="www.facebook.com">
                            <i class="fab icon_navbar fa-twitter text-blue"></i>
                        </a>
                        <a href="www.facebook.com">
                            <i class="fab icon_navbar fa-instagram text-blue"></i>
                        </a>
                        <a href="">
                            <i class="fab icon_navbar fa-youtube text-blue"></i>
                        </a>
                        <a href="">
                            <Link href="/">
                                <button className="btn btn-enroll">Enroll</button>
                            </Link>
                        </a>
                    </div>
                    {/* Right elements */}
                </div>
                {/* Container wrapper */}
            </nav>
            {/* Navbar */}
            <br />
            <br />
        </header>
    )
}

export default Header
