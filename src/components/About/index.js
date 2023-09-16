// Write your code here
import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <>
          {isDarkTheme ? (
            <div>
              <Navbar />
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                  alt="home"
                />
                <h1>About</h1>
              </div>
            </div>
          ) : (
            <div>
              <Navbar />
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                  alt="home"
                />
                <h1>About</h1>
              </div>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default About