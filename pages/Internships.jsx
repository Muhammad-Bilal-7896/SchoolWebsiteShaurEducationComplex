import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from "../Components/Header/index";
import InternShipsCard from "../Components/InternShips/InternShipsCard/index";
//Importing the dropdown
import DropdownFilter from "../Components/DropdownFilter";
//Importing the data for the dropdowns
import date_posted from "../Data/DropdownsData/date_posted";

//Departments Array
let departmentsArr = [
    {
        value: 0,
        name: "All departments"
    },
    {
        value: 1,
        name: "Electrical Engineering"
    },
    {
        value: 2,
        name: "Mechanical Engineering"
    },
    {
        value: 3,
        name: "Civil Engineering"
    },
    {
        value: 4,
        name: "Chemical, Metallurgical & Polymer"
    },
    {
        value: 5,
        name: "Earth Sciences & Engineering"
    },
    {
        value: 6,
        name: "Architecture & Planning"
    },
    {
        value: 7,
        name: "Natural Sciences, Humanities & Islamic Studies"
    },
    {
        value: 8,
        name: "Computer Science"
    }
];

const Internships = () => {
    const router = useRouter()
    const slug = router.query.slug || []

    const [departments, setDepartments] = useState(departmentsArr);

    const [currentDepartment, setCurrentDepartment] = useState("");

    return (
        <div>
            <Header />

            <br /><br />

            {/* The main code starts from here so please read line by line */}
            <div className="container">
                <div className="row">

                    {/* Here the things that will filter the InternShips will start */}

                    {/* 1) Department Selection dropdown starts here */}
                    <select className="form-select DropdownStyle" aria-label="Select your department" title="Select your department" value={currentDepartment}
                        onChange={(e) => setCurrentDepartment(e.target.value)}>
                        <option selected disabled>🏢 Select your department</option>
                        {departments.map((v, i) => {
                            return <option value={v.name} key={i}>
                                {v.name}
                            </option>
                        })}
                    </select>
                    {/*1) Department Selection dropdown ends here */}

                    {/* Other Filters starts here */}



                    {/* Other Filters starts here */}

                    {/* Here the things that will filter the Jobs will start */}

                </div>

                <br />
                {/* The filter dropdowns will be placed here */}
                <div className="d-flex justify-content-start">

                    <DropdownFilter title="Date Posted" list={date_posted} first={true} />
                    <DropdownFilter title="Paid" list={date_posted} />
                    <DropdownFilter title="InternShip Type" list={date_posted} />
                    <DropdownFilter title="Location" list={date_posted} />
                    <DropdownFilter title="Company" list={date_posted} />
                    <DropdownFilter title="Programming Lanugages" list={date_posted} />

                </div>
                {/* The filter dropdowns will be placed here */}

            </div>
            {/* The main code starts from here so please read line by line */}
            <hr />

            <div className="container">
                <div className="row">
                    {/* Here is the selected department info */}
                    <br />
                    {(currentDepartment == "" || currentDepartment == "All departments") ? (
                        <h6>Showing 1100 Internships for All departments</h6>
                    ) : (
                        <h6>Showing 1100 Internships for {currentDepartment} department</h6>
                    )}
                    {/* Top Section of InternShips page */}
                    <br />

                    <p>InternShips in lahore</p>

                    <p className="d-flex justify-content-end">Page 1 of 5,958 Internships &nbsp;&nbsp; <i className="far fa-question-circle mt-1"></i></p>

                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v, i) => {
                        return (
                            <div key={i}>
                                <InternShipsCard />
                            </div>
                        )
                    })}
                </div>

            </div>

        </div>
    )
}
export default Internships;