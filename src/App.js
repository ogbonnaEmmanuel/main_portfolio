import React from 'react';
import './Component/Css/home.css';
import MainHeader from './Component/Header/MainHeader';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import home from './Component/Home/home';
import Skills from './Component/Skills/skills';
import ProjectList from './Component/Project/ProjectList';



function App() {
  return (
  <BrowserRouter>
    <div>
      <MainHeader/>
      <Switch>
          <Route exact path="/" component={home}/>
          <Route path="/skills" component={Skills}/>
          <Route path="/projects" component={ProjectList}/>
     </Switch>
    </div>
    </BrowserRouter>

  );
}

export default App;
