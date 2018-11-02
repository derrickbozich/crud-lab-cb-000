import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {

  const reviews = this.props.reviews.filter(r => r.restaurantId === this.props.restaurant.id)
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurant={this.props.restaurant} />
        <Reviews reviews={reviews} deleteReview={this.props.deleteReview} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addReview: (text, restaurantId) => dispatch({type: 'ADD_REVIEW', payload: {text, restaurantId}}),
  deleteReview: reviewId => dispatch({type: 'DELETE_REVIEW', payload: reviewId})
})

const mapStateToProps = ({reviews}) => ({reviews})



export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
