import React, { Component } from "react";
import { Link } from "react-router-dom";

import "react-accessible-accordion/dist/fancy-example.css";

import P_logo from "./img/333.jpg";
import Logo from "./img/logo.png";
import SkillBar from "./Skillbar";
import MyAccorDion from "./MyAccorDion";
import MyLocation from "./MyLocation";
export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="body-button">
          <Link className="go-to-dashboard" to="/DashBoard">
            Go To Dashboard
          </Link>
        </div>
        <div className="dashboard-main-wrap">
          <div className="dashboard-padding">
            <div className="dashboard-header">
              <div className="dashboard-header-left">
                <div className="dashboard-main-icon-home">
                  <Link to="/DashBoard" title="Go To Dashboard">
                    <div className="d-main-icon-wrap home-page-header">
                      <img src={Logo} alt="" />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="dashboard-header-right">
                <div className="dashboard-profile">
                  <h1>
                    Sad<span>ik</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- hero area  --> */}
        <div className="hero-main-area">
          <div className="hero-padding">
            <div className="hero-main-wrap">
              <div className="hero-profile-wrap">
                <div className="hero-image">
                  <img src={P_logo} alt="" />
                </div>
                <div className="hero-content">
                  <h2>MD. Akhtaruzzaman</h2>
                  <h3>I am A Frontend Developer</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis quae culpa eligendi tempore non illum odio in omnis
                    quasi hic.
                  </p>
                </div>
                <div className="hero-social">
                  <span>
                    <Link to="https://www.facebook.com/">
                      <i className="fab fa-facebook"></i>
                    </Link>
                  </span>
                  <span>
                    <Link to="https://www.facebook.com/">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </span>
                  <span>
                    <Link to="https://www.facebook.com/">
                      <i className="fab fa-skype"></i>
                    </Link>
                  </span>
                  <span>
                    <Link to="https://www.facebook.com/">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- hero area  -->
    <!-- service area  --> */}
        <div className="service-area">
          <div className="service-padding width-wrap">
            <div className="service-main-wrap">
              <div className="service-title">
                <h2>
                  My <span>Services</span>
                </h2>
              </div>
              <div className="service-item-wrap">
                <div className="service-single-items">
                  <ul>
                    <li>
                      <div className="single-item">
                        <span className="service-item-logo">
                          <i className="fas fa-yin-yang"></i>
                        </span>
                        <div className="service-item-content">
                          <h3>Web Design</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolorum iusto cumque debitis culpa quod
                            nesciunt vitae perspiciatis laborum quaerat atque?
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <span className="service-item-logo">
                          <i className="fas fa-layer-group"></i>
                        </span>
                        <div className="service-item-content">
                          <h3>UI/UX Design</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolorum iusto cumque debitis culpa quod
                            nesciunt vitae perspiciatis laborum quaerat atque?
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <span className="service-item-logo">
                          <i className="fas fa-book-reader"></i>
                        </span>
                        <div className="service-item-content">
                          <h3>Graphics Design</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolorum iusto cumque debitis culpa quod
                            nesciunt vitae perspiciatis laborum quaerat atque?
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <span className="service-item-logo">
                          <i className="fab fa-react"></i>
                        </span>
                        <div className="service-item-content">
                          <h3>Frontend Development</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolorum iusto cumque debitis culpa quod
                            nesciunt vitae perspiciatis laborum quaerat atque?
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <span className="service-item-logo">
                          <i className="fab fa-wordpress-simple"></i>
                        </span>
                        <div className="service-item-content">
                          <h3>Wordpress</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolorum iusto cumque debitis culpa quod
                            nesciunt vitae perspiciatis laborum quaerat atque?
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <span className="service-item-logo">
                          <i className="fas fa-viruses"></i>
                        </span>
                        <div className="service-item-content">
                          <h3>Bug Fix</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolorum iusto cumque debitis culpa quod
                            nesciunt vitae perspiciatis laborum quaerat atque?
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
        {/* <!-- service area  -->
    <!-- skill area  --> */}
        <div className="skill-area">
          <div className="skill-padding width-wrap">
            <div className="skill-title">
              <h2>
                <span>My</span> Skills
              </h2>
            </div>
            <div className="skill-main-wrap">
              <div className="skill-single-wrap">
                <div className="skill-left">
                  <MyAccorDion />
                </div>
                <div className="skill-right">
                  <SkillBar />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- skill area  -->
    <!-- portfolio area  --> */}
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
                      <a
                        href="https://www.facebook.com/"
                        className="hover-popup"
                      >
                        <i className="fas fa-camera-retro"></i>
                      </a>
                      <a
                        href="https://www.facebook.com/"
                        className="hover-popup"
                      >
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
                      <a
                        href="https://www.facebook.com/"
                        className="hover-popup"
                      >
                        <i className="fas fa-camera-retro"></i>
                      </a>
                      <a
                        href="https://www.facebook.com/"
                        className="hover-popup"
                      >
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
                      <a
                        href="https://www.facebook.com/"
                        className="hover-popup"
                      >
                        <i className="fas fa-camera-retro"></i>
                      </a>
                      <a
                        href="https://www.facebook.com/"
                        className="hover-popup"
                      >
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
                      <a
                        href="https://www.facebook.com/"
                        className="hover-popup"
                      >
                        <i className="fas fa-camera-retro"></i>
                      </a>
                      <a
                        href="https://www.facebook.com/"
                        className="hover-popup"
                      >
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
        {/* <!-- portfolio area  -->
    <!-- blog area  --> */}
        <div className="blog-area">
          <div className="blog-padding width-wrap">
            <div className="blog-title">
              <h2>
                <span>My</span> Blog
              </h2>
            </div>
            <div className="blog-main-wrap">
              <div className="blog-single-wrap">
                <div className="blog-article-wrap">
                  {/* <!-- blog-single start --> */}
                  <div className="blog-single-item">
                    <div className="blog-image">
                      <img src="img/blog-1.jpg" alt="blog thumb" />
                    </div>
                    <div className="blog-content">
                      <Link to="https://www.facebook.com/">
                        <h4>Lorem, ipsum dolor.</h4>
                      </Link>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto quos corrupti labore, accusamus veritatis
                        soluta.
                      </p>
                    </div>
                    <div className="blog-review">
                      <span>
                        <p>0</p>
                        <i className="far fa-heart"></i>
                      </span>
                      <span>
                        <p>0</p>
                        <i className="far fa-thumbs-up"></i>
                      </span>
                      <span>
                        <p>0</p>
                        <i className="far fa-star"></i>
                      </span>
                    </div>
                  </div>
                  {/* <!-- blog-single end -->
              <!-- blog-single start --> */}
                  <div className="blog-single-item">
                    <div className="blog-image">
                      <img src="img/blog-1.jpg" alt="blog thumb" />
                    </div>
                    <div className="blog-content">
                      <Link to="https://www.facebook.com/">
                        <h4>Lorem, ipsum dolor.</h4>
                      </Link>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto quos corrupti labore, accusamus veritatis
                        soluta.
                      </p>
                    </div>
                    <div className="blog-review">
                      <span>
                        <p>0</p>
                        <i className="far fa-heart"></i>
                      </span>
                      <span>
                        <p>0</p>
                        <i className="far fa-thumbs-up"></i>
                      </span>
                      <span>
                        <p>0</p>
                        <i className="far fa-star"></i>
                      </span>
                    </div>
                  </div>
                  {/* <!-- blog-single end --> */}
                </div>
                <aside className="blog-sidebar">
                  <div className="sidebar-title">
                    <h4>latest blog</h4>
                  </div>
                  <div className="blog-sidebar-wrap">
                    <ul>
                      <li>
                        <div className="sidebar-item">
                          <div className="sidebar-image">
                            <img src="img/blog-1.jpg" alt="" />
                          </div>
                          <div className="sidebar-content">
                            <h4>Lorem, ipsum dolor.</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Ut, et.
                            </p>
                            <a href="https://www.facebook.com/">Read More</a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="sidebar-item">
                          <div className="sidebar-image">
                            <img src="img/blog-1.jpg" alt="" />
                          </div>
                          <div className="sidebar-content">
                            <h4>Lorem, ipsum dolor.</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Ut, et.
                            </p>
                            <a href="https://www.facebook.com/">Read More</a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="sidebar-item">
                          <div className="sidebar-image">
                            <img src="img/blog-1.jpg" alt="" />
                          </div>
                          <div className="sidebar-content">
                            <h4>Lorem, ipsum dolor.</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Ut, et.
                            </p>
                            <a href="https://www.facebook.com/">Read More</a>
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
        {/* <!-- blog area  -->
    <!-- contact-area  --> */}
        <div className="contact-area">
          <div className="contact-padding width-wrap">
            <div className="contact-title">
              <h2>
                get in <span>touch</span>
              </h2>
            </div>
            <div className="contact-main-wrap">
              <div className="contact-map-area">
                <MyLocation />
              </div>
              <div className="contact-form-area">
                <form action="">
                  <div className="contact-form">
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
                    {/* <!-- <input type="button" value="Submit" /> --> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- contact-area  --> */}
        <div className="footer-area">
          <div className="footer-padding">
            <div className="footer-main-wrap">
              <div className="footer-content">
                <p>All Copyright reserved by MD A. Monyr || &copy; 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
