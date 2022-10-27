import './index.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state =  { advice: '', id: '' };

  fetchAdvice = () => {
    axios.get("	https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        const { id } = response.data.slip;
        
        this.setState({ advice });
        this.setState({ id });

      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {

    const { state } = this.state; 

    return (
      <>
      <div className='wrapper'>
      <h1>Random Advice generator</h1>
      <div className='container'>
         <p>ADVICE #{state.id}</p>
         <p>"{state.advice}"</p>
         <button className='material-symbols-outlined' onClick={this.fetchAdvice}>
            casino
          </button>
      <p>Press the dice for a new Advice</p>
      </div>
      </div>
      </>
    );

  }
}

export default App;
