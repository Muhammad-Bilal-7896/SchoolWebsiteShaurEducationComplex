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

            {/* The main code starts from here so please read line by line */}
            <div className="container">
                <div className="row">

                    {/* Here the things that will filter the Jobs will start */}
                    .
                    <div className="aulmni_box">
                        <h4 className="mt-4">LATEST REGISTERED ALUMNI</h4>
                        <hr />
                    </div>

                </div>
                <br /><br />

                {/* The main code starts from here so please read line by line */}

            </div>
        </div>
    )
}
export default Employers;