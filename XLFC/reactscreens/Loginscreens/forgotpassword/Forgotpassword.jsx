import React from "react";
import "./style.css";

export const ForgotPassword = () => {
    return (
        <div className="forgot-password">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <img className="img" alt="Img" src="62ed26e70a7ec30939dc5e5f-BG-blur-light-1-2.png" />
                    <div className="frame">
                        <div className="login">Continue</div>
                    </div>
                    <div className="frame-wrapper">
                        <div className="div">
                            <input className="email" placeholder="Enter Your Email" type="email" />
                            <div className="sarah-collin-wrapper">
                                <div className="sarah-collin">sarah_collin@gmail.com</div>
                            </div>
                        </div>
                    </div>
                    <div className="fill-your-profile">Forgot Password</div>
                    <img className="frame-2" alt="Frame" src="frame-5.svg" />
                    <div className="status-bar">
                        <div className="time">
                            <div className="text-wrapper">9:41</div>
                        </div>
                        <div className="levels">
                            <div className="battery">
                                <div className="overlap-group">
                                    <div className="capacity" />
                                </div>
                                <img className="cap" alt="Cap" src="cap.svg" />
                            </div>
                            <img className="wifi" alt="Wifi" src="wifi.svg" />
                            <img className="cellular-connection" alt="Cellular connection" src="cellular-connection.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
