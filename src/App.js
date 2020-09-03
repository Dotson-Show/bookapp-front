import React, { Component } from 'react';
import NavBar from './component/navbar'
import Booklist from './component/booklist'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Footer from './component/Footer';
import Book from './component/book';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      book: '',
      books: [],
      search: '',
    }
  }
  
  componentDidMount() {
    fetch("http://127.0.0.1/bookstore/backendApp/api/book/read.php")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            books: result.data,
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
        <Router>
          <NavBar />
          
          <Switch>
            <Route exact path="/">
              <Booklist states={this.state}/>
            </Route>
            <Route path="/book/:id">
              <Book />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>                
    );
  }
}

export default App;