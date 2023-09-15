import './index.css'

import CartContext from '../../context/CartContext'

const NotFound = () => (
  <CartContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      const isDarkHeading = isDarkTheme ? 'white' : 'black'

      const isDarkDesc = isDarkTheme ? 'white' : 'black'

      const isDarkContainer = isDarkTheme ? 'black' : 'white'

      return (
        <>
          <div isDark={isDarkContainer}>
            <img src={imageUrl} alt="not found" />
            <h1 isDark={isDarkHeading} isDarkTheme>
              Page Not Found
            </h1>
            <p isDark={isDarkDesc}>
              we are sorry, the page you requested could not be found.
            </p>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default NotFound
