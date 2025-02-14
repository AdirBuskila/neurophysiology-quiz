import React from "react";

const ProgressBar = ({ current, total }) => {
    const progressPercentage = (current / total) * 100;

    return (
        <div className="progress-container">
            {/* Display text separately above the progress bar */}
            <div className="progress-text">
                {current} / {total} Questions
            </div>

            {/* Actual Progress Bar */}
            <div className="progress-bar">
                <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
            </div>
        </div>
    );
};

export default ProgressBar;
