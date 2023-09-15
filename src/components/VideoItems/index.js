import CartContext from '../../context/CartContext'

import {Link} from 'react-router-dom'

import './index.css'

const VideoCard = props => {
  const {details} = props
  const {title, id, thumbnailUrl, viewCount, channel, publishedAt} = details
  const {name, profileImageUrl} = channel

  return (
    <CartContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'

        const textColor = isDarkTheme ? '#f9f9f9' : '#181818'

        return (
          <Link to={`videos/${id}`}>
            <li bgColor={bgColor}>
              <img src={thumbnailUrl} alt="video thumbnail" />
              <div>
                <img src={profileImageUrl} alt="channel logo" />
                <div>
                  <p color={textColor}>{title}</p>
                  <p color={textColor}>{name}</p>
                  <p color={textColor}>{viewCount} views</p>
                  <p>{publishedAt}</p>
                </div>
              </div>
            </li>
          </Link>
        )
      }}
    </CartContext.Consumer>
  )
}

export default VideoCard
