import React, { Component } from 'react';
import BookForm from '../containers/BookForm';

//can we convert this into a stateless component, that is a container??
//this will house both the BookForm and the DisplayOrders component. It will be a container that receives state from the store to be passed to Display Orders. Although could Display Order just be a container, and receive store updates directly??

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
