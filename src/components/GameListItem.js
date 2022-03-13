import { Link } from 'react-router-dom'
import GameBoard from '../pages/GameBoard';
import { FaTimes } from 'react-icons/fa'


const GameListItem = ({ game, onDelete }) => {
  /*
    Implement onDoubleClick => Visit Game Grid
  */
  return (
    <div className='game'>
        <h2>
          <Link to={{pathname: `/gameboard/${game.id}`}} element={<GameBoard />}>
            {game.title}
          </Link>
        </h2>
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(game.id)}
        />
    </div>
  )
}

export default GameListItem;
