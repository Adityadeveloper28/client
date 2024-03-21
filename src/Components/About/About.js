import React from "react";
import "../About/About.css";
import png1 from "../About/WhatsApp Image 2024-03-15 at 20.53.53_8ff11c11.jpg";
import png2 from "../About/csi.png"
import png3 from "../About/ieee.png"
import png4 from "../About/iete.png"
import png5 from "../About/isa.png"
import png6 from "../About/ishrae.png"
import png7 from "../About/igbc.png"
import png8 from "../About/vmea.png"
import png9 from "../About/image.png"
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
          departments' student committees: IEEE, ISA, CSI, IETE, VMEA, ISHRAE,
          IGBC and IIC. They work in sync to provide a platform to the students with
          different project ideas to come together and present their ideas and
          innovations. VNPS aims to inspire students to think, motivate and
          innovate.
        </p>
        <div className="container mt-5">
          <div className="row justify-content-center p-0 gap-2 m-auto">
            <div className="col  text-center">
              <img
                src={png2}
                className="img "
                style={{ width: "8rem", aspectRatio: "1" }}
                alt=""
              />
            </div>
            <div className="col text-center">
              <img
                src={png5}
                className="img "
                style={{ width: "8rem", aspectRatio: "1" }}
                alt=""
              />
            </div>
            <div className="col text-center">
              <img
                src={png6}
                className="img"
                style={{ width: "8rem", aspectRatio: "1" }}
                alt=""
              />
            </div>
            <div className="col  mt-3 text-center">
              <img
                src={png7}
                className="img "
                style={{ width: "10rem", aspectRatio: "3/2" }}
                alt=""
              />
            </div>
            <div className="col mt-3 text-center">
              <img
                src={png3}
                className="img"
                style={{ width: "8rem", aspectRatio: "1" }}
                alt=""
              />
            </div>
            <div className="col mt-3 text-center ">
              <img
                src={png4}
                className="img "
                style={{ width: "8rem", aspectRatio: "1" }}
                alt=""
              />
            </div>
            <div className="col mt-3 text-center">
              <img
                src={png8}
                className="img "
                style={{ width: "8rem", aspectRatio: "1" }}
                alt=""
              />
            </div>
            <div className="col mt-3 text-center ">
              <img
                src={png1}
                className="img rounded"
                style={{ width: "10rem" }}
                alt=""
              />
            </div>
            <div className="col mt-3 text-center ">
              <img
                src={png9}
                className="img rounded bg-white"
                style={{ width: "12rem",paddingTop:'11px',paddingBottom:'11px' }}
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
