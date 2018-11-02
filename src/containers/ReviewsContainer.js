import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurant={this.props.restaurant} />
        <Reviews />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addReview: (text, restaurantId) => dispatch({type: 'ADD_REVIEW', payload: {text, restaurantId}})
})



export default connect(null, mapDispatchToProps)(ReviewsContainer)
