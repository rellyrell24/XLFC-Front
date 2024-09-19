import React, { useState } from "react";
import { Frame } from "./Frame";
import { SocialIcon } from "./SocialIcon";
import "./style.css";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div className="login">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <img className="img" alt="Img" src="62ed26e70a7ec30939dc5e5f-BG-blur-light-1-2.png" />
                    <div className="div-wrapper">
                        <div className="div">Login</div>
                    </div>
                    <div className="social-button">
                        <div className="frame-2">
                            <SocialIcon className="social-icon" />
                            <div className="text-wrapper-2">Continue with Google</div>
                        </div>
                    </div>
                    <div className="frame-3">
                        <div className="frame-4" />
                        <div className="forgot-password-2">Or continue with</div>
                        <div className="frame-5" />
                    </div>
                    <div className="frame-8">
                        <div className="text-wrapper-3">Email</div>
                        <div className="frame-9">
                            <input 
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                className="email-input"
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>
                    <div className="frame-6">
                        <div className="text-wrapper-3">Password</div>
                        <div className="frame-7">
                            <input
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}
                                className="password-input"
                                placeholder="Enter your password"
                            />
                            <img className="eye" alt="Eye" src="eye-1.svg" />
                        </div>
                    </div>
                    <Frame className="frame-16" />
                    <div className="frame-11">
                        <div className="text-wrapper-4">Welcome!</div>
                        <div className="text-wrapper-5">To The XLFC App!</div>
                    </div>
                    <div className="text-wrapper-6">Forgot Password?</div>
                    <div className="status-bar">
                        <div className="time">
                            <div className="time-2">9:41</div>
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
