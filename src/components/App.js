import React, { Component } from 'react';
import BookForm from '../containers/BookForm';

console.log('in App');

class App extends Component {
  render () {
    return (
      <div className="App">
        <BookForm />
      </div>
    );
  }
}

export default App;
