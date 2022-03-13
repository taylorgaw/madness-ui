import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom';
import { Button } from './Button';

const Header = ({title, onAdd, showAdd, handleClickAdmin}) => {
  const location = useLocation()
  return (
      <header>
        <h1 className='title'>{title}</h1>
        { location.pathname === '/' && (
        <div>
        <Button 
          color={showAdd ? 'red' : 'green'} 
          text={showAdd ? 'Close' : 'Add'} 
          onClick={onAdd} 
        />
        <button className='btn' onClick={handleClickAdmin}>Admin</button>
        </div>
      )}
      </header>
  );
};

Header.defaultProps = {
    title: 'March Madness Picks 2022'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;
