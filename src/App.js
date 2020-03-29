import React from 'react';
import { connect } from 'react-redux'
import PlanetList from './PlanetList'
import './App.css';
import { getPlanets } from './actions'

const mapStateToProps = (state) => {
  return {
    planets: state.planets,
    isPending: state.isPending,
    error: state.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetPlanets: () => dispatch(getPlanets())
  }
}

class App extends React.Component {
  render() {
    const {onGetPlanets, planets, isPending} = this.props
    return (
        <div className="app">
          <header>Star Wars Webapp</header>
          <button type="button" onClick={onGetPlanets}>Planeten erzeugen</button>
          {isPending ? 
            <p>Loading ...</p> :
            <PlanetList planets={planets} />
          }
        </div>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);