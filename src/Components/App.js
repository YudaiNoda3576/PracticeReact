import React, {Component} from "react";
import { connect } from "react-redux";

import {increment, decrement} from "..//Actions";

class App extends Component{
  render(){
    const props = this.props;
    return (
      <React.Fragment>
        <h2>Counter</h2>
        <div>value: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  value: state.count.value
})

// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch( increment() ),
//   decrement: () => dispatch( decrement() )
// })
// ↓こういう書き方もできる
const mapDispatchToProps = ({increment, decrement})

export default connect(mapStateToProps, mapDispatchToProps)(App) ;