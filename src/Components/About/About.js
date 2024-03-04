import React from "react";
import "../About/About.css";
function About() {
  return (
    <div className="container-fluid mt-5 pt-3  " id="about">
      <hr className="border-2 border-dark opacity-100 " />
      <div className=" fw-bolder text-center about text-white">ABOUT US</div>
      <div className="container">
        <p className="text-white text-center par mt-2">
          VNPS 2024 is a National Level project showcase which is the biggest
          Technical Fest organized by Vidyavardhini's College of Engineering and
          Technology. VNPS is realized by the combined efforts of various
          departments' student committees: IEEE, ISA, CSI, IETE, VMEA, ISHRAE
          and IGBC. They work in sync to provide a platform to the students with
          different project ideas to come together and present their ideas and
          innovations. VNPS aims to inspire students to think, motivate and
          innovate.
        </p>
        <div className="container mt-5">
          <div className="row justify-content-center p-0 ">
            <div className="col  text-center">
              <img
                src="https://adityalawate.github.io/VNPS-2023/images/logos/final/csi.png"
                className="img "
                style={{ width: "8rem", aspectRatio: "1" }}
                alt=""
              />
            </div>
            <div className="col text-center">
              <img
                src="https://adityalawate.github.io/VNPS-2023/images/logos/final/isa.png"
                className="img "
                style={{ width: "8rem", aspectRatio: "1" }}
                alt=""
              />
            </div>
            <div className="col text-center">
              <img
                src="https://adityalawate.github.io/VNPS-2023/images/logos/final/ishrae.png"
                className="img"
                style={{ width: "8rem", aspectRatio: "1" }}
                alt=""
              />
            </div>
            <div className="col  mt-3 text-center">
              <img
                src="https://adityalawate.github.io/VNPS-2023/images/logos/final/igbc.png"
                className="img "
                style={{ width: "10rem", aspectRatio: "3/2" }}
                alt=""
              />
            </div>
            <div className="col mt-3 text-center">
              <img
                src="https://adityalawate.github.io/VNPS-2023/images/logos/final/ieee.png"
                className="img"
                style={{ width: "8rem", aspectRatio: "1" }}
                alt=""
              />
            </div>
            <div className="col mt-3 text-center ">
              <img
                src="https://adityalawate.github.io/VNPS-2023/images/logos/final/iete.png"
                className="img "
                style={{ width: "8rem", aspectRatio: "1" }}
                alt=""
              />
            </div>
            <div className="col mt-3 text-center">
              <img
                src="https://adityalawate.github.io/VNPS-2023/images/logos/final/vmea.png"
                className="img "
                style={{ width: "8rem", aspectRatio: "1" }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
