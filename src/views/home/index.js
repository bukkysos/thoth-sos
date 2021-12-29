import React from "react";
import { Me } from "../../assets/images";
import { Image } from "../../components/Image";
import "./homeStyle.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <div className="bio">
          <div className="profile_image">
            <Image fallback={Me} />
          </div>
          <div className="bio_details">
            <div className="bio_details_name">
              <h4>Anyanwu</h4>
              <h4>Ebuka</h4>
            </div>
            <div className="bio_details_title">
              <p>Frontend Developer</p>
            </div>
          </div>
        </div>
        <div className="hamburger open">
          <a href="#menu">
            <i class="fa fa-bars"></i>
          </a>
        </div>
        <div className="links">
          <ul className="mobileMenu" id="menu">
            <div className="hamburger close">
              <a href="#">
                <i class="fa fa-close"></i>
              </a>
            </div>
            <li>All Posts</li>
            <li>General</li>
            <li>My views</li>
            <li>Menu</li>
            <li>Menu</li>
            <li>Menu</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
