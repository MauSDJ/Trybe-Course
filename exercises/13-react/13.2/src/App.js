import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
  }
 
  makeFetch() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(element => this.setState({ data: element }));
  } 

  componentDidMount() {
    this.makeFetch()
  }

  render() {
    return (
    <div>
      <img src={this.state.data.message} alt='dog' />
    </div>  
    )
  }
}

export default App;
