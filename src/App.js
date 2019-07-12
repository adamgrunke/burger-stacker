import React from 'react';
import './App.css';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';


class App extends React.Component {
  
  
  render() {
    return(
      <main>
        <h1>Build your burger!</h1>
        <div class="burgerpanel">
          <IngredientList/>
        </div>
        <div class="burgerpanel">
          <BurgerPane/>
        </div>
      </main>
    );
  }
}







export default App;
