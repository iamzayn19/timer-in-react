import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Timer extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
      seconds: 0,
      minutes: 0,
      hours: 0
    }
  }

  clock()
  { 
    if (this.state.minutes == 60)
    {
      this.setState(state => ({
        hours: state.hours + 1,
        minutes: 0,
        seconds: 0
      }));
    }
    else {
      if (this.state.seconds == 60)
      {  
        this.setState(state => ({
          minutes: state.minutes + 1,
          seconds: 0
        }));
      }
    else {
      this.setState(state => ({
        seconds: state.seconds + 1,
      }));
      }
    }
    
    
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
    <div class="stopwatch">
       <span> {this.state.hours} : </span>
       <span> {this.state.minutes} : </span>
       <span> {this.state.seconds} </span> 
    </div>
  ); 
}
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Timer />);
