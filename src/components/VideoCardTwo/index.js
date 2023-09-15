import CartContext from '../../context/CartContext'

import {Link} from 'react-router-dom'

import './index.css'

const VideoCardTwo = props => {
  const {details} = props
  const {title, id, thumbnailUrl, viewCount, channel, publishedAt} = details
  const {name} = channel

  return (
    <CartContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'

        const textColor = isDarkTheme ? '#f9f9f9' : '#181818'

        return (
          <Link to={`videos/${id}`} color={bgColor}>
            <li>
              <img src={thumbnailUrl} alt="video thumbnail" />
              <div>
                <div>
                  <p textColor={textColor} size={20}>
                    {title}
                  </p>
                  <p>{name}</p>
                  <p textColor={textColor} size={15}>
                    {viewCount} views
                  </p>
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

export default VideoCardTwo
