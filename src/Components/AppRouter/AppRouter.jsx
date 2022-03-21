import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Cardheader } from "../Cardheader/Cardheader";
import { Cards } from '../Cards/Cards';
import { Navbar } from '../Navbar/Navbar';


export const AppRouter = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<>
          <Navbar />
          <Cardheader />
          <Cards />
        </>} />
        <Route path="/all" element={<>
          <Navbar />
          <Cardheader />
          <Cards />
        </>} />
        <Route path="/blocked" element={<>
          <Navbar />
          <Cardheader />
          <Cards />
        </>} />
        <Route path="*" element={<>
          <div style={{ width: "100%", height: "80vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h1>Your are trying to access wrong page <Link to={"/"}>Click here to go to homepage</Link></h1>
            <h2 style={{ marginTop: "20px" }}>Visit us Again !</h2>
          </div>
        </>} />
      </Routes>
    </>
  )
}