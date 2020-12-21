import React,{useState} from 'react'
import Option from '../option/option.component'


// const handleRemoveAll= (e)=> {
//     console.log(e.options)
// }



function Options(props) {

 
 
    


    return (
        <div>
            <button onClick={props.handleDeleteOption} >Remove All</button>
            {props.options.map((options) => <Option key={options} optionText={options}/>)}
        </div>
    )
    
}
 


export default Options;
