import React from 'react';

const IngredientList = props => {
    // =============================works start ================ //
    var showIngredients = props.toppings.map((ingredient, i) => {
        return(
            <div key={i}>
                {ingredient.name}
                <button 
                    value={ingredient.name} 
                    onClick={props.onClick}>>
                </button>
            </div>
        )
    }) 

    return(
            <div>
                <div>
                    {showIngredients}
                </div> 
            </div>
    )
    // ============================= works end =================//

    // ========================== sandbox start ===============//
    // var showIngredients = props.toppings.map((ingredient, i) => {
    //     return(
    //         <div key={i}>
    //             {ingredient.name}
    //             <button 
    //                 value= {[{
    //                     name: ingredient.name,
    //                     color: ingredient.color
    //                 }]}
    //                 onClick={props.onClick}>>
    //             </button>
    //         </div>
    //     )
    // }) 

    // return(
    //         <div>
    //             <div>
    //                 {showIngredients}
    //             </div> 
    //         </div>
    // )
//=============================== sandbox end ====================//
}


export default IngredientList;