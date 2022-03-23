

const PickListItem = ({ picks, isNameEditMode, isRandomizeMode, onNameChange, onPickChange, losers }) => {
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
                        <p style={ losers.includes(picks.east) ? {textDecoration: 'line-through', color: 'red'} : {} }>{ picks.east }</p>
                    )
                }</li>
                <li>{ 
                    isNameEditMode ? ( 
                        <input className='form-input' type="text" defaultValue={picks.south} onChange={(e) => onPickChange(e, picks.id, 'south')} />
                    ) : (
                        <p style={ losers.includes(picks.south) ? {textDecoration: 'line-through', color: 'red'} : {} }>{ picks.south }</p>
                    )
                }</li>
                <li>{ 
                    isNameEditMode ? ( 
                        <input className='form-input' type="text" defaultValue={picks.midwest} onChange={(e) => onPickChange(e, picks.id, 'midwest')} />
                    ) : (
                        <p style={ losers.includes(picks.midwest) ? {textDecoration: 'line-through', color: 'red'} : {} }>{ picks.midwest }</p>
                    )
                }</li>
                <li>{ 
                    isNameEditMode ? ( 
                        <input className='form-input' type="text" defaultValue={picks.west} onChange={(e) => onPickChange(e, picks.id, 'west')} />
                    ) : (
                        <p style={ losers.includes(picks.west) ? {textDecoration: 'line-through', color: 'red'} : {} }>{ picks.west }</p>
                    )
                }</li>
            </ul>
        </div>
    );
  }
  
export default PickListItem;
  