import React from 'react';
import './App.css';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toppingsList : [
        {name: 'Kaiser Bun', color: 'saddlebrown'},
        {name: 'Sesame Bun', color: 'sandybrown'},
        {name: 'Gluten Free Bun', color: 'peru'},
        {name: 'Lettuce Wrap', color: 'olivedrab'},
        {name: 'Beef Patty', color: '#3F250B'},
        {name: 'Soy Patty', color: '#3F250B'},
        {name: 'Black Bean Patty', color: '#3F250B'},
        {name: 'Chicken Patty', color: 'burlywood'},
        {name: 'Lettuce', color: 'lawngreen'},
        {name: 'Tomato', color: 'tomato'},
        {name: 'Bacon', color: 'maroon'},
        {name: 'Onion', color: 'lightyellow'}
      ],
      selectedIngredients : []
    }
    this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
  }
  
handleIngredientsChange(e) {
  e.preventDefault();
  const stack = e.target.value;
  var selectedIngredients = this.state.selectedIngredients;
  selectedIngredients.push(stack);
  console.log(selectedIngredients)
  
  this.setState({
  selectedIngredients
  })
}
    // need to render the selected items. 
  render() {
    
    return(
      <main>
        <h1>Build your burger!</h1>
        <div className="burgerpanel">
          <IngredientList toppings={this.state.toppingsList} onClick={this.handleIngredientsChange}/>
          
        </div>
        <div className="burgerpanel">
          <BurgerPane/>
        </div>
      </main>
    );
  }
}







export default App;
