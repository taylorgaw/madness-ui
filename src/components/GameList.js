import GameListItem from './GameListItem'

const GameList = ({ games, onDelete }) => {
  return (
       games.map((game) => {
        return(<div key={game.id}>
            <GameListItem game={game} onDelete={onDelete} />
        </div>)
      })
  )
}

export default GameList;
