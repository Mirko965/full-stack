import React from 'react'

class Option extends React.Component {

  handleDelete =  () => {
    this.props.deleteOption(this.props.option)
  }

  render () {
    return (
      <div>
        <li>{this.props.option}
          <button onClick={this.handleDelete}>remove</button>
        </li>
      </div>)
  }
}
export default Option
