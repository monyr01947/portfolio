import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo_2 from "./img/logo-2.png";
import Logo from "./img/logo.png";
export default class Service extends Component {
  render() {
    return (
      <div>
        <div class="dashboard-main-wrap">
          <div class="dashboard-padding">
            <div class="dashboard-header">
              <div class="dashboard-header-left">
                <div class="dashboard-main-icon all-page-logo">
                  {/* <Link href="index.html">
                    <img src={Logo} alt="" />
                  </Link> */}
                </div>
              </div>
              <div class="dashboard-header-right">
                <div class="dashboard-profile">
                  {/* <!-- <img src="#" alt="" /> --> */}
                  <h1>
                    Sad<span>ik</span>
                  </h1>
                  {/* <div class="dashboard-account">
                <ul>
                  <li><a href="#">Login</a></li>
                  <li><a href="#">Logout</a></li>
                </ul>
              </div> */}
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
              <div class="service-area">
                <div class="service-padding width-wrap">
                  <div class="service-main-wrap">
                    <div class="service-title">
                      <h2>
                        My <span>Services</span>
                      </h2>
                    </div>
                    <div class="service-item-wrap">
                      <div class="service-single-items">
                        <ul>
                          <li>
                            <div class="single-item">
                              <span class="service-item-logo">
                                <i class="fas fa-yin-yang"></i>
                              </span>
                              <div class="service-item-content">
                                <h3>Web Design</h3>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Dolorum iusto cumque debitis
                                  culpa quod nesciunt vitae perspiciatis laborum
                                  quaerat atque?
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="single-item">
                              <span class="service-item-logo">
                                <i class="fas fa-layer-group"></i>
                              </span>
                              <div class="service-item-content">
                                <h3>UI/UX Design</h3>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Dolorum iusto cumque debitis
                                  culpa quod nesciunt vitae perspiciatis laborum
                                  quaerat atque?
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="single-item">
                              <span class="service-item-logo">
                                <i class="fas fa-book-reader"></i>
                              </span>
                              <div class="service-item-content">
                                <h3>Graphics Design</h3>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Dolorum iusto cumque debitis
                                  culpa quod nesciunt vitae perspiciatis laborum
                                  quaerat atque?
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="single-item">
                              <span class="service-item-logo">
                                <i class="fab fa-react"></i>
                              </span>
                              <div class="service-item-content">
                                <h3>Frontend Development</h3>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Dolorum iusto cumque debitis
                                  culpa quod nesciunt vitae perspiciatis laborum
                                  quaerat atque?
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="single-item">
                              <span class="service-item-logo">
                                <i class="fab fa-wordpress-simple"></i>
                              </span>
                              <div class="service-item-content">
                                <h3>Wordpress</h3>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Dolorum iusto cumque debitis
                                  culpa quod nesciunt vitae perspiciatis laborum
                                  quaerat atque?
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="single-item">
                              <span class="service-item-logo">
                                <i class="fas fa-viruses"></i>
                              </span>
                              <div class="service-item-content">
                                <h3>Bug Fix</h3>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Dolorum iusto cumque debitis
                                  culpa quod nesciunt vitae perspiciatis laborum
                                  quaerat atque?
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
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
