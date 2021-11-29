
import Header from './Header';
import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';


import movie from './movie';

const mapStateToProps = state => {
  return {
  
  }
};

const mapDispatchToProps = dispatch => ({
 
});

class App extends React.Component {
  componentWillReceiveProps(nextProps) {
   
  }

  componentWillMount() {

  }

  render() {
      return (
        <div>
          <Header />
            <Switch>
              <Route path="/" component={movie}></Route>
            </Switch>
        </div>
      );

    
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
