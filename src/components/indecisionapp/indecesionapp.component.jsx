import React,{useState} from 'react'
import Action from '../action/action.component';
import Addoption from '../addoption/addoption.component';
import Header from '../header/header.component';
import Options from '../options/options.component';

const title = 'Indecesion';
const subtitle = 'Put your life in the hands of a computer.';
// const options = ['Thing one','Thing two','Thing three'];





function Indecesionapp() {


    const [options , setOption] = useState([])


    const handleDeleteOption = () => {
        setOption([]);
    }

    const handlePick = () =>{
        const randomNumber = Math.floor(Math.random() * options.length);
        const option = options[randomNumber];
        alert(option);
    }

    
    const handleAddOption = (option) => {

        if (!option) {
            return 'Enter valid value to add item'
        } else if (options.indexOf(option) > -1 ){
            return 'This item already exist !'
        } else {
            setOption([...options,option]);
        }

    }


    return (
        <div>
            <Header title={title} subtitle={subtitle}/>
            <Action
                hasOption={options.length > 0}
                handlePick={handlePick}
            />
            <Options
                options={options}
                handleDeleteOption={handleDeleteOption}
            />
            <Addoption
                handleAddOption={handleAddOption}
            /> 
        </div>
    )
}

export default Indecesionapp;
