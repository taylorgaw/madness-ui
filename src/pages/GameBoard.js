import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PickList from '../components/Picks/PickList';
import PickHeader from '../components/Picks/PickHeader'

const GameBoard = ( ) => {
  const { id } = useParams()
  const [game, setGame] = useState()
  const [losers, setLosers] = useState([])
  const [isNameEditMode, setNameEditMode] = useState(false)
  const [isRandomizeMode, setRandomizeMode] = useState(false)
  const madnessAPI = 'https://taylorgaw.pythonanywhere.com'
  //const madnessAPI = 'http://localhost:5000'


  useEffect(() => {
    const fetchGame = async (id) => {       
        const resp = await fetch(`${madnessAPI}/games/${id}`, {
          method: 'GET'
        })
    
        const data = await resp.json()
    
        if(!resp.ok){
          throw new Error(`GET request to /games/${id} failed with error: ${data.message}, ${data.details}`);
        } else {
          setGame(data['game'])
        }
    }

    const fetchLosers = async () => {
      const resp = await fetch(`${madnessAPI}/teams`, {
        method: 'GET'
      })

      const data = await resp.json()
    
      if(!resp.ok){
        throw new Error(`GET request to /games/${id} failed with error: ${data.message}, ${data.details}`);
      } else {
        setLosers(data['losers'])
      }
    }

    fetchGame(id)
    fetchLosers()
  }, [])

  // Update games
  const updateGame = async (updates) => {
    const gameCopy = Object.assign({}, updates)
    delete gameCopy.created_at
    delete gameCopy.last_updated
    gameCopy.picks = JSON.stringify(gameCopy.picks)
    const resp = await fetch(`${madnessAPI}/games/${id}`, {
      method: 'PUT',
      body: JSON.stringify(gameCopy),
      headers: {
        'Content-type': 'application/json'
      },
    })
    const data = await resp.json()

    if(!resp.ok){
      throw new Error(`PUT request to /games/${id} failed with error: ${data.message}, ${data.details}`);
    } else {
      setGame(data['game'])
    }
  }
  
  function handleClickEditNames() {
    const password = window.prompt('Please enter the Admin password:')
    if(password === 'gabagool'){
      setRandomizeMode(false)
      setNameEditMode(true)
    } else {
      window.alert('Incorrect Password!')
    }
  }

  function handleClickSave() {
    setNameEditMode(false)
    setRandomizeMode(false)
    updateGame(game)
  }

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
  }

  function handleClickRandomize() {
    const password = window.prompt('Please enter the Admin password:')
    if(password === 'gabagool'){
      setRandomizeMode(true)
      setNameEditMode(false)
    } else {
      window.alert('Incorrect Password!')
    }
  }

  function handleClickShuffle() {
    const east = shuffleArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])
    const midwest = shuffleArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])
    const south = shuffleArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])
    const west = shuffleArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])

    const gameCopy = Object.assign({}, game)
    const names = gameCopy.picks.map((pick) => {
      return pick.user
    })

    const shuffledNames = shuffleArray(names)

    const newPicks = game.picks.map((pick) => {
      pick.user = shuffledNames.pop()
        pick.east = "East " + east.pop().toString()
        pick.midwest = "Midwest " + midwest.pop().toString()
        pick.south = "South " + south.pop().toString()
        pick.west = "West " + west.pop().toString()
        return pick
      })

    gameCopy.picks = newPicks
    setGame(gameCopy)
  }

  function handleClickClear() {
    const gameCopy = Object.assign({}, game)
    const newPicks = game.picks.map((pick) => {
      pick.east = " "
      pick.midwest = " "
      pick.south = " "
      pick.west = " "
      return pick
    })

    gameCopy.picks = newPicks
    setGame(gameCopy)
  }

  // For some reason baseState is just like game
  function handleClickCancel() {
    setNameEditMode(false)
    setRandomizeMode(false)
  }

  function handleTitleChange(e) {
    game.title = e.target.value
  }

  function handleNameChange(e, pickId) {
    game.picks.map((pick) => {
      if(pick.id === pickId){ 
        pick.user = e.target.value 
      } 
      return pick
    })
  }

  function handlePickChange(e, pickId, region) {
    game.picks.map((pick) => {
      if(pick.id === pickId){ 
        pick[region] = e.target.value 
      } 
      return pick
    })
  }

  if (!game) {
    return <h3 className='title'>Loading...</h3>
  } else {
    return (
      <>
          {game.title !== "Not Found" ? ( 
            <div>
                <PickHeader 
                  title={game.title} 
                  isNameEditMode={isNameEditMode}
                  isRandomizeMode={isRandomizeMode}
                  onTitleChange={handleTitleChange} 
                  onClickNameEdit={handleClickEditNames}
                  onClickRandomize={handleClickRandomize}
                  onClickSave={handleClickSave}
                  onClickClear={handleClickClear}
                  onClickShuffle={handleClickShuffle}
                  onClickCancel={handleClickCancel}
                />
                <PickList 
                  game={game.picks} 
                  isNameEditMode={isNameEditMode} 
                  isRandomizeMode={isRandomizeMode}
                  onNameChange={handleNameChange}
                  onPickChange={handlePickChange}
                  losers={losers}
                />
            </div>
          ) : (
          <h3 className='title'>Game with ID {id} does not exist</h3>
          )}
      </>
    );
  }
  
}

export default GameBoard;
