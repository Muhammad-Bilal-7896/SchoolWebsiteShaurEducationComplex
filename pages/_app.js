import Head from "next/head"
import '../styles/globals.css'

import "../ContainerCss/MainPage.css";
import "../ContainerCss/Employeers.css";
//Importing the styling for the Components
import "../Components/DropdownFilter/style.css";
import "../Components/Jobs/JobsCard/style.css";
import "../ContainerCss/Alumni.css";
//Importing the styles for navigation bar.
import "../Components/Header/style.css";

import "react-date-picker/dist/DatePicker.css"
import "react-calendar/dist/Calendar.css"

import { Provider } from 'react-redux'
import store from "../store";

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="description" content="The University of Engineering and Technology, Lahore is a public university located in Lahore, Punjab, Pakistan specializing in science, technology, engineering and mathematics subjects. It is the oldest and one of the most selective engineering institutions in Pakistan." />
      <meta name="keywords" content="Uet Job Portal,Uet KSK,Career Counceling UET,Career Couceling,UET Lahore,JOBS" />
      <meta name="author" content="Muhammad-Bilal-7896" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />

      {/* Font Awesome */}
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" rel="stylesheet" />
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
      {/* MDB */}
      <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.5.0/mdb.min.css" rel="stylesheet" />
      {/* <!-- MDB --> */}
      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.5.0/mdb.min.js"
      ></script>
      <title>UET JOB PORTAL</title>
    </Head>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </>
}

export default MyApp
