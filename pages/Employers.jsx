import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from "../Components/Header/index";

const Employers = () => {
    const router = useRouter()
    const slug = router.query.slug || []

    return (
        <div>
            <Header />

            <br />

            <img src="/resources/uetcomputer.png" height={300} style={{ width: "100%" }} alt="UET" />

            {/* The main code starts from here so please read line by line */}
            <div className="container">
                <div className="row">

                    {/* Here the things that will filter the Jobs will start */}

                    <h1 className="text-warning mt-4">
                        Employers
                    </h1>
                    <p className="bg-warning text-light">
                        We encourage organizations being as partners to learn more about the COMSATS University, Islamabad, Wah Campus and its academic programs, and to take advantage of services and resources of the Career Development Center that will connect you with our students, researchers, faculty and alumni.

                        To assist you, Career Development Center at COMSATS University, Islamabad, Wah Campus offers the following services:

                        <br />
                        Post a Job or Internship
                        <br />
                        On-Campus Recruitment Drive
                        <br />
                        Become a mentor
                    </p>

                    <div>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v, i) => {
                            return (
                                <div className="employers_container card ml-4" key={i}>
                                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                        <img width={300} src="https://cdc.cuiwah.edu.pk/Employer/20210521191132.png" className="img-fluid" />
                                        <a href="#!">
                                            <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                        </a>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">NETSOL TECHNOLOGIES</h5>
                                        <p className="card-text">NetSol Technologies is an American software company which makes automobile leasing software. It is based in Calabasas, California, ...</p>
                                        <div className="d-flex">
                                            <p>
                                                <a href="#!" className="btn btn-primary">Website</a>
                                            </p>
                                            <p style={{ marginLeft: "4%" }}>
                                                <a href="#!" className="btn btn-primary">Career</a>
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
                <br /><br />

                {/* The main code starts from here so please read line by line */}

            </div>
        </div>
    )
}
export default Employers;