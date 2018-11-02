
import cuid from 'cuid';
export const cuidFn = cuid;

let id = 0;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = {
        text: action.payload,
        id: cuid()
      }
      return {...state, restaurants: [...state.restaurants, restaurant ]}
    case 'DELETE_RESTAURANT':
      let restaurants = state.restaurants.filter(r => r.id !== action.payload)
      return {restaurants}
    case 'ADD_REVIEW':
      const review = {
        text: action.payload.text,
        restaurantId: action.payload.restaurantId,
        id: cuid()
      }
      return {...state, reviews: [...state.reviews, review]}
    default:
      return state
  }

}
