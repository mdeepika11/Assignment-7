import {Component} from 'react'

import {IoMdClose} from 'react-icons/io'

import Header from '../Header'

import SearchVideos from '../SearchVideos'

import CartContext from '../../context/CartContext'

import './index.css'

import SideBar from '../SideBar'

class HomeRoute extends Component {
  state = {display: 'flex'}

  onCloseBanner = () => {
    this.setState({display: 'none'}, this.renderHomeVideos)
  }

  renderHomeVideos = () => {
    const {display} = this.state

    return (
      <>
        <div data-testid="banner" display={display}>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch logo"
            />
            <p>Buy Nxt Watch Premium</p>
            <button>GET IT NOW</button>
          </div>
          <button
            type="button"
            data-testid="close"
            onClick={this.onCloseBanner}
          >
            <IoMdClose size={20} color="#231f20" />
          </button>
        </div>
        <SearchVideos />
      </>
    )
  }

  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'

          return (
            <div data-testid="home">
              <Header />
              <div bgColor={bgColor}>
                <div>
                  <SideBar onChangeActiveTab={this.onChangeActiveTab} />
                </div>
                <div bgColor={bgColor}>{this.renderHomeVideos()}</div>
              </div>
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}
export default HomeRoute
