class IndecisionApp extends React.Component{
  constructor (props) {
    super(props)
    this.handlePick = this.handlePick.bind(this)
    this.handleRemoveOptions = this.handleRemoveOptions.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)

    this.state = {
      options: props.options
    }
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
        <AddOption addOption={this.handleAddOption} />
      </div>
    )
  }

  componentDidMount() {
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
  handleRemoveOptions() {
    this.setState(() => ({
      options:[]
    }))
  }
  handlePick() {
    const options = this.state.options
    const randomNum = Math.floor(Math.random() * options.length)
    alert(options[randomNum])
  }
  handleAddOption(option) {
    if (!option){
      return 'Enter valid name of option'
    } else if (this.state.options.indexOf(option) !== -1 ){
      return 'This option already exist'
    }
    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }))
  }
  handleDeleteOption(optionToDelete) {
    this.setState((prevState) => ({
      options: prevState.options.filter(option => optionToDelete !== option)
    }))

  }

}
IndecisionApp.defaultProps = {
  options: []
}

const Header = props => (
  <div>
    <h1>{props.title}</h1>
    {props.subTitle && <h2>{props.subTitle}</h2>}
  </div>
)
Header.defaultProps = {
  title: 'Indecision'
}

const Action = props => (
  <div>
    <button onClick={props.handlePick}
            disabled={props.hasOption}>
      What should i do
    </button>
  </div>
)
const Options = props => (
  <div>
    <button onClick={props.removeAll}>Remove All</button>
    {props.options.length === 0 && <p>Please add options to start</p>}
    <ol>
      {props.options.map((option,index) =>
        <Option key={index}
                option={option}
                deleteOption={props.deleteOption}
        />)
      }
    </ol>
  </div>
)

class Option extends React.Component{
  constructor (props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleDelete(){
    this.props.deleteOption(this.props.option)
  }
  render() {
    return (
      <div>
        <li>{this.props.option}
          <button onClick={this.handleDelete}>remove</button>
        </li>
      </div>)
  }
}

class AddOption extends React.Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      error: undefined
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    const option = event.target.addoptions.value
    const error = this.props.addOption(option)
    if (option) {
      event.target.addoptions.value = ''
    }
    this.setState(() => ({ error }))
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


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
