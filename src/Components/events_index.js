import React, {Component} from "react";
import { connect } from "react-redux";
import _ from "lodash";

import {readEvents} from "../Actions";

class EventsIndex extends Component{
  componentDidMount(){
    this.props.readEvents()
  }

  renderEvents(){
    return _.map(this.props.events, event => {
      <div>
        <div>{event.id}</div>
        <div>{event.title}</div>
        <div>{event.body}</div>
      </div>
    })
  }

  render(){
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        
        <tbody>
          {this.renderEvents()}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = state => ({
  events: state.events
})

// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch( increment() ),
//   decrement: () => dispatch( decrement() )
// })
// ↓こういう書き方もできる
const mapDispatchToProps = ({readEvents})

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex) ;