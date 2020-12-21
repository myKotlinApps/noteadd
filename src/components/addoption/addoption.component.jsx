import React,{useState} from 'react'


function Addoption(props) {
    
    const [errors,setError] = useState(undefined)


    const handleAddOption = (e) => {

        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = props.handleAddOption(option);
        setError(error);
    
    }
        
            
      

    return (
        <div>
            {errors && <p>{errors}</p> }
            <form onSubmit={handleAddOption}>
                <input type='text' name='option' />
                <button >Add Option</button>
            </form>
        </div>
    )
}

export default Addoption;
