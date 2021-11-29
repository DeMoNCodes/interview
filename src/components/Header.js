import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Icon from '@mui/material/Icon';
import { connect } from 'react-redux';
import SearchBar from 'material-ui-search-bar';
import { searchEnd, searchMovie } from '../action/movies';
import SearchIcon from "@material-ui/icons/Search";
import { Button } from '@mui/material';

const mapStateToProps = state => {
  return {
    ...state.movies
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchMovie : (searchString)=>dispatch(searchMovie(searchString)),
    endSearch : ()=>dispatch(searchEnd())
  }
}


class Header extends React.Component {
  constructor(props){
    super(props);
    this.state={
      search:false
    }
    this.enableSearch = this.enableSearch.bind(this)
  }

  searchMovie(e){
    this.props.searchMovie(e);
    
    if(e==""){
      this.props.endSearch();
    }
    setTimeout(() => {
      console.log(this.props);
    }, 300);
  }
  enableSearch(){
    this.setState({...this.state,search:true});
  }
  render() {
    let head = this.props.header ? this.props.header:"";
    return (
      <nav className="navbar navbar-light " style={{backgroundColor:"black",color:"white",position:"fixed",width:"100%"}} >
        <div style={{width:"100%",display:"grid",gridTemplateColumns:"auto auto auto auto"}}> 
          <i>
          <ArrowBackIcon></ArrowBackIcon> </i>   
          <h4 style={{whiteSpace:"nowrap",paddingLeft:"20px"}}>{head}</h4>
          {!this.state.search ? <Button onClick={()=>this.enableSearch()}><SearchIcon /></Button> : ""}
          <div  style={{justifyContent:"center" }}> {this.state.search ?  <SearchBar style={{height:"35px"}} onChange={(e)=>this.searchMovie(e)}></SearchBar>  : ""}</div>
      
        </div>
      </nav>
    );
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Header);
 
