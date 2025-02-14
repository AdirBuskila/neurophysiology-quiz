import React from "react";

const Explanation = ({ text }) => {
    return (
        <div className="explanation-box">
            <p>🧐 Why is this correct?</p>
            <p>{text}</p>
        </div>
    );
};

export default Explanation;
