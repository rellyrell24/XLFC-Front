import React, { useState } from "react";
import "./style.css";

export const WeighInEditor = () => {
    const [participant, setParticipant] = useState("");
    const [dateOfWeighIn, setDateOfWeighIn] = useState("");
    const [weight, setWeight] = useState("");
    const [foodDiary, setFoodDiary] = useState("");
    const [stepCounter, setStepCounter] = useState("");
    const [milestone, setMilestone] = useState("");
    const [parkRun, setParkRun] = useState("");
    const [coachesBonus, setCoachesBonus] = useState("");

    const handleSubmit = () => {
        const data = {
            participant,
            dateOfWeighIn,
            weight,
            foodDiary,
            stepCounter,
            milestone,
            parkRun,
            coachesBonus,
        };
        console.log("Form submitted: ", data);
    };

    return (
        <div className="weigh-in-editor">
            <div className="div">
                <div className="overlap">
                    <img className="img" alt="Img" src="62ed26e70a7ec30939dc5e5f-BG-blur-light-1-2.png" />
                    <div className="frame">
                        <input
                            className="participant-input"
                            type="text"
                            placeholder="Search for a participant"
                            value={participant}
                            onChange={(e) => setParticipant(e.target.value)}
                        />
                        <img className="loupe" alt="Loupe" src="loupe-1.svg" />
                    </div>
                    <div className="fill-your-profile">Weigh-in Editor</div>
                    <img className="frame-2" alt="Frame" src="frame-5.svg" />
                    <img className="frame-2" alt="Frame" src="frame-61.svg" />
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
                    <div className="frame-3">
                        <div className="email">Participant</div>
                        <div className="frame-4">
                            <div className="frame-5">
                                <div className="type-edit-avatar">
                                    <img className="layer" alt="Layer" src="layer-7-1.png" />
                                </div>
                                <input
                                    className="participant-name-input"
                                    type="text"
                                    placeholder="Ronaldo"
                                    value={participant}
                                    onChange={(e) => setParticipant(e.target.value)}
                                />
                            </div>
                            <img className="frame-6" alt="Frame" src="frame-12.svg" />
                        </div>
                    </div>
                    <div className="frame-7">
                        <div className="frame-8">
                            <div className="email">Date of Weigh-in</div>
                            <div className="frame-9">
                                <input
                                    className="date-input"
                                    type="date"
                                    value={dateOfWeighIn}
                                    onChange={(e) => setDateOfWeighIn(e.target.value)}
                                />
                                <img className="calendar" alt="Calendar" src="calendar.png" />
                            </div>
                        </div>
                        <div className="frame-8">
                            <div className="email">Weight:</div>
                            <div className="frame-9">
                                <input
                                    className="weight-input"
                                    type="number"
                                    placeholder="Enter Weight"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="frame-8">
                            <div className="email">Food Diary</div>
                            <div className="frame-9">
                                <input
                                    className="food-diary-input"
                                    type="number"
                                    placeholder="1 or 0"
                                    value={foodDiary}
                                    onChange={(e) => setFoodDiary(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="frame-8">
                            <div className="email">Step Counter</div>
                            <div className="frame-9">
                                <input
                                    className="step-counter-input"
                                    type="number"
                                    placeholder="1 or 0"
                                    value={stepCounter}
                                    onChange={(e) => setStepCounter(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="frame-8">
                            <div className="email">Weight Loss Milestone:</div>
                            <div className="frame-9">
                                <input
                                    className="milestone-input"
                                    type="number"
                                    placeholder="1 or 0"
                                    value={milestone}
                                    onChange={(e) => setMilestone(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="frame-8">
                            <div className="email">Park Run:</div>
                            <div className="frame-9">
                                <input
                                    className="park-run-input"
                                    type="number"
                                    placeholder="1 or 0"
                                    value={parkRun}
                                    onChange={(e) => setParkRun(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="frame-8">
                            <div className="email">Coaches Bonus:</div>
                            <div className="frame-9">
                                <input
                                    className="coaches-bonus-input"
                                    type="number"
                                    placeholder="1 or 0"
                                    value={coachesBonus}
                                    onChange={(e) => setCoachesBonus(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="login-wrapper">
                    <button className="login" onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};
