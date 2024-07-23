import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';

const quizData = [
  {
    questionText: 'Which river is the longest in the world?',
    options: ['Amazon', 'Mississippi','Nile', 'Yangtze'],
    correctAnswer: 'Nile',
  },
  {
    questionText: 'Which is the largest island?',
    options: ['New Guinea', 'Andaman Nicobar', 'Hawaii','Greenland'],
    correctAnswer: 'Greenland',

  },
  {
    questionText: 'What is considered the lung of the Earth?',
    options: ['Amazon rainforest', 'The Mississippi River', 'The Sahara','Everest'],
    correctAnswer: 'Amazon rainforest',

  },

  {
    questionText: 'What is the official currency of Japan??',
    options: ['Won', 'Yen', 'Dollars', 'Yuan'],
    correctAnswer: 'Yen',
  },


];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateScore = () => {
    return answers.filter((answer, index) => answer === quizData[index].correctAnswer).length;
  };

  if (showResult) {
    return <Result score={calculateScore()} total={quizData.length} />;
  }

  return (
    <div>
      <Question
        question={quizData[currentQuestion]}
        onAnswer={handleAnswer}
      />
    </div>
  );
};

export default Quiz;