import React from 'react';

const Result = ({ score, coins, onPlayAgain }) => {
  const getFeedback = () => {
    if (score <= 5) {
      return 'Your mental health appears stable.You can check out our Opportunities corner';
    } else if (score <= 10) {
      return 'You may be experiencing mild stress. Consider relaxation techniques and self-care practices.';
    } else if (score <= 15) {
      return 'You are under moderate stress. It may be beneficial to explore counseling or stress-relieving activities.';
    } else {
      return 'Your responses indicate a high level of distress. Seeking professional help is recommended.';
    }
  };

  return (
    <div className="result-container text-caribbeangreen-5 bg-blue-900">
      <h2 className='text-yellow-5'>Your Score: {score}</h2>
      <p>{getFeedback()}</p>
      <h3>Coins Earned: ${coins}</h3>
      <p>Keep engaging with the platform to earn more coins for your progress!</p>
      <button onClick={onPlayAgain} className="play-again-button mt-10">Play Again</button>
    </div>
  );
};

export default Result;

