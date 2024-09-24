import React from "react";
import bgBlurLight12 from "./62ed26e70a7ec30939dc5e5f-BG-blur-light-1-2.png";
import bookmark3 from "./bookmark-3.svg";
import cap from "./cap.svg";
import cardiogram1 from "./cardiogram-1.svg";
import cellularConnection from "./cellular-connection.svg";
import frame5 from "./frame-5.svg";
import home1 from "./home-1.svg";
import setting from "./setting.svg";
import wifi from "./wifi.svg";
import "./style.css";

export const Settings = () => {
  const handleError = (error) => {
    console.log("Error loading resource:", error.target.src);
  };

  return (
    <div className="settings">
      <img className="img" alt="Background" src={bgBlurLight12} onError={handleError} />
      <div className="status-bar">
        <div className="time">
          <div className="text-wrapper">9:41</div>
        </div>
        <div className="levels">
          <div className="battery">
            <div className="overlap-group">
              <div className="capacity" />
            </div>
            <img className="cap" alt="Battery cap" src={cap} onError={handleError} />
          </div>
          <img className="wifi" alt="Wifi signal" src={wifi} onError={handleError} />
          <img className="cellular-connection" alt="Cellular connection" src={cellularConnection} onError={handleError} />
        </div>
      </div>
      <div className="frame">
        <div className="home-indicator" />
        <div className="div">
          <img className="img-2" alt="Home icon" src={home1} onError={handleError} />
          <div className="text-wrapper-2">Home</div>
        </div>
        <div className="frame-2">
          <img className="img-2" alt="Bookmark icon" src={bookmark3} onError={handleError} />
          <div className="text-wrapper-3">League Table</div>
        </div>
        <div className="frame-3">
          <img className="cardiogram" alt="Cardiogram icon" src={cardiogram1} onError={handleError} />
          <div className="text-wrapper-4">Health Data</div>
        </div>
        <div className="frame-4">
          <img className="img-2" alt="Setting icon" src={setting} onError={handleError} />
          <div className="text-wrapper-5">Setting</div>
        </div>
      </div>
      <div className="fill-your-profile">Settings</div>
      <img className="frame-5" alt="Profile frame" src={frame5} onError={handleError} />
      <div className="frame-6">
        <div className="email">Profile Settings</div>
        <div className="frame-7" />
        <div className="email-2">My Teams</div>
        <div className="frame-7" />
        <div className="email-2">Point System Overview</div>
        <div className="frame-7" />
        <div className="email-2">Weight Tracker</div>
        <div className="frame-7" />
        <div className="email-2">Notifications Settings</div>
        <div className="frame-7" />
        <div className="email-2">Privacy and Security</div>
        <div className="frame-7" />
        <div className="email-2">Help & Support</div>
        <div className="frame-7" />
        <div className="email-3">Log Out</div>
      </div>
    </div>
  );
}