import React from 'react';

const Question = ({ question, handleAnswerClick }) => {
  return (
    <div >
      <div className='text-caribbeangreen-5 bg-blue-900 w-[218px]  p-2 m-0'> 
      <h2 >{question.question}</h2>
      </div>
      
      <div className="options">
        {question.options.map((option, index) => (
          <button key={index} onClick={() => handleAnswerClick(option.score)}>
            {option.text}
          </button>
        ))}
      </div>
    
    </div>
  );
};

export default Question;
