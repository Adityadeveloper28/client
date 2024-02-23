import React from "react";
import "../Main/Main.css";
import { Link } from "react-router-dom";
function Main() {
  return (
    <div className="container-fluid  text-white " id="new">
      <div className="container mt-5 justify-content-center  p-5">
        <div className="text-center p-0 ">
          <h1 className="p-0 m-auto fw-bolder intro">VNPS '24</h1>
          <hr className="hr border-5  justify-item-center" />
        </div>
        <div className=" text-center">
          <h1 className="fw-bolder sub">
            VCET's National Level Project Showcase{" "}
          </h1>
          <h1 className="fw-bolder sub">On 6th April 2024</h1>
          <hr className="hr border-5" />
        </div>
        <div className="fw-bolder fs-1 mt-2 text-center animated-text ">
          INVENT.... INNOVATE.... INSPIRE...
        </div>
        <div className="text-center m-auto mt-5">
          <Link className="btn btn-light fs-3 sub rounded-pill" type="button">
            Registeration
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Main;
