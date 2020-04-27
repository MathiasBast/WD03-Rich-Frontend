import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getData } from '../actions'

class ShowData extends React.Component {
  componentWillMount () {
    this.props.dispatch(getData())
  }
  render () {
    return (
      <div>
        {console.log(this.props.getData)}
        {this.props.getData.map(item =>{
          return <div key={item.id}>
            <p>Hey {item.name}</p>
            <p>you like {item.color}</p>
            <p>You also like {item.animal}</p>
            <br />
            <br />
            </div>
        })}
        <h1>Hello.pt2</h1>
        <Link to='/' >Home</Link>
      </div>
    )
  }
} 

const mapStateToProps = state => {
  console.log(state)
  return state
}

export default connect(mapStateToProps)(ShowData)