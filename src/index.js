import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Timer extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
      seconds: 0
    }
  }

  clock()
  {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount()
  {
    this.interval = setInterval(() => this.clock(), 1000);
  }

  componentWillUnmount()
  {
    clearInterval(this.interval);
  }

render (){
  return(
    <div>
      Seconds: {this.state.seconds}
    </div>
  ); 
}
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Timer />);
