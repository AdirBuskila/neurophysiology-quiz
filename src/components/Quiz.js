// Quiz.js
import React, { useState, useEffect } from "react";
import quizData from "./data/quizData";
import ProgressBar from "./ProgressBar";
import Explanation from "./Explanation";
import TopicDisplay from "./TopicDisplay";

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(
        parseInt(localStorage.getItem("currentQuestion")) || 0
    );
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(parseInt(localStorage.getItem("score")) || 0);

    useEffect(() => {
        localStorage.setItem("currentQuestion", currentQuestion);
        localStorage.setItem("score", score);
    }, [currentQuestion, score]);

    const handleAnswerClick = (index) => {
        if (isAnswered) return;
        setSelectedAnswer(index);
        setIsAnswered(true);

        if (index === quizData[currentQuestion].correct) {
            setScore((prevScore) => prevScore + 1);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestion < quizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);
            setIsAnswered(false);
        } else {
            alert("🎉 Quiz Completed! Your Score: " + score + "/" + quizData.length);
        }
    };

    const handleJumpToQuestion = (event) => {
        const selectedIndex = parseInt(event.target.value);
        setCurrentQuestion(selectedIndex);
        setSelectedAnswer(null);
        setIsAnswered(false);
    };

    return (
        <div className="quiz-container">
            <ProgressBar current={currentQuestion + 1} total={quizData.length} />

            <div className="question-navigation">
                <label>Jump to: </label>
                <select onChange={handleJumpToQuestion} value={currentQuestion}>
                    {quizData.map((_, index) => (
                        <option key={index} value={index}>
                            Question {index + 1}
                        </option>
                    ))}
                </select>
            </div>

            {/* Use the new TopicDisplay component */}
            <TopicDisplay currentIndex={currentQuestion} />

            <h2>{quizData[currentQuestion].question}</h2>

            <div className="options">
                {quizData[currentQuestion].options.map((option, index) => (
                    <button
                        key={index}
                        className={`btn ${isAnswered ? (index === quizData[currentQuestion].correct ? "correct" : "wrong") : ""}`}
                        onClick={() => handleAnswerClick(index)}
                    >
                        {option}
                    </button>
                ))}
            </div>

            {isAnswered && <Explanation text={quizData[currentQuestion].explanation} />}
            {isAnswered && <button className="next-btn" onClick={handleNextQuestion}>Next</button>}
        </div>
    );
};

export default Quiz;
