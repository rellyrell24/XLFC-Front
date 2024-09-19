import React from "react";
import "./style.css";

export const RoleSelection = () => {
    return (
        <div className="role-selection">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <img className="img" alt="Img" src="62ed26e70a7ec30939dc5e5f-BG-blur-light-1-2.png" />
                    <div className="frame">
                        <div className="div">
                            <div className="text-wrapper">Player</div>
                            <p className="sarah-collin">Lorem Ipsum is simply dummy text.</p>
                        </div>
                        <img className="img-2" alt="Soccer player" src="soccer-player-1.svg" />
                    </div>
                    <div className="frame-2">
                        <div className="div">
                            <div className="text-wrapper">Manager</div>
                            <p className="sarah-collin">Lorem Ipsum is simply dummy text.</p>
                        </div>
                        <img className="img-2" alt="Businessman" src="businessman-1.svg" />
                    </div>
                    <div className="fill-your-profile">Role Selection</div>
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
                    <p className="admins-will-bypass">
                        Admins will bypass this as we already made there account, all they need to do is sign in and they will be
                        sent to the home screen immediately
                        <br />
                        Click here to go to admin screen
                    </p>
                </div>
            </div>
        </div>
    );
};
