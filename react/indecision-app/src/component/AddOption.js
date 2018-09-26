import React from 'react'

class AddOption extends React.Component {
  state = {
    error: undefined
  }

  handleSubmit =  (event) => {
    event.preventDefault()
    const option = event.target.addoptions.value
    const error = this.props.addOption(option)
    if (option) {
      event.target.addoptions.value = ''
    }
    this.setState(() => ({error}))
  }

  render () {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='addoptions'/>
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}
export default AddOption
