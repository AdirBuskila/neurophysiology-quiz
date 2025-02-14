import React from "react";

const messages = [
    "🧠 Your brain's firing faster than an action potential!",
    "⚡ You just synapsed with success!",
    "🩺 Nice work, Dr. Genius! Your neurons are celebrating!",
    "🔬 That was textbook perfection! Next question!",
    "🏥 You're diagnosing these questions like a pro!",
    "⚠️ Warning: Your knowledge levels are dangerously high!",
    "🏆 Neuroscientists would be proud of you!",
    "🌀 Your dendrites are making new connections already!",
    "🧬 Your knowledge just got a genetic upgrade!",
    "💡 Boom! Another synapse just got reinforced!",
];

const MotivationalMessage = ({ show }) => {
    if (!show) return null;

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    return (
        <div className="motivational-message">
            {randomMessage}
        </div>
    );
};

export default MotivationalMessage;
