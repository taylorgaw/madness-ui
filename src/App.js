import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import GameList from './components/GameList';
import AddGame from './components/AddGame';
import About from './pages/About';
import GameBoard from './pages/GameBoard';
import Admin from './pages/Admin';


const newGameTemplate = [
      {
    "id": 1,
          "user": "Player 1",
          "north": "",
          "south": "",
          "midwest": "",
          "west": ""
      },
      {
    "id": 2,
          "user": "Player 2",
          "north": "",
          "south": "",
          "midwest": "",
          "west": ""
      },
      {
    "id": 3,
          "user": "Player 3",
          "north": "",
          "south": "",
          "midwest": "",
          "west": ""
      },
      {
    "id": 4,
          "user": "Player 4",
          "north": "",
          "south": "",
          "midwest": "",
          "west": ""
      },
      {
    "id": 5,
          "user": "Player 5",
          "north": "",
          "south": "",
          "midwest": "",
          "west": ""
      },
      {
    "id": 6,
          "user": "Player 6",
          "north": "",
          "south": "",
          "midwest": "",
          "west": ""
      },
      {
    "id": 7,
          "user": "Player 7",
          "north": "",
          "south": "",
          "midwest": "",
          "west": ""
      },
      {
    "id": 8,
          "user": "Player 8",
          "north": "",
          "south": "",
          "midwest": "",
          "west": ""
      },
      {
    "id": 9,
          "user": "Player 9",
          "north": "",
          "south": "",
          "midwest": "",
          "west": ""
      },
      {
    "id": 10,
          "user": "Player 10",
          "north": "",
          "south": "",
          "midwest": "",
          "west": ""
      },
      {
    "id": 11,
          "user": "Player 11",
          "north": "",
          "south": "",
          "midwest": "",
          "west": ""
      },
      {
    "id": 12,
          "user": "Player 12",
          "north": "",
          "south": "",
          "midwest": "",
          "west": ""
      },
      {
    "id": 13,
          "user": "Player 13",
          "north": "",
          "south": "",
          "midwest": "",
          "west": ""
      },
      {
    "id": 14,
          "user": "Player 14",
          "north": "",
          "south": "",
          "midwest": "",
          "west": ""
      },
      {
    "id": 15,
          "user": "Player 15",
          "north": "",
          "south": "",
          "midwest": "",
          "west": ""
      },
      {
    "id": 16,
          "user": "Player 16",
          "north": "",
          "south": "",
          "midwest": "",
          "west": ""
      }
  ]

/*
How to properly call Web APIS with useEffect
https://www.digitalocean.com/community/tutorials/how-to-call-web-apis-with-the-useeffect-hook-in-react
*/
const App = () => {
  const [showAddGame, setShowAddGame] = useState(false)
  const [games, setGames] = useState([  ])
  const mySQLDomain = 'http://localhost:5000'

  useEffect(() => {
    const getGames = async () => {
      const gamesFromServer = await fetchGames()
      setGames(gamesFromServer)
    }
    getGames()
  }, [])

  // Fetch games
  const fetchGames = async () => {
    const resp = await fetch(`${mySQLDomain}/games`)
    const data = await resp.json()
    if (!resp.ok) {
      throw new Error(`GET request to /games failed with error: ${data.message}, ${data.details}`);
    } else {
      return data['games']
    }
  }

  const handleDelete = async (id) => {
    const password = window.prompt('Please enter the Admin password:')
    if(password === 'gabagool'){
        const resp = await fetch(`${mySQLDomain}/games/${id}`, {
        method: 'DELETE'
      })
      const data = await resp.json()
      if (!resp.ok) {
        throw new Error(`DELETE request to /games failed with error: ${data.message}, ${data.details}`);
      } else {
        const gamesFromServer = await fetchGames()
        setGames(gamesFromServer)
      }
    } else {
      window.alert('Incorrect Password!')
    }
  }

  const addGame = async (game) => {
    const body = {
      "title": game,
      "picks": JSON.stringify(newGameTemplate)
    }
    const resp = await fetch(`${mySQLDomain}/games`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    
    const data = await resp.json()

    if(!resp.ok){
      throw new Error(`POST request to /games failed with error: ${data.message}, ${data.details}`);
    } else {
      setGames([...games, game])
    }
  }

  function handleClickAdmin() {
    const password = window.prompt('Please enter the Admin password:')
    if(password === 'gabagool'){
      ReactDOM.render(<Admin />, document.getElementById('root'));
    } else {
      window.alert('Incorrect Password!')
    }
  }

  return (
    <Router>
      <div className='container'>
        <Header onAdd={() => setShowAddGame(!showAddGame)} showAdd={showAddGame} handleClickAdmin={handleClickAdmin}/>
        <Routes>
            <Route path='/' exact element={(
              <>
                {showAddGame && <AddGame onAdd={addGame} /> }
                {games.length > 0 ? ( <GameList games={games} onDelete={handleDelete} /> ) : ('No Games To Show')}
              </>
            )} />
            <Route path='/about' element={<About />} />
            <Route path='/gameboard/:id' element={<GameBoard />} />
            <Route path='/admin' element={<Admin />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
