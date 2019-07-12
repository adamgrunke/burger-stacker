import React from 'react';

class BurgerPane extends React.Component {
    
    
    render() {
        return(
            <main>
                <div>
                {this.props.toppings.map((ingredient, i) => <div key={i}>{ingredient}</div> )}
                </div>
                <div id="burgerbase"></div>
                <p>Burger Stack Area</p>
                <button>Clear</button>
            </main>

        );
    }
}










export default BurgerPane;