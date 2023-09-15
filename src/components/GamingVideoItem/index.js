import {Link} from 'react-router-dom'

import './index.css'

const VideoCardTwo = props => {
  const {details} = props
  const {title, id, thumbnailUrl, viewCount} = details
  return (
    <Link to={`videos/${id}`}>
      <li>
        <img src={thumbnailUrl} alt="video thumbnail" />
        <div>
          <p>{title}</p>
          <p>{viewCount} views</p>
        </div>
      </li>
    </Link>
  )
}
export default VideoCardTwo
