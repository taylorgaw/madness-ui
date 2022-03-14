

const PickListItem = ({ picks, isNameEditMode, isRandomizeMode, onNameChange, onPickChange }) => {
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
                <li>{
                    isNameEditMode ? ( 
                        <input className='form-input' type="text" defaultValue={picks.east} onChange={(e) => onPickChange(e, picks.id, 'east')} />
                    ) : (
                        <p>{ picks.east }</p>
                    )
                }</li>
                <li>{ 
                    isNameEditMode ? ( 
                        <input className='form-input' type="text" defaultValue={picks.south} onChange={(e) => onPickChange(e, picks.id, 'south')} />
                    ) : (
                        <p>{ picks.south }</p>
                    )
                }</li>
                <li>{ 
                    isNameEditMode ? ( 
                        <input className='form-input' type="text" defaultValue={picks.midwest} onChange={(e) => onPickChange(e, picks.id, 'midwest')} />
                    ) : (
                        <p>{ picks.midwest }</p>
                    )
                }</li>
                <li>{ 
                    isNameEditMode ? ( 
                        <input className='form-input' type="text" defaultValue={picks.west} onChange={(e) => onPickChange(e, picks.id, 'west')} />
                    ) : (
                        <p>{ picks.west }</p>
                    )
                }</li>
            </ul>
        </div>
    );
  }
  
export default PickListItem;
  