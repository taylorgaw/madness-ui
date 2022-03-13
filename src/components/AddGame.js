import { useState } from 'react';

const AddGame = ({ onAdd }) => {
    const [title, setTitle] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if(!title) {
            alert('Please add a league title')
            return
        }
        onAdd(title)
        setTitle('')
    }
  return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>League Name</label>
                <input type='text' placeholder='Add League Name' 
                value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className='form-control'>
                <input type='submit' value='Save Game' className='btn'/>
            </div>
        </form>
    );
}

export default AddGame;
