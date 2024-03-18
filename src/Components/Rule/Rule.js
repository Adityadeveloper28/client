import React, { useEffect, useState } from "react";
import "./Rule.css";
import png1 from "./Team work-rafiki.png";
import png2 from "./Cash Payment-bro.png";
import png3 from "./Forms-amico.png";
import png4 from "./guidelines.png";
import png5 from "./shop.png";
import png6 from "./contact-book.png";
import { Link } from "react-router-dom";
function Rule() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("fade-in-text");
      const positionFromTop = element.getBoundingClientRect().top;

      if (positionFromTop - window.innerHeight < 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="container-fluid mt-5 p-0 " id="rule">
      <br />
      <br />
      <div className="container">
        <div className="fw-bolder text-center rule text-white">RULES</div>
        <p className="text-white text-center para mt-2">
          There are some rules you need to follow..!!!
        </p>
        <div className="row justify-content-center gap-3 d-flex mt-3">
          <div className="col justify-content-center d-flex mt-2">
            <div
              className="card text-white"
              style={{ width: "25rem", backgroundColor: "#101318" }}
            >
              <img
                src={png1}
                className="card-img-top mx-auto "
                alt="..."
                style={{ width: "50%" }}
              />
              <div className="card-body">
                <h1 className="card-title fw-bolder text-center">Team Size</h1>
                <p className="card-text text-center" style={{
                  fontSize:'1.35rem'
                }}>
                  A team can consist of Maximum 4 members.
                  Bearing a valid
                  college ID mandatory.
                </p>
              </div>
            </div>
          </div>
          <div className="col justify-content-center d-flex mt-2">
            {" "}
            <div
              className="card text-white"
              style={{ width: "25rem", backgroundColor: "#101318" }}
            >
              <img
                src={png2}
                className="card-img-top mx-auto "
                alt="..."
                style={{ width: "50%" }}
              />
              <div className="card-body">
                <h1 className="card-title fw-bolder text-center">
                  Registration Fee
                </h1>
                <p className="card-text m-auto ">
                  <ul style={{ fontSize: "15px" }}>
                    <li>
                      {" "}
                      The rates are per group{" "}
                      <code style={{ color: "rgb(206 217 5)",fontSize:'15px' }}>
                        (For VCET Students Oscilation + VNPS compulsory)
                      </code>
                      : ₹ 500/-
                    </li>
                    <li>
                      {" "}
                      The rates are per group{" "}
                      <code style={{ color: "rgb(206 217 5)",fontSize:'15px' }}>
                        (For VCET Students Oscilation + VNPS compulsory , also
                        member of professional bodies)
                      </code>
                      : ₹ 400/-
                    </li>
                    <li>The rates are per group per Project: ₹500</li>
                    <li>
                      {" "}
                      The rates are per group per Project(Member of professional
                      bodies): ₹400 .
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="col justify-content-center d-flex mt-2">
            {" "}
            <div
              className="card text-white"
              style={{ width: "25rem", backgroundColor: "#101318" }}
            >
              <img
                src={png3}
                className="card-img-top mx-auto "
                alt="..."
                style={{ width: "50%" }}
              />
              <div className="card-body ">
                <h1 className="card-title fw-bolder text-center">
                  REGISTRATION
                </h1>
                <button className="btn border border-2 m-auto d-flex mt-5 fs-2 fw-bolder" >
                  <Link to='https://forms.gle/2XTa9uRZv7Au2Dq3A'style={{
                    textDecoration:'none',
                  }} className="link-none text-white">
                  Register Here</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center d-flex mt-4">
          <img src={png4} style={{ width: "5rem" }} />
          <h1
            className="text-center text-white p-3"
            style={{
              fontFamily: "Anta",
            }}
          >
            Registration Guidelines
          </h1>
          <div className="row-sm p-1 m-auto">
            <ul className="text-white">
              <li>
                The participants are expected to complete the registration
                process for the event through the registration link after
                getting a notification mail from VNPS committee. Registration
                link is available in the brochure as well as rule book.
              </li>
              <li>
                For VCET students, registration in both Oscillation and VNPS is
                compulsory. The rates are ₹500 per group for regular VCET
                students and ₹400 per group for VCET students who are also
                members of professional bodies.
              </li>
              <li>
                The rates for Non-VCET students per group Project: ₹500,
                for Member of professional bodies: ₹400. which has to be paid
                through Google Pay or Paytm on the given phone numbers or upi
                id of the respective track.
              </li>
              <li>
                Complete the registration procedure by updating project details
                and payment details.
              </li>
            </ul>
          </div>
        </div>
        <div className="row justify-content-center d-flex mt-4 gap-5">
          <div className="col-lg text-white">
            <div className="row">
              <img src={png5} style={{ width: "5rem" }} className="m-auto" />
              <h3
                className="text-center"
                style={{
                  fontFamily: "Anta",
                }}
              >
                Payment details
              </h3>
            </div>
            <div className="row  payment">
              <ul>
                <li>Payment should be done by 4th April 2024 itself.</li>
                <li>
                  Track 1:
                  <p>
                    Abhigya Hazra -
                    <a
                      href="tel:9604297830"
                      className="link-offset-2 link-underline link-underline-opacity-0 link-light"
                    >
                      &nbsp;9604297830
                    </a>
                  </p>
                </li>
                <li>
                  Track 2:
                  <p>
                    Yash Biranje -
                    <a
                      href="tel:9763999221"
                      className="link-offset-2 link-underline link-underline-opacity-0 link-light"
                    >
                      &nbsp;9763999221
                    </a>
                  </p>
                </li>
                <li>
                  Track 3:
                  <p>
                    Shubham Shah -
                    <a
                      href="tel:9226797391"
                      className="link-offset-2 link-underline link-underline-opacity-0 link-light"
                    >
                      &nbsp;9226797391
                    </a>
                  </p>
                </li>
                <li>
                  Track 4:
                  <p>
                    Ayush Churi -
                    <a
                      href="tel:8421419425"
                      className="link-offset-2 link-underline link-underline-opacity-0 link-light"
                    >
                      &nbsp;8421419425
                    </a>
                  </p>
                </li>
                <li>
                  Track 5:
                  <p>
                    Aditya Kute -
                    <a
                      href="tel:9769738332"
                      className="link-offset-2 link-underline link-underline-opacity-0 link-light"
                    >
                      &nbsp;9769738332
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg text-white">
            <div className="row">
              <img src={png6} style={{ width: "5rem" }} className="m-auto" />
              <h3
                className="text-center"
                style={{
                  fontFamily: "Anta",
                }}
              >
                Contacts
              </h3>
            </div>
            <div className="row  accord">
              <div
                className="accordion accordion-flush "
                id="accordionFlushExample"
              >
                <div className="accordion-item bg-dark-subtle">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed bg-dark-subtle"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Track 1{" "}
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <div className="row">
                        <dt class="col-sm-4 text-center">Tisha Paul:</dt>
                        <dd class="col-sm-4 text-center ">
                          <a
                            href="tel: +91 8999184127"
                            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
                          >
                            {" "}
                            +91 8999184127
                          </a>
                        </dd>
                      </div>
                      <div className="row">
                        <dt class="col-sm-4 text-center">Omkar Malusare: </dt>
                        <dd class="col-sm-4 text-center ">
                          <a
                            href="tel:  +91 8605590713"
                            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
                          >
                            {" "}
                            +91 8605590713
                          </a>
                        </dd>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item bg-dark-subtle">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed bg-dark-subtle"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      Track 2{" "}
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <div className="row">
                        <dt class="col-sm-4 text-center">Rashmi Mote:</dt>
                        <dd class="col-sm-4 text-center ">
                          <a
                            href="tel: +91 8169734612"
                            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
                          >
                            {" "}
                            +91 8169734612
                          </a>
                        </dd>
                      </div>
                      <div className="row">
                        <dt class="col-sm-4 text-center">Omkar Bhikle:</dt>
                        <dd class="col-sm-4 text-center ">
                          <a
                            href="tel:   +91 8879135446"
                            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
                          >
                            {" "}
                            +91 8879135446
                          </a>
                        </dd>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item bg-dark-subtle">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed bg-dark-subtle"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      Track 3{" "}
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <div className="row">
                        <dt class="col-sm-5 text-center">Reena Vaidya :</dt>
                        <dd class="col-sm-4 text-center ">
                          <a
                            href="tel: +91 7506759126"
                            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
                          >
                            {" "}
                            +91 7506759126
                          </a>
                        </dd>
                      </div>
                      <div className="row">
                        <dt class="col-sm-5 text-center">Pia Purohit :</dt>
                        <dd class="col-sm-4 text-center ">
                          <a
                            href="tel: +91 7620411027
                          "
                            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
                          >
                            {" "}
                            +91 7620411027
                          </a>
                        </dd>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item bg-dark-subtle">
                  <h2 className="accordion-header ">
                    <button
                      className="accordion-button collapsed bg-dark-subtle"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFour"
                      aria-expanded="false"
                      aria-controls="flush-collapseFour"
                    >
                      Track 4{" "}
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <div className="row">
                        <dt class="col-sm-4 text-center">Aditya Lawate -</dt>
                        <dd class="col-sm-4 text-center ">
                          <a
                            href="tel:  +91 9860678418"
                            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
                          >
                            {" "}
                            +91 9860678418
                          </a>
                        </dd>
                      </div>
                      <div className="row">
                        <dt class="col-sm-4 text-center">Kartik Poojary:</dt>
                        <dd class="col-sm-4 text-center ">
                          <a
                            href="tel:+91 7507355838"
                            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
                          >
                            {" "}
                            +91 7507355838
                          </a>
                        </dd>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item bg-dark-subtle">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed bg-dark-subtle"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFive"
                      aria-expanded="false"
                      aria-controls="flush-collapseFive"
                    >
                      Track 5{" "}
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFive"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <div className="row">
                        <dt class="col-sm-5 text-center">Deeksha Shetty: </dt>
                        <dd class="col-sm-4 text-center ">
                          <a
                            href="tel:  +91 8097470510"
                            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
                          >
                            +91 8097470510
                          </a>
                        </dd>
                      </div>
                      <div className="row">
                        <dt class="col-sm-5 text-center">Amey Mahajan:</dt>
                        <dd class="col-sm-4 text-center ">
                          <a
                            href="tel:   +91 8657557690"
                            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
                          >
                            {" "}
                            +91 8657557690
                          </a>
                        </dd>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-primary">
        <div
          id="fade-in-text"
          className={`fade-in-text fw-bolder mt-2 text-center text-white prize ${
            isVisible ? "visible" : ""
          } ${!isScrollingUp ? "scroll-down" : ""}`}
        >
          Prize Pool
        </div>
        <div
          id="fade-in-text"
          className={`fade-in-text fw-bolder mt-2 text-center text-white prize ${
            isVisible ? "visible" : ""
          } ${!isScrollingUp ? "scroll-down" : ""}`}
        >
          ₹2,00,000
        </div>
      </div>
    </div>
  );
}

export default Rule;
