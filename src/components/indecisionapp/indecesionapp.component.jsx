import React,{useState,useEffect} from 'react'
import Action from '../action/action.component';
import Addoption from '../addoption/addoption.component';
import Header from '../header/header.component';
import OptionModal from '../modal/modal.component';
import Options from '../options/options.component';


import '../indecisionapp/indecesion.styles.css'

const title = 'Indecesion';
const subtitle = 'Put your life in the hands of a computer.';
// const options = ['Thing one','Thing two','Thing three'];




function Indecesionapp() {




    const [options, setOption] = useState([]);
  

    // const [options, setOption] = useState([{
    //     id: 1,
    //     title: '',
    //     body:''
    // }]);
    
    let [selectedOption, setSelectedOption] = useState(undefined);
    let [id, setId] = useState(0)
    var [textBooks, setTextBook] = useState([]);

    const handleDeleteOption = (takeOptions) => {
        setOption(options.filter((item) => item !== takeOptions))

        // for (let items of textBooks) {
        //     console.log(items.filter((item) => items.title === takeOptions));
        //     // setTextBook(items.filter((item) => item.title !== takeOptions))
        // }

        setTextBook(textBooks.filter((item) => item.title !== takeOptions))
            
    

        // var marvelHeroes =  textBooks.filter(function(hero) {
        //     return hero.title !== takeOptions;
        // });
        
        // setOption({ ...options, title : options.title.filter((item) => item !== takeOptions) })
    }
        

    const handleDeleteAll = () => {
        setOption([]);
        setId(id = 0);
    }

    const handlePick = () =>{
        const randomNumber = Math.floor(Math.random() * options.length);
        const option = options[randomNumber]; 
        setSelectedOption(selectedOption= option)
    } 

    
    const handleAddOption = (option) => {

        if (!option) {
            return 'Enter valid value to add item'
        } else if (options.indexOf(option) > -1 ){
            return 'This item already exist !'
        }
        setOption([...options, option]); 


        setId(id + 1);
        setTextBook([...textBooks,{
            NumberId:  id+1,
            body: 'new body',
            title : option
        
        }])

        // setOption([{ ...options,title: option.title }]);
    }

  
    const handleKeyId = () => (
        Math.floor(Math.random() * 100000) 
     )

    const handleSelectedOption = () => {
        setSelectedOption(setSelectedOption=null)
    }

    useEffect(() => {
        const notesData = JSON.parse(localStorage.getItem('options'));
        if (notesData) {
            setOption(notesData );
        }
    }, [])

    useEffect(() => {
        console.log(textBooks);
    },[textBooks])


    //----
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
        <div className='indecesionStyle'>
            
            <Header title={title} subtitle={subtitle}/>
            <Action
                hasOption={options.length > 0}
                handlePick={handlePick}
            />
            <Options
                options={options}
                handleDeleteAll={handleDeleteAll}
                handleDeleteOption={handleDeleteOption}
                handleKeyId={handleKeyId}
            />
            <Addoption
                handleAddOption={handleAddOption}
            /> 
            <OptionModal
                selectedOption={selectedOption}
                handleSelectedOption={handleSelectedOption}
            />
        </div>
    )
}

export default Indecesionapp;
