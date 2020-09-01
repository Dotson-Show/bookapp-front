import React, { Component } from 'react';
import NavBar from './component/navbar'
import Booklist from './component/booklist'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      book: '',
      books: [],
      search: ''
    }
  }
  
  componentDidMount() {
    fetch("http://127.0.0.1/bookstore/backendApp/api/book/read.php")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            books: result.data
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
    
  render() {
    return ( 
      <div>
        <NavBar />
        <Booklist states={this.state}/>
      </div>                
    );
  }
}

export default App;