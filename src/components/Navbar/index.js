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
      console.log(isDarkTheme)
      return (
        <>
          {isDarkTheme ? (
            <div className="nav-container grey-nav">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                alt="website logo"
                className="website-logo"
              />
              <ul className="link-container">
                <Link to="/" className="link">
                  <li>
                    <p className="light-nav">Home</p>
                  </li>
                </Link>
                <Link to="/about" className="link">
                  <li>
                    <p className="light-nav">About</p>
                  </li>
                </Link>
              </ul>
              <button
                type="button"
                data-testid="theme"
                onClick={onClickDayNight}
                className="btn"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  alt="theme"
                  className="day-night-theme"
                />
              </button>
            </div>
          ) : (
            <div className="nav-container light-nav">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="website logo"
                className="website-logo"
              />
              <ul className="link-container">
                <Link to="/" className="link">
                  <li>
                    <p className="dark-nav">Home</p>
                  </li>
                </Link>
                <Link to="/about" className="link">
                  <li>
                    <p className="dark-nav">About</p>
                  </li>
                </Link>
              </ul>
              <button
                type="button"
                data-testid="theme"
                onClick={onClickDayNight}
                className="btn"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  alt="theme"
                  className="light"
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
