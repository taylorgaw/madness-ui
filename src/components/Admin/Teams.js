import React from 'react'

const Teams = ( { region, regionName, losers, onDoubleClickTeam, isEditTeamMode, onTeamNameChange } ) => {
    return (
        Object.entries(region).map(([key, value]) => {
            return(<div key={key}>
                { isEditTeamMode ? ( 
                    <div>
                        <p id='user-name'>{key}:</p> 
                        <input className='form-input' type="text" defaultValue={value} onChange={(e) => onTeamNameChange(e, key, regionName)} />
                    </div>
                ) : (
                    <p id='user-name' style={ losers.includes(value) ? {color: 'red'} : {color: 'black'}} onDoubleClick={(e) => onDoubleClickTeam(value)}>{key}: { value }</p> 
                )}
            </div>)
        })
    )
}

export default Teams