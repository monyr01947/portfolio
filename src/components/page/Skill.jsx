import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo_2 from "./img/logo-2.png";
import Logo from "./img/logo.png";
import MyAccorDion from "./MyAccorDion";
import SkillBar from "./Skillbar";
export default class Skill extends Component {
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}
