import React from 'react'
import { useState } from 'react';

export const UseForm = (initialState={}) => {
    const [inputVlaues,setInputValues]= useState(initialState);

    const resetForm = ()=>{
        setInputValues(initialState);

    }
    const handleInputChange=({target})=>{
        setInputValues({
            ...inputVlaues,
            [target.name]:target.value
        });

    }

        

                


  return {
    inputVlaues,
    handleInputChange,
    resetForm
  }
}




// import React from 'react'

// export const UseForm = (initialState={}) => {
//     const [inputVlaues,setInputValues]= useState(initialState);

//     const resetForm= ()=>{
//         setInputValues(initialState);

//     }
//     const handleInputChange=({target})=>{
//         setInputValues({
//             ...inputVlaues,
//             [target.name]:target.value
//         });

//     }
//     return{
//         inputVlaues,
//         handleInputChange,
//         resetForm
        
        
//     }
// }

