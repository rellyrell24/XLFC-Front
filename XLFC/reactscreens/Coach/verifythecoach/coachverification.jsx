import React from "react";
import "./style.css";

export const WaitForValidation = () => {
    return (
        <div className="wait-for-validation">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <img className="img" alt="Img" src="62ed26e70a7ec30939dc5e5f-BG-blur-light-1-2.png" />
                    <div className="frame">
                        <div className="login">Home</div>
                    </div>
                    <div className="overlap-group-wrapper">
                        <div className="overlap-group">
                            <div className="div">
                                <div className="email">Congratulations!</div>
                                <p className="sarah-collin">
                                    Your Account has been created
                                    <br />
                                    please wait while admin approves!
                                </p>
                            </div>
                            <img className="icon-check" alt="Icon check" src="check.svg" />
                        </div>
                    </div>
                    <div className="status-bar">
                        <div className="time">
                            <div className="text-wrapper">9:41</div>
                        </div>
                        <div className="levels">
                            <div className="battery">
                                <div className="capacity-wrapper">
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
