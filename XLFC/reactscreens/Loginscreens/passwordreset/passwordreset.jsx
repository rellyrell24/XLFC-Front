import React from "react";
import "./style.css";

export const CreateNew = () => {
    return (
        <div className="create-new">
            <div className="create-new-password">
                <div className="overlap">
                    <img className="img" alt="Img" src="62ed26e70a7ec30939dc5e5f-BG-blur-light-1-2.png" />
                    <div className="frame">
                        <div className="login">Back To Login</div>
                    </div>
                    <div className="div">
                        <div className="frame-2">
                            <div className="email">Congratulations!</div>
                            <p className="sarah-collin">Your password has been reset</p>
                        </div>
                        <img className="icon-check" alt="Icon check" src="check.svg" />
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
