import PickListItem from "./PickListItem";

const PickList = ({ game, isNameEditMode, isRandomizeMode, onNameChange, onPickChange, losers }) => {

  return (
    <div className="pick-container">
      { game.map( (picks) => (
        <PickListItem key={picks.id} picks={picks} isNameEditMode={isNameEditMode} isRandomizeMode={isRandomizeMode} onNameChange={onNameChange} onPickChange={onPickChange} losers={losers} />
        ) )
      }
    </div>
  );
}

export default PickList;
