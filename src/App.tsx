import React, { FC }from 'react';

import './App.css';
import  { Form } from './components/Form';

const App:FC = () => {

  return (
    <div className="App">
    
      <Form 
        name={''}
        surname={''}
        login={''}
        job={''}
        password={''}
        confirmPassword={''}
        isSuperUsers={false} file={{}}      />
    </div>
  );
}

export default App;
