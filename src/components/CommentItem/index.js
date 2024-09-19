import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {comments, toggleIsFavorite, onClickDeleteButton} = props
  const {name, comment, isLiked, id, backgroundColorClass} = comments
  const firstCharacter = name.charAt(0)

  const OnClickFavoriteIcon = () => {
    toggleIsFavorite(id)
  }

  const onClickDeleteButton1 = () => {
    onClickDeleteButton(id) // Use the onClickDeleteButton prop passed from the parent component
  }

  const starImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="comment-item-container">
      <div className="card">
        <h1 className={`title ${backgroundColorClass}`}>{firstCharacter}</h1>
        <div>
          <div className="top">
            <h3 className="name">{name}</h3>
            <p className="date">{formatDistanceToNow(new Date())}</p>
          </div>
          <p className="para2">{comment}</p>
        </div>
      </div>
      <div className="bottom">
        <div className="liked">
          <button
            type="button"
            className="button12"
            onClick={OnClickFavoriteIcon}
          >
            <img src={starImgUrl} alt="like" />
          </button>
          <p className="para">Like</p>
        </div>
        <div className="delete-btn">
          <button
            className="button12"
            type="button"
            data-testid="delete"
            onClick={onClickDeleteButton1}
          >
            <img
              className="delete-img"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default CommentItem
