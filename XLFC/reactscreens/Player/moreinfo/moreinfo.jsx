import React from "react";
import "./style.css";

export const MoreInfo = () => {
    return (
        <div className="more-info">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <img className="img" alt="Img" src="62ed26e70a7ec30939dc5e5f-BG-blur-light-1-2.png" />
                    <div className="frame">
                        <div className="login">Continue</div>
                    </div>
                    <div className="div">
                        <div className="frame-2">
                            <div className="email">Start Weight</div>
                            <div className="sarah-collin-wrapper">
                                <div className="sarah-collin">Kgs</div>
                            </div>
                        </div>
                        <div className="frame-2">
                            <div className="email">Height</div>
                            <div className="sarah-collin-wrapper">
                                <div className="sarah-collin">cm</div>
                            </div>
                        </div>
                        <div className="frame-2">
                            <div className="email">BMI</div>
                            <div className="sarah-collin-wrapper">
                                <div className="sarah-collin">27 Minimum</div>
                            </div>
                        </div>
                    </div>
                    <div className="fill-your-profile">more info</div>
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
