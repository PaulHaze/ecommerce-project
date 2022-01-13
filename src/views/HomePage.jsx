import React from 'react';

import { NavBar, ClothingCategory } from '@/components';

import '../styles/HomePage.module.scss';

export function HomePage() {
  return (
    <div className="">
      <section className="nav">
        <NavBar />
      </section>
      <div className="homepage">
        <section className="directory-menu">
          <ClothingCategory categoryTitle="Hats" />
          <ClothingCategory categoryTitle="Jackets" />
          <ClothingCategory categoryTitle="Shoes" />
          <ClothingCategory categoryTitle="Womens" />
          <ClothingCategory categoryTitle="Mens" />
        </section>
      </div>
      <section>
        <h2>Their Version</h2>
        <div className="homepage">
          <h1>Welcome to my Homepage</h1>
          <div className="directory-menu">
            <div className="menu-item">
              <div className="content">
                <div className="title">HATS</div>
                <span className="subtitle">SHOP NOW</span>
              </div>
            </div>
            <div className="menu-item">
              <div className="content">
                <div className="title">JACKETS</div>
                <span className="subtitle">SHOP NOW</span>
              </div>
            </div>
            <div className="menu-item">
              <div className="content">
                <div className="title">SHOES</div>
                <span className="subtitle">SHOP NOW</span>
              </div>
            </div>
            <div className="menu-item">
              <div className="content">
                <div className="title">WOMENS</div>
                <span className="subtitle">SHOP NOW</span>
              </div>
            </div>
            <div className="menu-item">
              <div className="content">
                <div className="title">MENS</div>
                <span className="subtitle">SHOP NOW</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
