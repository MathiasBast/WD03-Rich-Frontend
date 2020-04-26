import React from 'react'
import { Link } from 'react-router-dom'

class Form extends React.Component {
  state= {
    name: '',
    color: '',
    animal: ''
  }

  handleNameChange = event =>{
    this.setState({
      name: event.target.value
    })
  }
  handleColorChange = event =>{
    this.setState({
      color: event.target.value
    })
  }
  handleAnimalChange = event =>{
    this.setState({
      animal: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state)
  }
  render () {
    return (
      <div>
        <form>
          <label>Name</label> &nbsp; <input type='text' value={this.state.name} onChange={this.handleNameChange} />
          <br />
          <label>Color</label> &nbsp; <input type='text' value={this.state.color} onChange={this.handleColorChange} />
          <br />
          <label>animal</label> &nbsp; <input type='text' value={this.state.animal} onChange={this.handleAnimalChange} />
          <br />
          <button type='submit' onClick={this.handleSubmit} >Submit</button>
        </form>
        <Link to='/data'>See Data</Link>
      </div>
    )
  }
}

export default Form