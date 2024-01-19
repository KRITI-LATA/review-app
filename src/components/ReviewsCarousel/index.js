// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReviewIndex: 0}

  onClickRightArrow = () => {
    const {activeReviewIndex} = this.state
    const {reviewsList} = this.props
    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  renderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review
    return (
      <div className="review-container">
        <img src={imgUrl} className="review-image" alt={username} />
        <p className="reviewer-name">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="review-description">{description}</p>
      </div>
    )
  }

  onClickLeftArrow = () => {
    const {activeReviewIndex} = this.state
    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state
    const currentReviewDetail = reviewsList[activeReviewIndex]

    return (
      <div className="bg-contaner">
        <h1 className="head-text">Reviews</h1>

        <div className="review-card">
          <button
            className="arrow-button"
            type="button"
            data-testid="leftArrow"
            onClick={this.onClickLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow-image"
            />
          </button>
          {this.renderActiveReview(currentReviewDetail)}
          <button
            className="arrow-button"
            type="button"
            data-testid="rightArrow"
            onClick={this.onClickRightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow-image"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
