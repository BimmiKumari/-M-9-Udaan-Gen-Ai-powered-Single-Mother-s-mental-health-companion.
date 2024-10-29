import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';
const quizQuestions = [
  {
    question: 'I have been able to laugh and see the funny side of things:',
    options: [
      { text: 'As much as I always could', score: 0 },
      { text: 'Not quite so much now', score: 1 },
      { text: 'Definitely not so much now', score: 2 },
      { text: 'Not at all', score: 3 }
    ]
  },
  {
    question: 'I have looked forward with enjoyment to things:',
    options: [
      { text: 'As much as I ever did', score: 0 },
      { text: 'Rather less than I used to', score: 1 },
      { text: 'Definitely less than I used to', score: 2 },
      { text: 'Hardly at all', score: 3 }
    ]
  },
  {
    question: 'I have blamed myself unnecessarily when things went wrong:',
    options: [
      { text: 'Yes, most of the time', score: 3 },
      { text: 'Yes, some of the time', score: 2 },
      { text: 'Not very often', score: 1 },
      { text: 'No, never', score: 0 }
    ]
  },
  {
    question: 'I have been anxious or worried for no good reason:',
    options: [
      { text: 'No, not at all', score: 0 },
      { text: 'Hardly ever', score: 1 },
      { text: 'Yes, sometimes', score: 2 },
      { text: 'Yes, very often', score: 3 }
    ]
  },
  {
    question: 'I have felt scared or panicky for no good reason:',
    options: [
      { text: 'Yes, quite a lot', score: 3 },
      { text: 'Yes, sometimes', score: 2 },
      { text: 'No, not much', score: 1 },
      { text: 'No, not at all', score: 0 }
    ]
  }
];

  

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswerClick = (points) => {
    setScore(score + points); 
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setQuizFinished(true);
    }
  };
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizFinished(false);
  };
  
  const coinsEarned = Math.floor(score / 2);

  return (
    <div className="quiz-container">
      {!quizFinished ? (
        <Question
          question={quizQuestions[currentQuestion]}
          handleAnswerClick={handleAnswerClick}
        />
      ) : (
        <Result score={score} coins={coinsEarned} onPlayAgain={resetQuiz} />
      )}
    </div>
  );
};

export default Quiz;