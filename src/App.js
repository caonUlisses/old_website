import React, { Component } from 'react'
import { fetchUser } from './actions/api'
import { connect } from 'react-redux'
import Frame from './components/Frame'
import './App.css'

class App extends Component {
  componentWillMount () {
    this.props.fetchUser()
  }

  componentWillReceiveProps (nextProps) {
    console.log(nextProps)
    console.log(this.props)
  }

  render () {
    if (!this.props.user.user) {
      return <h1>Wait a bit for Torvalds sake!</h1>
    }

    return (
      <div className='App'>
        <Frame user={this.props.user.user} />
        <h1>Welcome, I guess...</h1>
        <h2>I wasn't expecting you, but hey, have a seat!</h2>
        <p>Yeah, I know it's rude to ask a gest to work, but whatever, you managed to find your way here, at least take a look at <a href='https://github.com/caonUlisses'>this stuff </a>and see if you can help me</p>
        <p>Remember to follow and don't at me at <a href='https://twitter.com/UlissesCaon'>twitter</a>, also, don't add me to your spamy <a href='mailto:ulissesacon@gmail.com'>email</a> service</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps, { fetchUser })(App)
