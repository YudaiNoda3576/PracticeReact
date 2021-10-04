import  React, {Component} from "react";

function App() {
  return (<Counter></Counter>);
}

class Counter extends Component{
  constructor(props){
    super(props)
    this.state = {count: 0}
    console.log(this.state)
    
  }

  
  handelPlusButton = () => {
    const currentCount = this.state.count;
    this.setState({count: currentCount + 1}) 
  }

  handelMinusButton = () => {
    const currentCount = this.state.count;
    this.setState({count: currentCount - 1}) 
  }

  render(){
    console.log(this.state);
    return (
      <React.Fragment>
        <h2>Counter</h2>
        <div>count: {this.state.count}</div>
        <button onClick={this.handelPlusButton}>+1</button>
        <button onClick={this.handelMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}


export default App;
