

const PickListItem = ({ picks, isNameEditMode, isRandomizeMode, onNameChange }) => {
    return (
        <div className='pick'>
            { 
                isNameEditMode ? ( 
                    <input className='form-input' type="text" defaultValue={picks.user} onChange={(e) => onNameChange(e, picks.id)} />
                ) : (
                    isRandomizeMode ? (<p></p>) : (<p id='user-name'>{ picks.user }</p>) 
                )
            }
            <ul>
                <li>{ picks.north }</li>
                <li>{ picks.midwest }</li>
                <li>{ picks.south }</li>
                <li>{ picks.west }</li>
            </ul>
        </div>
    );
  }
  
export default PickListItem;
  