import React, { useState } from "react";
import "../assets/style/landingpage.css";
import AdminLogin from "./Admin/AdminLogin";
import UsersLogin from "./Users/UsersLogin";
import loginVideo from "../assets/videos/Futuristic_Login_Screen_Background_Video.mp4";

const LandingPage = () => {
  const [isAdminLogin, setIsAdminLogin] = useState(true);
  const [animating, setAnimating]       = useState(false);

  const toggleLogin = () => {
    setAnimating(true);
    setTimeout(() => {
      setIsAdminLogin((prev) => !prev);
      setAnimating(false);
    }, 280);
  };

  return (
    <>
      {/* ── Marquee Banner ── */}
      <div className="top_marquee">
        <div className="marquee_track">
          {[1, 2].map((i) => (
            <span key={i} className="marquee_content">
              <span className="marquee_dot">✦</span> Welcome To My Online Shop
              <span className="marquee_dot">✦</span> Secure Login
              <span className="marquee_dot">✦</span> Best Offers Available
              <span className="marquee_dot">✦</span> Fast Delivery
              <span className="marquee_dot">✦</span> Premium Quality Products
              <span className="marquee_dot">✦</span> 24/7 Customer Support &nbsp;&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      <div className="landingpage">

        {/* ── LEFT: Video Section ── */}
        <div className="left_section">
          <video className="bg_video" src={loginVideo} autoPlay loop muted playsInline />

          <div className="overlay">
            <div className="overlay_noise" />

            <div className="overlay_content">
              <div className="overlay_badge">
                <span className="badge_pulse" />
                <span>Secure Portal</span>
              </div>

              <h1 className="overlay_title">
                <span className="title_line">Welcome</span>
                <span className="title_line title_accent">Back</span>
              </h1>

              <p className="overlay_subtitle">
                Admin &amp; User Login — Your store, your control.
              </p>

              <div className="overlay_stats">
                {[
                  { value: "12K+", label: "Customers" },
                  { value: "480",  label: "Products"  },
                  { value: "99%",  label: "Uptime"    },
                ].map((s, i) => (
                  <React.Fragment key={s.label}>
                    {i > 0 && <div className="stat_divider" />}
                    <div className="stat_item">
                      <strong>{s.value}</strong>
                      <span>{s.label}</span>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Corner frame decorations */}
            <div className="frame_corner fc_tl" />
            <div className="frame_corner fc_tr" />
            <div className="frame_corner fc_bl" />
            <div className="frame_corner fc_br" />
          </div>
        </div>

        {/* ── RIGHT: Login Section ── */}
        <div className="right_section">
          <div className="bg_blob blob_1" />
          <div className="bg_blob blob_2" />

          <div className="container">

            {/* Brand Header */}
            <div className="brand_header">
              <div className="brand_icon">
                <svg viewBox="0 0 28 28" fill="none">
                  <polygon
                    points="14,2 17,10 25,10.5 19,16 21,24 14,20 7,24 9,16 3,10.5 11,10"
                    stroke="currentColor" strokeWidth="1.5" fill="none"
                  />
                </svg>
              </div>
              <div>
                <div className="brand_name">MyShop</div>
                <div className="brand_tagline">Management Portal</div>
              </div>
            </div>

            {/* Head */}
            <div className="head">
              <h2 className="head_title">
                {isAdminLogin ? "Admin" : "User"}
                <span className="head_title_accent"> Login</span>
              </h2>
              <p className="head_subtitle">
                {isAdminLogin
                  ? "Full store access & analytics"
                  : "Browse, order & track deliveries"}
              </p>

              {/* Role Toggle Pill */}
              <div className="toggle_pill">
                <button
                  className={`toggle_option ${isAdminLogin ? "active" : ""}`}
                  onClick={() => !isAdminLogin && toggleLogin()}
                >
                  <svg viewBox="0 0 16 16" fill="currentColor" width="13" height="13">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5 5a5 5 0 0 0-10 0h10z" />
                  </svg>
                  Admin
                </button>
                <button
                  className={`toggle_option ${!isAdminLogin ? "active" : ""}`}
                  onClick={() => isAdminLogin && toggleLogin()}
                >
                  <svg viewBox="0 0 16 16" fill="currentColor" width="13" height="13">
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    <path fillRule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                  </svg>
                  User
                </button>
              </div>
            </div>

            {/* Login Form with fade animation */}
            <div className={`form_wrapper ${animating ? "form_exit" : "form_enter"}`}>
              {isAdminLogin ? <AdminLogin /> : <UsersLogin />}
            </div>

            <p className="login_footer">🔒 Protected by 256-bit SSL encryption</p>
          </div>
        </div>

      </div>
    </>
  );
};

export default LandingPage;





// import React, { useState } from "react";
// import "../assets/style/landingpage.css";
// import AdminLogin from "./Admin/AdminLogin";
// import UsersLogin from "./Users/UsersLogin";
// import loginVideo from "../assets/videos/Futuristic_Login_Screen_Background_Video.mp4";

// const LandingPage = () => {

//   const [isAdminLogin, setIsAdminLogin] = useState(true);

//   const toggleLogin = () => {
//     setIsAdminLogin(!isAdminLogin);
//   };

//   return (
//     <>
//       {/* Marquee Banner */}
//       <div className="top_marquee">
//         <div className="marquee_track">
//           <span>
//             🚀 Welcome To My Online Shop — Secure Login — Best Offers Available — Fast Delivery —
//           </span>
//           <span>
//             🚀 Welcome To My Online Shop — Secure Login — Best Offers Available — Fast Delivery —
//           </span>
//         </div>
//       </div>

//       <div className="landingpage">

//         {/* LEFT VIDEO SECTION */}
//         <div className="left_section">

//           <video
//             className="bg_video"
//             src={loginVideo}
//             autoPlay
//             loop
//             muted
//             playsInline
//           />

//           <div className="overlay">
//             <h1>Welcome Back</h1>
//             <p>Secure Admin & User Login</p>
//           </div>

//         </div>


//         {/* RIGHT LOGIN SECTION */}
//         <div className="right_section">

//           <div className="container">

//             <div className="head">

//               <h2>
//                 {isAdminLogin ? "Admin Login" : "User Login"}
//               </h2>

//               <div className="btn">

//                 <button
//                   onClick={toggleLogin}
//                   className={isAdminLogin ? "right" : "left"}
//                 >
//                   {isAdminLogin ? "Admin" : "User"}
//                 </button>

//               </div>

//             </div>

//             {/* Login Forms */}
//             {isAdminLogin ? <AdminLogin /> : <UsersLogin />}

//           </div>

//         </div>

//       </div>
//     </>
//   );
// };

// export default LandingPage;