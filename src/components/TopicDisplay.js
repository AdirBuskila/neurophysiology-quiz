// TopicDisplay.js
import React from "react";

const topics = [
    { start: 0, end: 24, name: "Neurons and Synapses" },
    { start: 25, end: 49, name: "Muscular System" },
    { start: 50, end: 74, name: "Autonomic Nervous System" },
    { start: 75, end: 99, name: "Brain Structures and Functions" },
    { start: 100, end: 124, name: "Sensory Systems" },
    { start: 125, end: 149, name: "Memory and Learning" }
];

const getTopic = (index) => {
    const topic = topics.find(t => index >= t.start && index <= t.end);
    return topic ? topic.name : "Unknown Topic";
};

const TopicDisplay = ({ currentIndex }) => {
    return (
        <div className="topic-display">
            <h3>Topic: {getTopic(currentIndex)}</h3>
        </div>
    );
};

export default TopicDisplay;
