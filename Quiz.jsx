import React, { useState } from 'react';
import './Quiz.css';

const Quiz = ({ subject }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [answerStatus, setAnswerStatus] = useState(null); // To track answer status
  const [questionsAttempted, setQuestionsAttempted] = useState(0); // To track the number of questions attempted



  // Define questions for Java, Python, and General Aptitude
  const javaQuestions = [
    {
      question: "What is the output of the following Java code?\n\npublic class Main {\n   public static void main(String[] args) {\n       System.out.println(\"Hello, World!\");\n   }\n}",
      options: ["Hello, World!", "Main", "Error", "None of the above"],
      correctOption: 0
    },
    {
      question: "What is the output of the following Java code?\n\nclass Main {\n   public static void main(String args[]) {\n       int x = 5;\n       System.out.println(x++ + ++x);\n   }\n}",
      options: ["11", "12", "10", "13"],
      correctOption: 3
    },
    {
      question: "Which of the following is not a Java keyword?",
      options: ["volatile", "synchronized", "heap", "transient"],
      correctOption: 2
    },
    {
      question: "What is the result of 10 % 3 in Java?",
      options: ["3", "1", "0", "10"],
      correctOption: 1
    },
    {
      question: "In Java, which of the following is a valid identifier?",
      options: ["1test", "_test", "test$", "all of the above"],
      correctOption: 1
    },
    {
      question: "What is the result of 2 + 2 * 2 in Java?",
      options: ["6", "8", "4", "10"],
      correctOption: 0
    },
    {
      question: "Which of the following data types is used to store a single character in Java?",
      options: ["char", "String", "int", "float"],
      correctOption: 0
    },
    {
      question: "What does the 'break' statement do in Java?",
      options: ["Exits the loop or switch statement", "Starts a new loop iteration", "Continues to the next iteration of the loop", "None of the above"],
      correctOption: 0
    },
    {
      question: "What is the output of the following Java code?\n\npublic class Main {\n   public static void main(String[] args) {\n       int x = 5;\n       if (x > 0) {\n           System.out.println(\"Positive\");\n       } else {\n           System.out.println(\"Negative\");\n       }\n   }\n}",
      options: ["Positive", "Negative", "0", "Compilation Error"],
      correctOption: 0
    },
    {
      question: "What is the correct way to declare a method that does not return any value in Java?",
      options: ["void methodName()", "methodName(void)", "int methodName()", "None of the above"],
      correctOption: 0
    }
  ];
  
  // Define 10 Python questions
  const pythonQuestions = [
    {
      "question": "What will be the output of the following Python code?\n\nlist = ['a', 'b', 'c', 'd']\nprint(list[10:])",
      "options": ["Error", "[]", "['a', 'b', 'c', 'd']", "['']"],
      "correctOption": 1
    },
    {
      "question": "Which of the following is the correct way to comment multiple lines in Python?",
      "options": ["/* This is a comment */", "// This is a comment", "''' This is a comment '''", "# This is a comment"],
      "correctOption": 2
    },
    {
      "question": "What is the output of the following Python code?\n\nx = [1, 2, 3]\nprint(x * 2)",
      "options": ["[1, 2, 3, 1, 2, 3]", "[2, 4, 6]", "[1, 4, 9]", "[1, 2, 3, 2, 4, 6]"],
      "correctOption": 3
    },
    {
      "question": "Which of the following data types is immutable in Python?",
      "options": ["list", "tuple", "set", "dictionary"],
      "correctOption": 1
    },
    {
      "question": "What will be the output of the following Python code?\n\nprint(type(10/2))",
      "options": ["<class 'int'>", "<class 'float'>", "<class 'double'>", "<class 'Decimal'>"],
      "correctOption": 1
    },
    {
      "question": "What is the result of 10 // 3 in Python?",
      "options": ["3.333", "3", "4", "3.0"],
      "correctOption": 1
    },
    {
      "question": "What does the 'pass' statement do in Python?",
      "options": ["Exits the loop or function", "Skips the current iteration of the loop", "Does nothing", "Raises an error"],
      "correctOption": 2
    },
    {
      "question": "Which of the following is a correct way to access the last element of a list in Python?",
      "options": ["list[length-1]", "list[-1]", "list[last]", "list[end]"],
      "correctOption": 1
    },
    {
      "question": "What will be the output of the following Python code?\n\nx = 'Hello'\nprint(x[1:])",
      "options": ["H", "e", "ello", "elloh"],
      "correctOption": 2
    },
    {
      "question": "What is the output of the following Python code?\n\nfor i in range(3):\n    print(i)\nelse:\n    print('Done')",
      "options": ["0 1 2", "0 1 2 Done", "Done", "Infinite loop"],
      "correctOption": 1
    }
  ]
  const generalAptitudeQuestions =[
    {
      "question": "What is the result of 10 + 20 * 3?",
      "options": ["90", "70", "50", "100"],
      "correctOption": 3
    },
    {
      "question": "What is the next number in the sequence: 2, 4, 8, 16, ...?",
      "options": ["32", "24", "64", "12"],
      "correctOption": 0
    },
    {
      "question": "If a car travels at a speed of 60 km/h, how many kilometers will it travel in 4 hours?",
      "options": ["120 km", "240 km", "180 km", "360 km"],
      "correctOption": 2
    },
    {
      "question": "If a book costs $20 and is sold for $30, what is the profit percentage?",
      "options": ["30%", "40%", "50%", "60%"],
      "correctOption": 1
    },
    {
      "question": "If 20% of a number is 50, what is the number?",
      "options": ["250", "100", "150", "200"],
      "correctOption": 3
    },
    {
      "question": "If the sum of two numbers is 35 and their difference is 5, what are the two numbers?",
      "options": ["15 and 20", "20 and 15", "25 and 10", "30 and 5"],
      "correctOption": 0
    },
    {
      "question": "What is the square root of 144?",
      "options": ["12", "16", "18", "20"],
      "correctOption": 0
    },
    {
      "question": "If a triangle has sides of length 3, 4, and 5 units, what type of triangle is it?",
      "options": ["Equilateral", "Isosceles", "Scalene", "Right-angled"],
      "correctOption": 3
    },
    {
      "question": "If today is Monday, what will be the day after 3 days?",
      "options": ["Thursday", "Tuesday", "Wednesday", "Friday"],
      "correctOption": 2
    },
    {
      "question": "How many seconds are there in 2 hours?",
      "options": ["7200", "5400", "3600", "720"],
      "correctOption": 0
    }
  ]

  // Determine questions based on the selected subject
  let questions = [];
  if (subject === 'Java') {
    questions = javaQuestions;
  } else if (subject === 'Python') {
    questions = pythonQuestions;
  } else if (subject === 'General Aptitude') {
    questions = generalAptitudeQuestions;
  }

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].options[questions[currentQuestion].correctOption]) {
      setScore(score + 1);
    }
    setSelectedOption('');
    setCurrentQuestion(currentQuestion + 1);
    setQuestionsAttempted(questionsAttempted + 1); // Increment the number of questions attempted


  };

  return (
    <div className="quiz-container">
      {currentQuestion < questions.length ? (
        <div className="question">
            <br/>
          <h3>{subject} Quiz - Question {currentQuestion + 1}</h3>
          <br/>
          <p>{questions[currentQuestion].question}</p>
          <br/>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  value={ option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                />
                <label htmlFor={'option${index}'}>{option}</label>
                <br/> {/*Add a line break after each option */}
                <br/>
              </label>
            ))}
          </div>
          <button className="next-btn" onClick={handleNextQuestion}>Next</button>
          <br/>
          <h4> <center>{currentQuestion+1} of 10 Questions </center></h4>
        </div>
      ) : (
        <div className="result">
          <h2>Quiz Completed!</h2>
          <p>Your score: {score} out of {questions.length}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;