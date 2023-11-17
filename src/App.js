import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [currentForm, setCurrentForm] = useState('login'); 

  const handleFormSwitch = (formType) => {
    setCurrentForm(formType);
  };

  return (
    <div className="App">
      

        {currentForm === 'login' ? (
          <Login onFormSwitch={handleFormSwitch} />
        ) : (
          <Register onFormSwitch={handleFormSwitch} />
        )}
    </div>
  );
}

export default App;
