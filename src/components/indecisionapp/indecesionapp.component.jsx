import React,{useState,useEffect} from 'react'
import Action from '../action/action.component';
import Addoption from '../addoption/addoption.component';
import Header from '../header/header.component';
import Options from '../options/options.component';

const title = 'Indecesion';
const subtitle = 'Put your life in the hands of a computer.';
// const options = ['Thing one','Thing two','Thing three'];





function Indecesionapp() {




    const [options , setOption] = useState([])

    const handleDeleteOption = (takeOptions) => {
        setOption(options.filter((item)=> item !==takeOptions ))
    }
        

    const handleDeleteAll = () => {
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
        }

         setOption([...options,option]);
    }


    useEffect(() => {
        const notesData = JSON.parse(localStorage.getItem('options'));
        if (notesData) {
            setOption(notesData);
        }
    }, [])
    //     try {
    //         const notesData = JSON.parse(localStorage.getItem('options'));
    //         if (notesData) {
    //             setOption(notesData);
    //         }
    //     } catch (e) {
    //         console.log('there is no data')
    //     }
       
    // }, [])
    
    useEffect(() => {
        localStorage.setItem('options', JSON.stringify(options), [options]);
    }, [options]);

    return (
        <div>
            <Header title={title} subtitle={subtitle}/>
            <Action
                hasOption={options.length > 0}
                handlePick={handlePick}
            />
            <Options
                options={options}
                handleDeleteAll={handleDeleteAll}
                handleDeleteOption={handleDeleteOption}
            />
            <Addoption
                handleAddOption={handleAddOption}
            /> 
        </div>
    )
}

export default Indecesionapp;
