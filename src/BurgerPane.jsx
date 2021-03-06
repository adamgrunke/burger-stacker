import React from 'react';

const BurgerPane = props => {
    // ======================== works start =======================//
    var showBurger = props.burgerToppings.map((ingredient, i) => {
        return(
            <div key={i}>
                <p>{ingredient}</p>
            </div> 
        )
    })

    return(
            <main>
                {showBurger}
                <div id="burgerbase"></div>
                <p>Burger Stack Area</p>
                <button onClick={props.onClick} >Clear</button>
            </main>
    )
    // ========================= works end ======================== //

    // ========================== sandbox start ===============//

    // var showBurger = props.burgerToppings.map((ingredient, i) => {
    //     return(
    //         <div key={i}>
    //             <p>{ingredient}</p>
    //         </div> 
    //     )
    // })

    // return(
    //         <main>
    //             {showBurger}
    //             <div id="burgerbase"></div>
    //             <p>Burger Stack Area</p>
    //             <button onClick={props.onClick} >Clear</button>
    //         </main>
    // )
    // ========================== sandbox end  ===============//

}
export default BurgerPane;

