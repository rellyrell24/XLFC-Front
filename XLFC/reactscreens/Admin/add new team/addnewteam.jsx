import React from "react";
import "./style.css";

export const AddNewTeam = () => {
    return (
        <div className="add-new-team">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <img className="img" alt="Img" src="62ed26e70a7ec30939dc5e5f-BG-blur-light-1-2.png" />
                    <div className="fill-your-profile">Add New Team</div>
                    <img className="frame" alt="Frame" src="frame-5.svg" />
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
                    <div className="login-wrapper">
                        <div className="login">Create Team</div>
                    </div>
                    <div className="div">
                        <div className="frame-2">
                            <input className="email" id="input-1" placeholder="Team Name:" type="text" />
                            <div className="frame-3">
                                <label className="sarah-collin" htmlFor="input-1">
                                    Enter Team Name:
                                </label>
                            </div>
                        </div>
                        <div className="frame-2">
                            <div className="email-2">Team Coach</div>
                            <div className="frame-3">
                                <div className="sarah-collin">Select Coach</div>
                                <img className="down" alt="Down" src="down-1.svg" />
                            </div>
                        </div>
                        <div className="frame-2">
                            <div className="email-2">Number of Participants</div>
                            <div className="frame-3">
                                <div className="sarah-collin">Enter Number of Participants</div>
                            </div>
                        </div>
                        <div className="frame-2">
                            <div className="email-2">Team Description:</div>
                            <div className="frame-4">
                                <div className="sarah-collin">Type Description...</div>
                            </div>
                        </div>
                    </div>
                    <div className="email-3">Team Logo:</div>
                    <img className="frame-5" alt="Frame" src="frame-60.svg" />
                    <div className="div-wrapper">
                        <div className="login-2">Upload Photo</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
