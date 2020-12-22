import React,{useState} from 'react'
import Option from '../option/option.component'
import './options.styles.css'

// const handleRemoveAll= (e)=> {
//     console.log(e.options)
// }



function Options(props) {

    return (
        <div>
            {props.options.length === 0 && <p>Please add option to store </p>}
            
            <button className='buttonRemveAll' onClick={props.handleDeleteAll} >Remove All</button>
            {props.options.map((options) =>
                <Option
                key={options}
                optionText={options}
                handleDeleteOption={props.handleDeleteOption}
            />)}
        </div>
    )
    
}
 


export default Options;
