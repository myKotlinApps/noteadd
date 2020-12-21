import React from 'react';




function Action({hasOption,handlePick}) {

   


    return (
        <div>
            <button
                onClick={handlePick}
                disabled={!hasOption}
            >What should i DO ?</button>
        </div>
    );
}

export default Action;
