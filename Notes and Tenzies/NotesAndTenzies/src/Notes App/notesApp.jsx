import React from "react";
import Editor from './components/Editor';
import Sidebar from "./components/Sidebar";
import {data} from './data';
import {nanoid} from 'nanoid';
import Split from 'react-split'
import './notesApp.css';

function NotesApp(){

    const [notes, setNotes] = React.useState(
                () => JSON.parse(localStorage.getItem("notes")) || []);

    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
    )
    
    React.useEffect(() => {   
            localStorage.setItem("notes", JSON.stringify(notes))   
    }, [notes])

    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here"
        }
        setNotes(prevNotes => [newNote, ...prevNotes])
        setCurrentNoteId(newNote.id)
    }
    
    function updateNote(text) {
        // Try to rearrange the most recently-modified
        // not to be at the top

        setNotes(oldNotes =>{
            // Create a new empty array 
            const newNotesArray = [];
            // Loop over the original array
                    // if the id matches
                    // put the updated note at the 
                    // beginning of the new array
                // else
                    // push the old note to the end
                    // of the new array
            // return the new array
            for(let i=0; i< oldNotes.length; i++){
                const oldNote = oldNote[i];
                if(oldNote.if === currentNoteId){
                    newNotesArray.unshift({...oldNote, body : text})
                }
                else{
                    newNotesArray.push(oldNote);
                }
            }
        })

        // This does not rearrange the notes
        // setNotes(oldNotes => oldNotes.map(oldNote => {
        //     return oldNote.id === currentNoteId
        //         ? { ...oldNote, body: text }
        //         : oldNote
        // }))
    }

    function deleteNote(event, noteId) {
        event.stopPropagation()
        setNotes(oldNotes => oldNotes.filter((note) => note.id !== noteId))
    }
      
    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }

    return(
        <main>
        {
            notes.length > 0 
            ?
            <Split 
                sizes={[30, 70]} 
                direction="horizontal" 
                className="split"
            >
                <Sidebar
                    notes={notes}
                    currentNote={findCurrentNote()}
                    setCurrentNoteId={setCurrentNoteId}
                    newNote={createNewNote}
                    deleteNote ={ deleteNote }
                />
                {
                    currentNoteId && 
                    notes.length > 0 &&
                    <Editor 
                        currentNote={findCurrentNote()} 
                        updateNote={updateNote} 
                    />
                }
            </Split>
            :
            <div className="no-notes">
                <h1>You have no notes</h1>
                <button 
                    className="first-note" 
                    onClick={createNewNote}
                >
                    Create one now
                </button>
            </div>
            
        }
        </main>
    )
}

export default NotesApp;