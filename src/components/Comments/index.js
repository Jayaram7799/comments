import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comment extends Component {
  state = {
    count: 0,
    commentList: [],
    name: '',
    comment: '',
  }

  toggleIsFavorite = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const randomIndex = Math.floor(
      Math.random() * initialContainerBackgroundClassNames.length,
    )
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      backgroundColorClass: initialContainerBackgroundClassNames[randomIndex],
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      comment: '',
      count: prevState.count + 1,
    }))
  }

  onClickDeleteButton = uid => {
    this.setState(prevState => ({
      commentList: prevState.commentList.filter(
        eachComment => eachComment.id !== uid,
      ),
      count: prevState.count - 1,
    }))
  }

  render() {
    const {count, name, comment, commentList} = this.state

    return (
      <div className="main-Container">
        <div className="container">
          <div>
            <h1 className="heading">Comments</h1>
            <p className="sub-heading">Say something about 4.0 Technologies</p>

            <form onSubmit={this.onAddComment} className="form">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={this.onChangeName}
                className="input"
              />
              <textarea
                name=""
                id=""
                cols="31"
                rows="10"
                placeholder="Your Comment"
                value={comment}
                onChange={this.onChangeComment}
                className="text-area"
              />
              <button type="submit" className="btn">
                Add Comment
              </button>
            </form>
          </div>
          <div>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
              alt="comments"
            />
          </div>
        </div>

        <div className="Comment-section">
          <hr />
          <div className="count-section">
            <p className="count">{count}</p>
            <p className="heading-2">Comments</p>
          </div>
        </div>
        <ul className="comment-section2">
          {commentList.map(eachComment => (
            <CommentItem
              key={eachComment.id}
              comments={eachComment}
              toggleIsFavorite={this.toggleIsFavorite}
              onClickDeleteButton={this.onClickDeleteButton}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comment
