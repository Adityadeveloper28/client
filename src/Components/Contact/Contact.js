import React from "react";
import png1 from "./placeholder.png";
import png2 from "./call.png";
import png3 from "./web.png";
function Contact() {
  return (
    <div className="container-fluid mt-5" id="contact">
      <div className="fw-bolder text-center rule text-white">Contact us</div>
      <div className="container mt-5">
        <div className="row justify-content-center d-flex">
          <div className="col ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.659991305768!2d72.82654491443476!3d19.383869586912066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7aec0a4b41bef%3A0xbd1a4ca919d6a613!2sVidyavardhini's+College+of+Engineering+and+Technology!5e0!3m2!1sen!2sin!4v1521540877490"
              style={{
                width: "-webkit-fill-available",
                padding: "0px",
                height: "20rem",
              }}
            />
          </div>
          <div className="col text-white">
            <h1>VIDYAVARDHINI'S COLLEGE OF ENGINEERING AND TECHNOLOGY</h1>
            <div className="row mt-4">
              <div className="col-sm-1 p-0" style={{ width: "auto" }}>
                <img src={png1} className="" style={{ width: "32px" }} />
              </div>
              <div className="col-sm-5" style={{ width: "89%" }}>
                K. T. Marg,Dist-Palghar,Shastri Nagar Vasai West, Maharashtra -
                401202
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-sm-1 p-0" style={{ width: "auto" }}>
                <img src={png2} style={{ width: "32px" }} />
              </div>
              <div className="col-sm-5" style={{ width: "75%" }}>
                0250-2338234
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-sm-1 p-0" style={{ width: "auto" }}>
                <img src={png3} style={{ width: "32px" }} />
              </div>{" "}
              <div className="col-sm-5" style={{ width: "auto" }}>https://vcet.edu.in/</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
