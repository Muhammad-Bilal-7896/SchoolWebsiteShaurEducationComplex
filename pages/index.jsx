import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from "../Components/Header/index";

const Main = () => {
  const router = useRouter()
  const slug = router.query.slug || []

  return (
    <div>
      <Header />

      <br />

      <img src="/resources/uet.jpg" height={500} style={{ width: "100%" }} alt="UET" />

      {/* The main code starts from here so please read line by line */}
      <div className="container">
        <div className="row">

          {/* Here the things that will filter the Jobs will start */}

          <h1 className="text-dark mt-4">
            <b>Welcome to Career Development Center</b>
          </h1>
          <p>University of Engineering and Technology</p>
          <p>KSK Campus</p>
          <p>
            The Career Development Center (CDC) focuses on a range of services and facilitations to
            undergraduate and graduate students in all aspects of career planning, including internships
            , trainings, workshops, jobs, and counseling for higher education.
          </p>

          {/* Here the things that will filter the Jobs will start */}
        </div>

        <br /><br />

        <div className="row">
          <div className="col-md-6">
            <iframe width="563" height="350" src="https://www.youtube.com/embed/Pie96ui7Uyk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="col-md-5" style={{ marginLeft: "20px" }}>
            <h2 className="text-dark"><b>Career Development Center</b></h2>
            <p>
              Career Development is not a one day activity but its lifelong process of
              Self-Journey and Self- Development. We at COMSATS University, Islamabad (CUI),
              Wah Campus have revived our approach, how Career Development Center should be
              connected with students, faculty and industrial partners in order to explore
              the opportunities for the university. For undergraduates, graduate students,
              alumni, and employers, Career Development Center is more than an office at the
              CUI, Wah Campus. It’s a philosophy and it’s our culture. The primary goal of
              Career Development Center is to facilitate and support the professional and

            </p>
          </div>
        </div>



        <br />

        {/* The main code starts from here so please read line by line */}
        <hr />

      </div>
    </div>
  )
}
export default Main;