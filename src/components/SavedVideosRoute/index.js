import {Component} from 'react'

import Loader from 'react-loader-spinner'

import {AiFillFire} from 'react-icons/ai'

import VideoCardTwo from '../VideoCardTwo'

import CartContext from '../../context/CartContext'

import Header from '../Header'

import SideBar from '../SideBar'

import './index.css'

class SavedVideosRoute extends Component {
  renderSavedVideos = () => (
    <CartContext.Consumer>
      {value => {
        const {savedVideos, isDarkTheme} = value

        const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

        const textColor = isDarkTheme ? '#f9f9f9' : '#181818'

        console.log(savedVideos)
        const isVideosAvailable = savedVideos.length === 0

        return isVideosAvailable ? (
          <div bgColor={bgColor}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <h1 textColor={textColor}>No saved videos found</h1>
            <p textColor={textColor}>
              You can save your videos while watching them.
            </p>
          </div>
        ) : (
          <div bgColor={bgColor}>
            <div bgColor={bgColor}>
              <div>
                <AiFillFire />
              </div>
              <h1 color={textColor}>Saved Videos</h1>
            </div>

            <ul bgColor={bgColor}>
              {savedVideos.map(each => (
                <VideoCardTwo key={each.id} details={each} />
              ))}
            </ul>
          </div>
        )
      }}
    </CartContext.Consumer>
  )

  renderLoadingView = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

          return (
            <div data-testid="savedVideos">
              <Header />
              <div data-testid="home" bgColor={bgColor}>
                <div>
                  <SideBar />
                </div>
                <div bgColor={bgColor}>{this.renderSavedVideos()}</div>
              </div>
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default SavedVideosRoute
