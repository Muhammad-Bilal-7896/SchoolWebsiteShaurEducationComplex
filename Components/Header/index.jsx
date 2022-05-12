import React, { useEffect, useState } from "react";
//Importing the message icon
import { MdMessage } from 'react-icons/md';
//Importing the Notifications Icons
import { BsBellFill } from "react-icons/bs";
import Link from 'next/link';

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
                            <img src="/resources/ksk.png" id="logo" height={60} alt="UET" title="UET Logo" loading="lazy" />
                        </a>
                        {/* Left links */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link href="/">
                                    <a className={`nav-link ${(active == 0) ? "border_bottom" : ""}`}>Home</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/About">
                                    <a className={`nav-link ${(active == 1) ? "border_bottom" : ""}`}>About Us</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/Employers">
                                    <a className={`nav-link ${(active == 2) ? "border_bottom" : ""}`}>Employers</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/Jobs">
                                    <a className={`nav-link ${(active == 3) ? "border_bottom" : ""}`}>Jobs(328)</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/Internships">
                                    <a className={`nav-link ${(active == 4) ? "border_bottom" : ""}`}>Internships(572)</a>
                                </Link>
                            </li>
                            {/* Events Dropdown */}
                            <li className="nav-item dropdown">
                                <Link href="/Events">
                                    <a className={`nav-link ${(active == 5) ? "border_bottom" : ""} dropdown-toggle`} href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                        Events
                                    </a>
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li>
                                        <a className="dropdown-item" href="#">Action</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Another action</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </li>
                                </ul>
                            </li>
                            {/* Events Dropdown */}
                            <li className="nav-item dropdown">
                                <Link href={"/ScholarShips"}>
                                    <a className={`nav-link ${(active == 6) ? "border_bottom" : ""} dropdown-toggle`} href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                        ScholarShips
                                    </a>
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li>
                                        <a className="dropdown-item" href="#">Action</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Another action</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link href="/Alumni">
                                    <a className={`nav-link ${(active == 7) ? "border_bottom" : ""}`}>Alumni</a>
                                </Link>
                            </li>
                        </ul>
                        {/* Left links */}
                    </div>
                    {/* Collapsible wrapper */}
                    {/* Right elements */}
                    <div className="d-flex align-items-center">
                        {/* Messages Section */}
                        <div className="dropdown icon_link">
                            <Link href="/messages">
                                <a className="icon_custom me-3" href="#">
                                    <MdMessage color="#2d2d2d" size={30} />
                                    {/* <span className="badge rounded-pill badge-notification bg-danger">1</span> */}
                                </a>
                            </Link>
                        </div>
                        {/* Messages Section */}

                        {/* Notification Section */}
                        <div className="dropdown icon_link">
                            <Link href="/notifications">
                                <a className="icon_custom me-3" href="#">
                                    <BsBellFill color="#2d2d2d" size={30} />
                                    {/* <span className="badge rounded-pill badge-notification bg-danger">1</span> */}
                                </a>
                            </Link>
                        </div>
                        {/* Notification Section */}

                        {/* Profile Section */}
                        <div className="dropdown icon_link">
                            <a className="dropdown-toggle icon_custom hidden-arrow" href="#" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle" height={35} alt="Black and White Portrait of a Man" loading="lazy" />
                            </a>
                            <ul className="dropdown-menu profile_dropDown dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
                                <li>
                                    <a className="dropdown-item email-item" href="#"><span className="margin_left_profile_dropdown_items">bilalmohib7896@gmail.com</span></a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#"><span className="margin_left_profile_dropdown_items">Profile</span></a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#"><span className="margin_left_profile_dropdown_items">My jobs</span></a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#"><span className="margin_left_profile_dropdown_items">My reviews</span></a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#"><span className="margin_left_profile_dropdown_items">Email settings</span></a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#"><span className="margin_left_profile_dropdown_items">Settings</span></a>
                                </li>
                                <li>
                                    <div className="divider dropdown-divider"></div>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#"><span className="margin_left_profile_dropdown_items">Logout</span></a>
                                </li>
                            </ul>
                        </div>
                        {/* Profile Section */}

                        <div className="dropdown">
                            <Link href="/">
                                <a href="#">Post Job</a>
                            </Link>
                        </div>
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
