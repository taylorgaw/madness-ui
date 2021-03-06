import React, { useState, useEffect } from 'react'
import Teams from '../components/Admin/Teams'


const Admin = ( { handleFinalized } ) => {
    const [teams, setTeams] = useState({})
    const [losers, setLosers] = useState([])
    const [isEditTeamMode, setEditTeamMode] = useState(false)
    const madnessAPI = 'https://taylorgaw.pythonanywhere.com'
    //const madnessAPI = 'http://localhost:5000'


    useEffect(() => {
        const fetchTeams = async () => {
            const resp = await fetch(`${madnessAPI}/teams`, {
              method: 'GET'
            })
        
            const data = await resp.json()
        
            if(!resp.ok){
              throw new Error(`GET request to /teams failed with error: ${data.message}, ${data.details}`);
            } else {
                setTeams(data['regions'])
                setLosers(data['losers'])
            }
        }
        fetchTeams()
      }, [])

    // Update games
    const updateTeams = async (updates) => {
        const body = {}
        body.year = '2022'
        body.regions = JSON.stringify(updates.regions)
        body.losers = updates.losers
        const resp = await fetch(`${madnessAPI}/teams`, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json'
            },
            })

        const data = await resp.json()

        if(!resp.ok){
            throw new Error(`PUT request to /teams failed with error: ${data.message}, ${data.details}`);
        } else {
            setLosers(data['losers'])
            setTeams(data['regions'])
        }
    }
    
    function handleClickEditNames(){
        setEditTeamMode(true)
    }
    
    function handleClickSaveNames(){
        setEditTeamMode(false)
    }

    function handleClickUpdateNames(){
        const updates = {}
        updates.regions = teams
        updates.losers = losers
        updateTeams(updates)
    }

    const handleSyncSelections = async () => {
        const resp = await fetch(`${madnessAPI}/games/update`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            }
        })

        const data = await resp.json()

        if(data['status'] !== 'Success!'){
            alert('Sync Failed')
        } else {
            alert('Sync Success!')
        }
    }

    function handleTeamNameChange (e, id, region) {
        teams[`${region}`][`${id}`] = e.target.value
    }

    function handleDoubleClickTeam (value) {
        if(losers.includes(value)){
            const newLosers = losers.filter((team) => {
                if(team !== value){
                    return team;
                }
            })
            setLosers(newLosers)
        }
        else{
            setLosers([...losers, value])
        }
    }

    return (
        <div className='container'>
            <h2>Admin Panel</h2>
                { isEditTeamMode ? ( 
                        <button className='btn' onClick={handleClickSaveNames}>Save Teams</button>
                    ) : (
                        <div>
                            <button className='btn' onClick={handleClickEditNames}>Edit Teams</button>
                            <button className='btn' onClick={handleClickUpdateNames}>Update</button>
                        </div>
                    )
                }  
            <div className='team-container'>
            {Object.entries(teams).map(([key, value]) => {
                return(<div key={key} className='team'>
                    <h3>{key}</h3>
                    <Teams region={value} regionName={key} losers={losers} onDoubleClickTeam={handleDoubleClickTeam} isEditTeamMode={isEditTeamMode} onTeamNameChange={handleTeamNameChange} />
                </div>)
            })}
            </div>
            <div>
                <button className='btn' style={{backgroundColor:'green'}} onClick={handleSyncSelections}>Sync Selections</button>
            </div>
        </div>
        
    )
}

export default Admin