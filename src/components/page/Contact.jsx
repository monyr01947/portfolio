import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo_2 from "./img/logo-2.png";
import Logo from "./img/logo.png";
import MyLocation from "./MyLocation";
class Contact extends Component {
  render() {
    return (
      <div>
        <div class="dashboard-main-wrap">
          <div class="dashboard-padding">
            <div class="dashboard-header">
              <div class="dashboard-header-left">
                <div class="dashboard-main-icon all-page-logo"></div>
              </div>
              <div class="dashboard-header-right">
                <div class="dashboard-profile">
                  <h1>
                    Sad<span>ik</span>
                  </h1>
                </div>
              </div>
            </div>
            <div class="dashboard-menu">
              <div class="dashboard-main-icon">
                <div class="d-main-icon-wrap">
                  <Link to="/DashBoard">
                    <img src={Logo_2} alt="" />
                    <img src={Logo} alt="" />
                  </Link>
                </div>
              </div>
              <div class="dashboard-menu-list">
                <ul>
                  <li>
                    <Link to="/Home" data-title="Home">
                      <span>
                        <i class="fas fa-house-user"></i>{" "}
                      </span>
                      <p>Home</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/About" data-title="About">
                      <span>
                        <i class="fas fa-address-card"></i>{" "}
                      </span>
                      <p>About</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/Service" data-title="Service">
                      <span>
                        <i class="fas fa-user-edit"></i>{" "}
                      </span>
                      <p>Service</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/Portfolio" data-title="Portfolio">
                      <span>
                        <i class="fas fa-address-card"></i>
                      </span>
                      <p>Portfolio</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/Skill" data-title="Skills">
                      <span>
                        <i class="fas fa-award"></i>{" "}
                      </span>
                      <p>Skills</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="Blog" data-title="Blog">
                      <span>
                        <i class="fas fa-blog"></i>{" "}
                      </span>
                      <p>Blog</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/Contact" data-title="Contact">
                      <span>
                        <i class="fas fa-envelope-open-text"></i>{" "}
                      </span>
                      <p>Contact</p>
                    </Link>
                  </li>
                  <li>
                    <a data-title="Settings">
                      <span>
                        <i class="fas fa-users-cog"></i>{" "}
                      </span>
                      <p>Settings</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="dashboard-body">
              <div class="contact-area">
                <div class="contact-padding width-wrap">
                  <div class="contact-title">
                    <h2>
                      get in <span>touch</span>
                    </h2>
                  </div>
                  <div class="contact-main-wrap">
                    <div class="contact-map-area">
                      <MyLocation />
                    </div>
                    <div class="contact-form-area">
                      <form action="">
                        <div class="contact-form">
                          <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Enter Your Name"
                          />
                          <input
                            type="email"
                            name=""
                            id=""
                            placeholder="Enter Your Email"
                          />
                          <textarea
                            name=""
                            id=""
                            placeholder="Enter Your massage"
                          ></textarea>
                          <button type="submit">Send</button>
                        </div>
                      </form>
                    </div>
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

export default Contact;
