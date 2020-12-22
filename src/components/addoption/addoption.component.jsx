import React,{useState} from 'react'
import './addoption.styles.css'

function Addoption(props) {
    
    const [errors,setError] = useState(undefined)

    const handleAddOption = (e) => {

        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = props.handleAddOption(option);
        setError(error);

        if (!error) {
            e.target.elements.option.value = '';
        }
    }
        
            
      

    return (
        <div className='formdiv'>
            {errors && <p>{errors}</p> }
            <form className='form' onSubmit={handleAddOption}>
                <input type='text' name='option' />
                
                    <button className='buttonAdd' >Add Option</button>
               
               
            </form>
        </div>
    )
}

export default Addoption;
