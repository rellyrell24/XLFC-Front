import React, { useState } from "react";
import "./style.css";

export const CreateAccount = () => {
    const [fullName, setFullName] = useState("");
    const [dob, setDob] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleInputChange = (setter) => (e) => {
        setter(e.target.value);
    };

    return (
        <div className="create-account">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <img className="img" alt="Img" src="62ed26e70a7ec30939dc5e5f-BG-blur-light-1-2.png" />
                    <div className="frame">
                        <div className="login">Create Account</div>
                    </div>
                    <div className="div">
                        <div className="frame-2">
                            <input
                                className="email"
                                placeholder="Full Name"
                                type="text"
                                value={fullName}
                                onChange={handleInputChange(setFullName)}
                            />
                            <div className="frame-3">
                                <label className="sarah-collin" htmlFor="input-1">
                                    Enter Full Name
                                </label>
                            </div>
                        </div>

                        <div className="frame-2">
                            <div className="text-wrapper">Date Of Birth</div>
                            <div className="frame-3">
                                <input
                                    className="email"
                                    placeholder="Enter Date Of Birth"
                                    type="date"
                                    value={dob}
                                    onChange={handleInputChange(setDob)}
                                />
                                <img className="calendar" alt="Calendar" src="calendar.png" />
                            </div>
                        </div>

                        <div className="frame-2">
                            <div className="text-wrapper">Email</div>
                            <div className="frame-3">
                                <input
                                    className="email"
                                    placeholder="Enter Email Address"
                                    type="email"
                                    value={email}
                                    onChange={handleInputChange(setEmail)}
                                />
                            </div>
                        </div>

                        <div className="frame-2">
                            <input
                                className="email"
                                placeholder="Phone Number"
                                type="tel"
                                value={phone}
                                onChange={handleInputChange(setPhone)}
                            />
                            <div className="frame-3">
                                <div className="sarah-collin-2">+1 000 000 000</div>
                                <img className="mask-group" alt="Mask group" src="mask-group-1.svg" />
                                <img className="arrow-down" alt="Arrow down" src="arrow-down-2-1.svg" />
                            </div>
                        </div>

                        <div className="frame-2">
                            <div className="text-wrapper">Password</div>
                            <div className="frame-3">
                                <input
                                    className="email"
                                    placeholder="Enter Password"
                                    type="password"
                                    value={password}
                                    onChange={handleInputChange(setPassword)}
                                />
                                <img className="ellipse-copy" alt="Ellipse copy" src="ellipse-1-copy-6.svg" />
                            </div>
                        </div>

                        <div className="frame-2">
                            <input
                                className="email"
                                placeholder="Confirm Password"
                                type="password"
                                value={confirmPassword}
                                onChange={handleInputChange(setConfirmPassword)}
                            />
                            <div className="frame-3">
                                <img className="ellipse-copy" alt="Ellipse copy" src="image.svg" />
                            </div>
                        </div>
                    </div>

                    <div className="fill-your-profile">Create Account</div>
                    <img className="frame-4" alt="Frame" src="frame-5.svg" />

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
