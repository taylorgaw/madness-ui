import React from 'react'

const PickHeader = ({ 
  title, 
  isNameEditMode, 
  isRandomizeMode, 
  onTitleChange, 
  onClickNameEdit, 
  onClickRandomize, 
  onClickSave,
  onClickClear,
  onClickShuffle, 
  onClickCancel }) => {
    
  return (
    <div className='heading'>
        { isNameEditMode ? ( 
            <input className='form-input' type="text" defaultValue={title} onChange={(e) => onTitleChange(e)} />
          ) : (
            <h2 className='title'>
              { title }
            </h2> 
          )
        }
        {
          (!isNameEditMode && !isRandomizeMode) &&
          <div>
            <button className='btn' onClick={onClickNameEdit}>Edit Names</button>
            <button className='btn' onClick={onClickRandomize}>Generate Picks</button>
          </div>
        }
        {
          isNameEditMode && 
            <div>
              <button className='btn' onClick={onClickSave}>Save</button>
              <button className='btn' onClick={onClickCancel}>Cancel</button>
            </div>
        }
        {
          isRandomizeMode &&
          <div>
              <button className='btn' onClick={onClickShuffle}>Shuffle Picks</button>
              <button className='btn' onClick={onClickClear}>Clear Picks</button>
              <button className='btn' onClick={onClickSave}>Save</button>
          </div>
        }
    </div>
  )
}

export default PickHeader