import PickListItem from "./PickListItem";

const PickList = ({ game, isNameEditMode, isRandomizeMode, onNameChange }) => {

  return (
    <div className="pick-container">
      { game.map( (picks) => (
        <PickListItem key={picks.id} picks={picks} isNameEditMode={isNameEditMode} isRandomizeMode={isRandomizeMode} onNameChange={onNameChange}/>
        ) )
      }
    </div>
  );
}

export default PickList;
