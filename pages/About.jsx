import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from "../Components/Header/index";

const About = () => {
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
                        About
                    </h1>
                    <p>
                        Career Development is not a one day activity but its lifelong process of Self-Journey and Self- Development. We at COMSATS University, Islamabad (CUI), Wah Campus have revived our approach, how Career Development Center should be connected with students, faculty and industrial partners in order to explore the opportunities for the university. For undergraduates, graduate students, alumni, and employers, Career Development Center is more than an office at the CUI, Wah Campus. It’s a philosophy and it’s our culture. The primary goal of Career Development Center is to facilitate and support the professional and personal aims of students and their career planning for internship, experimental education, full-time employment and guidance for higher education based on job market trends through career development workshops, mock interviews, industrial visits & collaborations under umbrella of academia- industrial linkages and subsequent job fairs, which will align education-industry partnership goals of the country for innovation & productivity.
                    </p>

                    <h1 className="text-warning">Mission</h1>

                    <p>The Career Development Center (CDC) at COMSATS University, Islamabad, Wah Campus is committed to empower and equip students and recent alumni by providing personalized career advice and serve as a bridge between their university’s experience and employment that will enable them a productive and socially responsible citizen.</p>

                    <h1 className="text-warning">Objective</h1>

                    <ol>
                        <li>Create an energized student-centered environment.</li>
                        <li>Promote experimental learning such as internships, research projects, Student Startup Business Center through which students gain experience and develop their skills to explore and prepare themselves for future careers.</li>
                        <li>Maintain partnerships with employers by academia- industrial linkages and Connect students with local, national, and international employers</li>
                        <li>Empower students to take an active role in finding and pursuing their personal and professional passions.</li>
                    </ol>
                    {/* Here the things that will filter the Jobs will start */}
                </div>

                <br /><br />

                {/* The main code starts from here so please read line by line */}

            </div>
        </div>
    )
}
export default About;