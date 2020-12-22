import React from 'react';
import './action.styles.css'



function Action({hasOption,handlePick}) {

   


    return (
        <div>
            <button
                className='buttonAction'
                onClick={handlePick}
                disabled={!hasOption}
            >What should i DO ?</button>
        </div>
    );
}

export default Action;
