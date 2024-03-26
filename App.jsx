import React, { useState } from 'react';
import './index.css'; 
import SubjectSelection from './Components/SubjectSelection';
import Quiz from './Components/Quiz';

const App = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);

  // Function to handle subject selection
  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
  };

  return (
    <div className="app-container">
      <h1>Quiz Application</h1>
      {selectedSubject ? (
        <Quiz subject={selectedSubject} />
      ) : (
        <SubjectSelection onSelect={handleSubjectSelect} />
      )}
    </div>
  );
};

export default App;