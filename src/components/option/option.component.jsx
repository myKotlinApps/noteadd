import React from 'react'



function Option(props) {
    let i = 0;
    
    
    return (
        <div>
            { ` ${props.count} -  ${props.optionText}`}
            <button onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}
            >
                X
            </button>
        </div>
    )
}

export default Option;
