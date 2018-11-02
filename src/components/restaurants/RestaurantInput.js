import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({text: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>Restaurant: </label>
          <input type='text' value={this.state.text} onChange={this.handleChange} />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
