import React from 'react'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import AddOption from './AddOption'

class IndecisionApp extends React.Component {
  state = {
    options:[]
  }

  render () {
    return (
      <div>
        <Header subTitle='Put your life in the hand of Computer'/>
        <Action handlePick={this.handlePick}
                hasOption={!this.state.options.length > 0}/>
        <Options options={this.state.options}
                 removeAll={this.handleRemoveOptions}
                 deleteOption={this.handleDeleteOption}
        />
        <AddOption addOption={this.handleAddOption}/>
      </div>
    )
  }
  handleRemoveOptions = () => {
    this.setState(() => ({
      options: []
    }))
  }

  handlePick =  () => {
    const options = this.state.options
    const randomNum = Math.floor(Math.random() * options.length)
    alert(options[randomNum])
  }

  handleAddOption =  (option) => {
    if (!option) {
      return 'Enter valid name of option'
    } else if (this.state.options.indexOf(option) !== -1) {
      return 'This option already exist'
    }
    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }))
  }

  handleDeleteOption =  (optionToDelete) => {
    this.setState((prevState) => ({
      options: prevState.options.filter(option => optionToDelete !== option)
    }))
  }

  componentDidMount () {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)
      if (options) {
        this.setState(() => ({options}))
      }
    } catch (e) {}
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  }

}

IndecisionApp.defaultProps = {
  options: []
}
export default IndecisionApp
