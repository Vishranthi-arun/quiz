import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';

const quizData = [
  {
    questionText: 'Who invented the BALLPOINT PEN?',
    options: ['Write Brothers', 'Bicc Brothers','Waterman Brothers', 'Biro Brothers'],
    correctAnswer: 'Biro Brothers',
  },
  {
    questionText: 'What Galileo invented?',
    options: ['Barometer','Pendulum clock','Microscope','Thermometer'],
    correctAnswer: 'Thermometer',

  },
  {
    questionText: `Who is the author of the book 'Nineteen Eighty Four'?`,
    options: [
      'Thomas Hardy',
      'Emile Zola',
      'George Orwell',
      'Walter Scott'],
    correctAnswer: 'George Orwell',

  },

  {
    questionText: `'MOV' extension refers usually to what kind of file?`,
    options: ['Image file',
     'Animation/movie file',
      'Audio file',
      'MS Office document'],
    correctAnswer: 'Animation/movie file',
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