import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <>
          {isDarkTheme ? (
            <div>
              <Navbar />
              <div className="body-container dark">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  alt="not found"
                  className="body-img"
                />
                <h1 className="dark">Lost Your Way</h1>
                <p className="dark">We cannot seem to find the page</p>
              </div>
            </div>
          ) : (
            <div>
              <Navbar />
              <div className="body-container light">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  alt="not found"
                  className="body-img"
                />
                <h1 className="light">Lost Your Way</h1>
                <p className="light">We cannot seem to find the page</p>
              </div>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
