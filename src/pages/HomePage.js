import React from "react";
import Navbar from "./Navbar";
import Navbar1 from "./Navbar1";
import "./HomePage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";


export default function HomePage() {
  return (
    <div className="home">
      <Navbar />
      <Navbar1 />


      <section className="home1-hero-new-home">
        <div className="home1-hero-frame-new-home">
          <Swiper
            className="home1-hero-swiper-new-home"
            modules={[Autoplay]}
            loop
            slidesPerView={1}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            speed={900}
          >
            <SwiperSlide>
              <div className="home1-hero-slide-new-home">
                <img src="/images/slide3.png" alt="Main Banner" loading="eager" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="home1-hero-slide-new-home">
                <img src="/images/slide2.png" alt="Men Banner" loading="lazy" decoding="async" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="home1-hero-slide-new-home">
                <img src="/images/slide1.png" alt="Women Banner" loading="lazy" decoding="async" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>



      {/*<section className="ai-duo-section">
        <div className="ai-duo-container">
          <div className="ai-duo-left">
            <div className="ai-duo-frame">
              <Swiper
                className="ai-duo-slider"
                modules={[Autoplay]}
                loop={true}
                slidesPerView={1}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                speed={900}
              >
                <SwiperSlide>
                  <div className="ai-duo-slide">
                    <img src="/images/slide1.png" alt="Campus Life" loading="lazy" decoding="async" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="ai-duo-slide">
                    <img src="/images/slide2.png" alt="Labs and Research" loading="lazy" decoding="async" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="ai-duo-slide">
                    <img src="/images/slide3.png" alt="Placements and Career" loading="lazy" decoding="async" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="ai-duo-right">
            <div className="ai-duo-right-bg"></div>
            <div className="ai-duo-right-inner">
              <div className="ai-duo-head">
                <h2 className="ai-duo-title">Learn. Build. Lead.</h2>
                <div className="ai-duo-underline">
                  <span className="ai-line large"></span>
                  <span className="ai-line medium"></span>
                  <span className="ai-line small"></span>
                </div>
              </div>

              <p className="ai-duo-desc">
                Welcome to NSRIET. An industry-aligned, research-driven campus where students turn ideas into impact.
                Explore diploma, undergraduate, and postgraduate programs guided by experienced faculty and strong industry partnerships.
              </p>

              <div className="ai-duo-pills">
                <span className="ai-pill">NAAC Accredited</span>
                <span className="ai-pill">AICTE Approved</span>
                <span className="ai-pill">Autonomous</span>
              </div>

              <div className="ai-btn-row">
                <a href="/programs" className="ai-btn">
                  Explore Programs
                  <span className="ai-btn-shine"></span>
                </a>
                <a href="/prospectus" className="ai-btn-outline">Download Prospectus</a>
              </div>

              <div className="ai-duo-stats">
                <div className="stat">
                  <span className="stat-num">2008</span>
                  <span className="stat-label">Established</span>
                </div>
                <div className="stat">
                  <span className="stat-num">4500+</span>
                  <span className="stat-label">Students</span>
                </div>
                <div className="stat">
                  <span className="stat-num">300+</span>
                  <span className="stat-label">Recruiters</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}


      <div className="banner">
        <img src="/images/main-banner.jpg" alt="Main Banner" className="banner-img" />
      </div>
    </div>
  );
}
