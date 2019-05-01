import React, { Component } from 'react';
import axios from 'axios';

class Fib extends Component {
  state = {
    seenIndexes: [],
    values: [],
    index: ''
  };

  componentDidMount() {
    this.fetchValues();
    this.fetchIndexes();
  }

  fetchValues = async () => {
    const values = await axios.get('/api/values/current');
    this.setState({
      values: values && values.data ? values.data : []
    });
  }

  fetchIndexes = async () => {
    const seenIndexes = await axios.get('/api/values/all');
    this.setState({
      seenIndexes: seenIndexes && seenIndexes.data ? seenIndexes.data : []
    });
  }

  renderIndexes = () => {
    return <p>{this.state.seenIndexes.map(({ number }) => number).join(', ')}</p>;
  }

  renderValues = () => {
    return <div>
      {this.state.values.map((val) => <p key={val.index}>{`For index ${val.index}, I've calculated ${val.value}`}</p>)}
    </div>;
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/values', { index: this.state.index });
    this.setState({ insex: '' });
     this.fetchValues();
     this.fetchIndexes();
  }

  render() {
    return <div>
      <form onSubmit={this.handleSubmit}>
        <label>Enter your index: </label>
        <input type="number" value={this.state.index} onChange={e => this.setState({ index: e.target.value })}/>
        <button type="submit" disabled={!this.state.index}>Submit</button>
      </form>

      <h3>Indexes I've seen:</h3>
      {this.renderIndexes()}

      <h3>Calculated values:</h3>
      {this.renderValues()}
    </div>
  }
};

export default Fib;