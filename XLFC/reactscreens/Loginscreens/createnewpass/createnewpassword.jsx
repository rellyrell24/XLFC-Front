import React from "react";
import "./style.css";

export const CreateNewPassword = () => {
    return (
        <div className="create-new-password">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <img className="img" alt="Img" src="62ed26e70a7ec30939dc5e5f-BG-blur-light-1-2.png" />
                    <div className="frame">
                        <div className="login">Continue</div>
                    </div>
                    <div className="fill-your-profile">Create New Password</div>
                    <img className="frame-2" alt="Frame" src="frame-5.svg" />
                    <div className="div">
                        <div className="frame-3">
                            <label className="email" htmlFor="input-1">
                                Password
                            </label>
                            <div className="frame-4">
                                <img className="ellipse-copy" alt="Ellipse copy" src="ellipse-1-copy-6.svg" />
                            </div>
                        </div>
                        <div className="frame-3">
                            <input className="input" id="input-1" placeholder="Confirm Password" type="password" />
                            <div className="frame-4">
                                <img className="ellipse-copy" alt="Ellipse copy" src="image.svg" />
                            </div>
                        </div>
                    </div>
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
