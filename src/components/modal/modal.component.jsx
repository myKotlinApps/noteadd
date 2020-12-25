import React from 'react'
import Modal from 'react-modal';

import '../modal/modal.styles.css'

const OptionModal=(props) => (
    <Modal className='Modals'
        isOpen={!!props.selectedOption}
        contentLabel='Selected Option'
        onRequestClose={props.handleSelectedOption}
    >
        <h3>Selected Options Here</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleSelectedOption}>Okay</button>
    </Modal>
) 


export default OptionModal;
