import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo_2 from "./img/logo-2.png";
import Logo from "./img/logo.png";
import MyPic from "./img/about_bg.png";
export default class About extends Component {
  render() {
    return (
      <div>
        <div className="dashboard-main-wrap">
          <div className="dashboard-padding">
            <div className="dashboard-header">
              <div className="dashboard-header-left">
                <div className="dashboard-main-icon all-page-logo"></div>
              </div>
              <div className="dashboard-header-right">
                <div className="dashboard-profile">
                  <h1>
                    Sad<span>ik</span>
                  </h1>
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
              <div className="about-area">
                <div className="about-padding">
                  <div className="about-title">
                    <h2>
                      About<span>Me</span>
                    </h2>
                  </div>
                  <div className="about-main-wrap">
                    <div className="about-left">
                      <div className="about-image-wrap">
                        <img src={MyPic} alt="" />
                      </div>
                    </div>
                    <div className="about-right">
                      <div className="about_box">
                        {/* <!-- <h4>Personal Infomations</h4> --> */}
                        <div className="info_table">
                          <div className="info_meta">Full Name</div>
                          <div className="info_p_details">
                            MD. Akhtaruzzaman
                          </div>
                          <div className="info_meta">D.O.B.</div>
                          <div className="info_p_details">8 Sep 1997</div>
                          <div className="info_meta">Address</div>
                          <div className="info_p_details">
                            Melendah, Jamalpur, Bangladesh
                          </div>
                          <div className="info_meta">Profession</div>
                          <div className="info_p_details">
                            Freelance Web Developer
                          </div>
                          <div className="info_meta">Blood G.</div>
                          <div className="info_p_details">O+</div>
                          <div className="info_meta">Mobile</div>
                          <div className="info_p_details">01764147315</div>
                          <div className="info_meta">Email</div>
                          <div className="info_p_details">
                            ontor01727@gmail.com
                          </div>
                          <div className="info_meta">Nationality</div>
                          <div className="info_p_details">Bangladeshi</div>
                          <div className="info_meta">Hobby</div>
                          <div className="info_p_details">
                            Coding &amp; Traveling
                          </div>
                          <div className="info_meta">Language</div>
                          <div className="info_p_details">
                            Bengali, English, Hindi
                          </div>
                        </div>
                      </div>
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
