import './App.css';
import Navbar from './components/Navbar'
import PropTypes from 'prop-types'

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string
}

Navbar.defaultProps = {
  title: 'Set Title',
  aboutText: 'About'
}

export default App;
