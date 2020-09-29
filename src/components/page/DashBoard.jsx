import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo_2 from "./img/logo-2.png";
import Logo from "./img/logo.png";

export default class DashBoard extends Component {
  render() {
    return (
      <div>
        <div className="dashboard-main-wrap">
          <div className="dashboard-padding">
            <div className="dashboard-header">
              <div className="dashboard-header-left">
                <div className="dashboard-main-icon all-page-logo">
                  {/* <Link href="index.html">
                    <img src={Logo} alt="" />
                  </Link> */}
                </div>
              </div>
              <div className="dashboard-header-right">
                <div className="dashboard-profile">
                  {/* <!-- <img src="#" alt="" /> --> */}
                  <h1>
                    Sad<span>ik</span>
                  </h1>
                  {/* <div className="dashboard-account">
                <ul>
                  <li><a href="#">Login</a></li>
                  <li><a href="#">Logout</a></li>
                </ul>
              </div> */}
                </div>
              </div>
            </div>
            <div className="dashboard-menu">
              <div className="dashboard-main-icon">
                <div className="d-main-icon-wrap">
                  <Link to="/DashBoard">
                    <img src={Logo_2} alt="" />
                    <img src={Logo} alt="" />
                  </Link>
                </div>
              </div>
              <div className="dashboard-menu-list">
                <ul>
                  <li>
                    <Link to="/Home" data-title="Home">
                      <span>
                        <i className="fas fa-house-user"></i>{" "}
                      </span>
                      <p>Home</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/About" data-title="About">
                      <span>
                        <i className="fas fa-address-card"></i>{" "}
                      </span>
                      <p>About</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/Service" data-title="Service">
                      <span>
                        <i className="fas fa-user-edit"></i>{" "}
                      </span>
                      <p>Service</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/Portfolio" data-title="Portfolio">
                      <span>
                        <i className="fas fa-address-card"></i>
                      </span>
                      <p>Portfolio</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/Skill" data-title="Skills">
                      <span>
                        <i className="fas fa-award"></i>{" "}
                      </span>
                      <p>Skills</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="Blog" data-title="Blog">
                      <span>
                        <i className="fas fa-blog"></i>{" "}
                      </span>
                      <p>Blog</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/Contact" data-title="Contact">
                      <span>
                        <i className="fas fa-envelope-open-text"></i>{" "}
                      </span>
                      <p>Contact</p>
                    </Link>
                  </li>
                  <li>
                    <a data-title="Settings">
                      <span>
                        <i className="fas fa-users-cog"></i>{" "}
                      </span>
                      <p>Settings</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="dashboard-body">
              <div className="dashboard-about">
                <div className="website-docs">
                  <div className="home-info">
                    <h3>
                      <span>Home</span>Information
                    </h3>
                    <p>Click the Home Button Go To Home Area</p>
                  </div>
                  <div className="home-info">
                    <h3>
                      <span>About</span> Information
                    </h3>
                    <span>
                      <p>Click the About Button Go To About Area</p>
                    </span>
                  </div>
                  <div className="home-info">
                    <h3>
                      <span>Service</span>Information
                    </h3>
                    <p>Click the Service Button Go To Service Area</p>
                  </div>
                  <div className="home-info">
                    <h3>
                      <span>Portfolio</span> Information
                    </h3>
                    <p>Click the Portfolio Button Go To Portfolio Area</p>
                  </div>
                  <div className="home-info">
                    <h3>
                      <span>Skill</span> Information
                    </h3>
                    <p>Click the Blog Button Go To Blog Area</p>
                  </div>
                  <div className="home-info">
                    <h3>
                      <span>Blog</span> Information
                    </h3>
                    <p>Click the About Button Go To About Area</p>
                  </div>
                  <div className="home-info">
                    <h3>
                      <span>Contact</span> Information
                    </h3>
                    <p>Click the Contact Button Go To Contact Area</p>
                  </div>
                </div>
                <div className="website-info">
                  <div className="about-website">
                    <h3>
                      Website <span>details</span>
                    </h3>

                    <h4>
                      <strong>এই ডিজাইন টি। রিয়েক্ট দিয়ে কাজ করা হচ্ছে</strong>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eius eaque illo facilis fuga ea sunt doloremque voluptatem
                      error dicta, explicabo,! Omnis, molestiae, perspiciatis
                      magnam incidunt a quas suscipit tempora nisi, quibusdam
                      illum laudantium harum! Officia ipsa fugit, nemo eligendi
                      quibusdam sint veritatis assumenda molestiae dolorum in,
                      aut ut provident natus nostrum quo quia ea ullam
                      perferendis corporis repudiandae expedita accusantium,
                      culpa consectetur. Officiis esse, cupiditate totam quis
                      repudiandae et eius cumque!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
