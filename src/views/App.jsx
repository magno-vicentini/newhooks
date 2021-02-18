import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Menu from '../components/layout/Menu';
import Content from '../components/layout/Content';
import DataContext, { data } from '../data/DataContext';

const App = (props) => {
  const [state, setState] = useState(data); // inicializando o estado com o objeto
  return (
    <DataContext.Provider value={{ state, setState }}>
      //chaves de fora o react usa para interpolar um valor e as chaves de
      dentro são do javascript
      <div className="App">
        <Router>
          <Menu />
          <Content />
        </Router>
      </div>
    </DataContext.Provider>
  );
};

export default App;
