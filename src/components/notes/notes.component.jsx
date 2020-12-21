import React,{useState,useEffect,useReducer} from 'react'



    //------------------whit reducer------------
const notesReducer = (notes, submit) => {
    console.log({ notes, submit });
        switch (submit.type) {
            case 'POPULATE_NOTES':
                return submit.notes
            case 'ADD_NOTES':
                return [
                    ...notes,
                    {
                        title: submit.title,
                        body: submit.body
                    }
                ]
            case 'REMOVE_NOTES': 
                return  notes.filter((note) => note.title !== submit.title)
            
            default: 
                return notes
        }

}
    //-------------------------------------

function Notes() {

    const [notes,noteSetAction]=useReducer(notesReducer, []);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');




    const addNote=(e)=> {
        e.preventDefault();
        noteSetAction({
            type: 'ADD_NOTES',
            title,
            body
        })
    //   setNotes([
    //     ...notes,
    //     {title,body}
    //   ]);
    
      setTitle('');
      setBody('');
    }


    const removeNote=(title)=>{
    //   setNotes(notes.filter((note)=> note.title !==title ))
    noteSetAction({
            type: 'REMOVE_NOTES',
            title
        })
    }

    useEffect(()=>{ 
        const notesData =JSON.parse(localStorage.getItem('notes'));
        if (notesData) {
            // setNotes(notesData);
            noteSetAction({ type: 'POPULATE_NOTES', notes: notesData });
        }
    },[]);

    useEffect(()=>{
        localStorage.setItem('notes',JSON.stringify(notes),[notes])
      })
  
    
    
  
    //------------------------------------------

    //-------------------------old useState-----

    // const [notes,setNotes]=useState([]);
    // const [title , setTitle]=useState('');
    // const [body,setBody]=useState('');
    
    // useEffect(()=>{ 
    //     const notesData =JSON.parse(localStorage.getItem('notes'));
    //     if (notesData){
    //         setNotes(notesData);
    //     }
    // },[]);
    
    // const addNote=(e)=> {
    //   e.preventDefault();
    //   setNotes([
    //     ...notes,
    //     {title,body}
    //   ]);
    
    //   setTitle('');
    //   setBody('');
    // }
    
    
    // const removeNote=(title)=>{
    //   setNotes(notes.filter((note)=> note.title !==title ))
    // }
    // useEffect(()=>{
    //   localStorage.setItem('notes',JSON.stringify(notes),[notes])
    // })


//-------------------------old useState-------------
    return (
        <div>
            <h1>Notes</h1>
     
     {notes.map((note)=>(
       
       <div key={note.title}>
         <h3>{note.title}</h3>
         <p>{note.body}</p>
         <button onClick={()=>removeNote(note.title)}>X</button>
         </div>)
     )}

     <p>Add Notes</p>
     <form onSubmit={addNote}>
       <input value={title} onChange={(e)=> setTitle(e.target.value)}   />
       <textarea value={body} onChange={(e)=> setBody(e.target.value)} ></textarea>
       <button>add notes</button>
     </form>
        </div>
    )
}

export default Notes;
