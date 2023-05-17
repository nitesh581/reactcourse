import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import PropTypes from 'prop-types'

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className='container my-3'>
        <TextForm heading="Enter the text to analyze below" />
        {/* <About/> */}
      </div>
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
