import React from "react";
import { TableHeader } from "./TableHeader";
import "./style.css";

export const AdminPlayerHealth = () => {
    return (
        <div className="admin-player-health">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <img className="img" alt="Img" src="62ed26e70a7ec30939dc5e5f-BG-blur-light-1-2.png" />
                    <div className="type-edit-avatar">
                        <img className="layer" alt="Layer" src="layer-7-1.png" />
                    </div>
                    <div className="frame">
                        <div className="text-wrapper">Ronaldo</div>
                        <div className="div">#10</div>
                    </div>
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
                    <img className="frame-2" alt="Frame" src="frame-12.svg" />
                    <div className="frame-3">
                        <div className="text-wrapper-2">Current Points</div>
                        <div className="text-wrapper-3">53 points</div>
                    </div>
                    <div className="frame-4">
                        <div className="text-wrapper-2">Starting Weight:</div>
                        <div className="text-wrapper-3">111.5 KG</div>
                    </div>
                    <div className="frame-5">
                        <div className="text-wrapper-2">Weight Change:</div>
                        <div className="text-wrapper-4">-6 KG</div>
                    </div>
                    <div className="frame-6">
                        <div className="frame-7">
                            <div className="text-wrapper-5">Points Breakdown</div>
                            <div className="frame-8">
                                <div className="frame-9" />
                                <div className="frame-9" />
                            </div>
                        </div>
                        <div className="frame-10">
                            <div className="frame-11">
                                <div className="text-wrapper-2">Standard Points</div>
                                <div className="text-wrapper-6">21 points</div>
                            </div>
                            <div className="frame-12">
                                <div className="text-wrapper-2">Bonus Points</div>
                                <div className="text-wrapper-6">32 points</div>
                            </div>
                            <div className="frame-13">
                                <div className="text-wrapper-2">Lifetime Points</div>
                                <div className="text-wrapper-6">53 points</div>
                            </div>
                        </div>
                    </div>
                    <div className="table-health-stats">
                        <TableHeader className="table-header-component" />
                    </div>
                    <div className="edits-by-sammy">
                        <div className="text-wrapper-7">0</div>
                        <div className="text-wrapper-8">-.7</div>
                        <div className="text-wrapper-9">1.2</div>
                        <div className="text-wrapper-10">0</div>
                        <div className="text-wrapper-11">-.6</div>
                        <div className="text-wrapper-12">0</div>
                        <div className="text-wrapper-13">1.6</div>
                        <div className="text-wrapper-14">0</div>
                        <div className="text-wrapper-15">.078</div>
                        <div className="text-wrapper-16">0</div>
                        <div className="rectangle" />
                        <div className="rectangle-2" />
                        <div className="rectangle-3" />
                        <div className="rectangle-4" />
                        <div className="rectangle-5" />
                        <div className="rectangle-6" />
                        <div className="rectangle-7" />
                        <div className="rectangle-8" />
                        <div className="rectangle-9" />
                    </div>
                    <div className="frame-14">
                        <img className="home" alt="Home" src="home.png" />
                        <div className="my-recepits">
                            <img className="bookmark" alt="Bookmark" src="bookmark-3.svg" />
                            <div className="text-wrapper-17">Weigh in</div>
                        </div>
                        <div className="offers">
                            <div className="text-wrapper-18">leaderboard</div>
                            <img className="discount" alt="Discount" src="discount-1.svg" />
                        </div>
                        <div className="message">
                            <img className="chat" alt="Chat" src="chat-2.svg" />
                            <div className="text-wrapper-19">player stats</div>
                        </div>
                        <div className="setting">
                            <img className="setting-2" alt="Setting" src="setting.svg" />
                            <div className="text-wrapper-17">Past Seasons</div>
                        </div>
                        <div className="home-indicator" />
                    </div>
                    <img className="frame-15" alt="Frame" src="frame-62.svg" />
                </div>
            </div>
        </div>
    );
};
