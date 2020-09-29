import React, { Component } from "react";
import { Link } from "react-router-dom";
import Blog_1 from "./img/blog-1.jpg";
import Logo_2 from "./img/logo-2.png";
import Logo from "./img/logo.png";
export default class Blog extends Component {
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
              <div class="blog-area">
                <div class="blog-padding width-wrap">
                  <div class="blog-title">
                    <h2>
                      <span>My</span> Blog
                    </h2>
                  </div>
                  <div class="blog-main-wrap">
                    <div class="blog-single-wrap">
                      <div class="blog-article-wrap">
                        {/* <!-- blog-single start --> */}
                        <div class="blog-single-item">
                          <div class="blog-image">
                            <img src={Blog_1} alt="blog thumb" />
                          </div>
                          <div class="blog-content">
                            <a href="#">
                              <h4>Lorem, ipsum dolor.</h4>
                            </a>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Architecto quos corrupti labore, accusamus
                              veritatis soluta.
                            </p>
                          </div>
                          <div class="blog-review">
                            <span>
                              <p>0</p>
                              <i class="far fa-heart"></i>
                            </span>
                            <span>
                              <p>0</p>
                              <i class="far fa-thumbs-up"></i>
                            </span>
                            <span>
                              <p>0</p>
                              <i class="far fa-star"></i>
                            </span>
                          </div>
                        </div>
                        {/* <!-- blog-single end -->
                    <!-- blog-single start --> */}
                        <div class="blog-single-item">
                          <div class="blog-image">
                            <img src={Blog_1} alt="blog thumb" />
                          </div>
                          <div class="blog-content">
                            <a href="#">
                              <h4>Lorem, ipsum dolor.</h4>
                            </a>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Architecto quos corrupti labore, accusamus
                              veritatis soluta.
                            </p>
                          </div>
                          <div class="blog-review">
                            <span>
                              <p>0</p>
                              <i class="far fa-heart"></i>
                            </span>
                            <span>
                              <p>0</p>
                              <i class="far fa-thumbs-up"></i>
                            </span>
                            <span>
                              <p>0</p>
                              <i class="far fa-star"></i>
                            </span>
                          </div>
                        </div>
                        {/* <!-- blog-single end -->
                    <!-- blog-single start --> */}
                        <div class="blog-single-item">
                          <div class="blog-image">
                            <img src={Blog_1} alt="blog thumb" />
                          </div>
                          <div class="blog-content">
                            <a href="#">
                              <h4>Lorem, ipsum dolor.</h4>
                            </a>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Architecto quos corrupti labore, accusamus
                              veritatis soluta.
                            </p>
                          </div>
                          <div class="blog-review">
                            <span>
                              <p>0</p>
                              <i class="far fa-heart"></i>
                            </span>
                            <span>
                              <p>0</p>
                              <i class="far fa-thumbs-up"></i>
                            </span>
                            <span>
                              <p>0</p>
                              <i class="far fa-star"></i>
                            </span>
                          </div>
                        </div>
                        {/* <!-- blog-single end -->
                    <!-- blog-single start --> */}
                        <div class="blog-single-item">
                          <div class="blog-image">
                            <img src={Blog_1} alt="blog thumb" />
                          </div>
                          <div class="blog-content">
                            <a href="#">
                              <h4>Lorem, ipsum dolor.</h4>
                            </a>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Architecto quos corrupti labore, accusamus
                              veritatis soluta.
                            </p>
                          </div>
                          <div class="blog-review">
                            <span>
                              <p>0</p>
                              <i class="far fa-heart"></i>
                            </span>
                            <span>
                              <p>0</p>
                              <i class="far fa-thumbs-up"></i>
                            </span>
                            <span>
                              <p>0</p>
                              <i class="far fa-star"></i>
                            </span>
                          </div>
                        </div>
                        {/* <!-- blog-single end --> */}
                      </div>
                      <aside class="blog-sidebar">
                        <div class="sidebar-title">
                          <h4>latest blog</h4>
                        </div>
                        <div class="blog-sidebar-wrap">
                          <ul>
                            <li>
                              <div class="sidebar-item">
                                <div class="sidebar-image">
                                  <img src={Blog_1} alt="" />
                                </div>
                                <div class="sidebar-content">
                                  <h4>Lorem, ipsum dolor.</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Ut, et.
                                  </p>
                                  <a href="#">Read More</a>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="sidebar-item">
                                <div class="sidebar-image">
                                  <img src={Blog_1} alt="" />
                                </div>
                                <div class="sidebar-content">
                                  <h4>Lorem, ipsum dolor.</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Ut, et.
                                  </p>
                                  <a href="#">Read More</a>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="sidebar-item">
                                <div class="sidebar-image">
                                  <img src={Blog_1} alt="" />
                                </div>
                                <div class="sidebar-content">
                                  <h4>Lorem, ipsum dolor.</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Ut, et.
                                  </p>
                                  <a href="#">Read More</a>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="sidebar-item">
                                <div class="sidebar-image">
                                  <img src={Blog_1} alt="" />
                                </div>
                                <div class="sidebar-content">
                                  <h4>Lorem, ipsum dolor.</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Ut, et.
                                  </p>
                                  <a href="#">Read More</a>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="sidebar-item">
                                <div class="sidebar-image">
                                  <img src={Blog_1} alt="" />
                                </div>
                                <div class="sidebar-content">
                                  <h4>Lorem, ipsum dolor.</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Ut, et.
                                  </p>
                                  <a href="#">Read More</a>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="sidebar-item">
                                <div class="sidebar-image">
                                  <img src={Blog_1} alt="" />
                                </div>
                                <div class="sidebar-content">
                                  <h4>Lorem, ipsum dolor.</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Ut, et.
                                  </p>
                                  <a href="#">Read More</a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </aside>
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
