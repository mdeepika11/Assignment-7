import {Link, withRouter} from 'react-router-dom'

import {BsMoon} from 'react-icons/bs'

import {FiSun} from 'react-icons/fi'

import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'

import './index.css'

import CartContext from '../../context/CartContext'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <CartContext.Consumer>
      {value => {
        const {onChangeTheme, isDarkTheme} = value

        const onClickChangeTheme = () => {
          onChangeTheme()
        }

        const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'

        const textColor = isDarkTheme ? '#f9f9f9' : '#181818'

        const websiteLogo = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        return (
          <nav bgColor={bgColor}>
            <Link to="/">
              <img src={websiteLogo} alt="website logo" />
            </Link>
            <ul>
              <li>
                <button
                  onClick={onClickChangeTheme}
                  data-testid="theme"
                  color={textColor}
                >
                  {isDarkTheme ? <FiSun /> : <BsMoon />}
                </button>
              </li>

              <li>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </li>

              <li>
                <Popup
                  modal
                  trigger={
                    <button type="button" data-testid="iconButton">
                      Logout
                    </button>
                  }
                >
                  {close => (
                    <div>
                      <div>
                        <p>Are you sure, you want to logout</p>
                        <div>
                          <button
                            type="button"
                            data-testid="closeButton"
                            onClick={() => close()}
                          >
                            Cancel
                          </button>
                          <button type="button" onClick={onClickLogout}>
                            Confirm
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </Popup>
              </li>
            </ul>
          </nav>
        )
      }}
    </CartContext.Consumer>
  )
}
export default withRouter(Header)
