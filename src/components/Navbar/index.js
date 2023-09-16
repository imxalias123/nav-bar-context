// Write your code here
import './index.css'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onClickDayNight = () => {
        toggleTheme()
      }

      return (
        <>
          {isDarkTheme ? (
            <div className="nav-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                alt="website-logo"
                className="website-logo"
              />
              <ul className="link-container">
                <Link to="/" className="link">
                  <li>Home</li>
                </Link>
                <Link to="/about" className="link">
                  <li>About</li>
                </Link>
              </ul>
              <button type="button" onClick={onClickDayNight}>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  alt="light"
                  className="day-night-theme"
                />
              </button>
            </div>
          ) : (
            <div className="nav-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="website-logo"
                className="website-logo"
              />
              <ul className="link-container">
                <Link to="/home">
                  <li>Home</li>
                </Link>
                <Link to="/about">
                  <li>About</li>
                </Link>
              </ul>
              <button type="button" onClick={onClickDayNight}>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  alt="light"
                  className="day-night-theme"
                  onClick={onClickDayNight}
                />
              </button>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
