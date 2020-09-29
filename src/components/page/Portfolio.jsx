import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo_2 from "./img/logo-2.png";
import Logo from "./img/logo.png";
export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <div class="dashboard-main-wrap">
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
              <div className="portfolio-area">
                <div className="portfolio-padding width-wrap">
                  <div className="portfolio-title">
                    <h2>
                      My <span>Portfolio</span>
                    </h2>
                  </div>
                  <div className="portfolio-area">
                    <div className="portfolio-main-wrap">
                      {/* <!-- single-portfolio start  --> */}
                      <div className="portfolio-single-item">
                        <div className="portfolio-single-front">
                          <div className="single-image-wrap">
                            <img
                              src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1235&q=80"
                              alt=""
                            />
                          </div>
                          <div className="single-content">
                            <h3>psd to html</h3>
                          </div>
                        </div>
                        <div className="portfolio-single-hover">
                          <div className="hover-wrap">
                            <a href="#" className="hover-popup">
                              <i className="fas fa-camera-retro"></i>
                            </a>
                            <a href="#" className="hover-popup">
                              <i className="fas fa-external-link-alt"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <!-- single-portfolio end  -->
                  <!-- single-portfolio start  --> */}
                      <div className="portfolio-single-item">
                        <div className="portfolio-single-front">
                          <div className="single-image-wrap">
                            <img
                              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                              alt=""
                            />
                          </div>
                          <div className="single-content">
                            <h3>psd to html</h3>
                          </div>
                        </div>
                        <div className="portfolio-single-hover">
                          <div className="hover-wrap">
                            <a href="#" className="hover-popup">
                              <i className="fas fa-camera-retro"></i>
                            </a>
                            <a href="#" className="hover-popup">
                              <i className="fas fa-external-link-alt"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <!-- single-portfolio end  -->
                  <!-- single-portfolio start  --> */}
                      <div className="portfolio-single-item">
                        <div className="portfolio-single-front">
                          <div className="single-image-wrap">
                            <img
                              src="https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1430&q=80"
                              alt=""
                            />
                          </div>
                          <div className="single-content">
                            <h3>psd to html</h3>
                          </div>
                        </div>
                        <div className="portfolio-single-hover">
                          <div className="hover-wrap">
                            <a href="#" className="hover-popup">
                              <i className="fas fa-camera-retro"></i>
                            </a>
                            <a href="#" className="hover-popup">
                              <i className="fas fa-external-link-alt"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <!-- single-portfolio end  -->
                  <!-- single-portfolio start  --> */}
                      <div className="portfolio-single-item">
                        <div className="portfolio-single-front">
                          <div className="single-image-wrap">
                            <img
                              src="https://images.unsplash.com/photo-1542744173-b3cd6377db95?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                              alt=""
                            />
                          </div>
                          <div className="single-content">
                            <h3>psd to html</h3>
                          </div>
                        </div>
                        <div className="portfolio-single-hover">
                          <div className="hover-wrap">
                            <a href="#" className="hover-popup">
                              <i className="fas fa-camera-retro"></i>
                            </a>
                            <a href="#" className="hover-popup">
                              <i className="fas fa-external-link-alt"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <!-- single-portfolio end  -->
                  <!-- single-portfolio start  --> */}
                      <div className="portfolio-single-item">
                        <div className="portfolio-single-front">
                          <div className="single-image-wrap">
                            <img
                              src="https://images.unsplash.com/photo-1542744173-b3cd6377db95?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                              alt=""
                            />
                          </div>
                          <div className="single-content">
                            <h3>psd to html</h3>
                          </div>
                        </div>
                        <div className="portfolio-single-hover">
                          <div className="hover-wrap">
                            <a href="#" className="hover-popup">
                              <i className="fas fa-camera-retro"></i>
                            </a>
                            <a href="#" className="hover-popup">
                              <i className="fas fa-external-link-alt"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <!-- single-portfolio end  -->
                  <!-- single-portfolio start  --> */}
                      <div className="portfolio-single-item">
                        <div className="portfolio-single-front">
                          <div className="single-image-wrap">
                            <img
                              src="https://images.unsplash.com/photo-1542744173-b3cd6377db95?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                              alt=""
                            />
                          </div>
                          <div className="single-content">
                            <h3>psd to html</h3>
                          </div>
                        </div>
                        <div className="portfolio-single-hover">
                          <div className="hover-wrap">
                            <a href="#" className="hover-popup">
                              <i className="fas fa-camera-retro"></i>
                            </a>
                            <a href="#" className="hover-popup">
                              <i className="fas fa-external-link-alt"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <!-- single-portfolio end  -->
                  <!-- single-portfolio start  --> */}
                      <div className="portfolio-single-item">
                        <div className="portfolio-single-front">
                          <div className="single-image-wrap">
                            <img
                              src="https://images.unsplash.com/photo-1542744173-b3cd6377db95?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                              alt=""
                            />
                          </div>
                          <div className="single-content">
                            <h3>psd to html</h3>
                          </div>
                        </div>
                        <div className="portfolio-single-hover">
                          <div className="hover-wrap">
                            <a href="#" className="hover-popup">
                              <i className="fas fa-camera-retro"></i>
                            </a>
                            <a href="#" className="hover-popup">
                              <i className="fas fa-external-link-alt"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <!-- single-portfolio end  -->
                  <!-- single-portfolio start  --> */}
                      <div className="portfolio-single-item">
                        <div className="portfolio-single-front">
                          <div className="single-image-wrap">
                            <img
                              src="https://images.unsplash.com/photo-1542744173-b3cd6377db95?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                              alt=""
                            />
                          </div>
                          <div className="single-content">
                            <h3>psd to html</h3>
                          </div>
                        </div>
                        <div className="portfolio-single-hover">
                          <div className="hover-wrap">
                            <a href="#" className="hover-popup">
                              <i className="fas fa-camera-retro"></i>
                            </a>
                            <a href="#" className="hover-popup">
                              <i className="fas fa-external-link-alt"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <!-- single-portfolio end  --> */}
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
