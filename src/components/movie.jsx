
import Header from './Header';
import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { store } from '../store';
import { push } from 'react-router-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Card, CardActions, CardMedia } from '@mui/material';
import poster1 from "../data/Slices/poster1.jpg";
import poster2 from "../data/Slices/poster2.jpg";
import poster3 from "../data/Slices/poster3.jpg";
import poster4 from "../data/Slices/poster4.jpg";
import poster5 from "../data/Slices/poster5.jpg";
import poster6 from "../data/Slices/poster6.jpg";
import poster7 from "../data/Slices/poster7.jpg";
import poster8 from "../data/Slices/poster8.jpg";
import poster9 from "../data/Slices/poster9.jpg";
import { getList } from '../action/movies';




const mapStateToProps = state => {
  return {
    ...state.movies
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    getMovie:(pageno) => dispatch(getList(pageno))        
  }
}
class Movies extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        items:[],
        hasmore:true,
        count:1
      }

      this.loadFunc = this.loadFunc.bind(this);
    }

  componentWillMount() {
    this.loadFunc();
  
  }
  loadFunc(){
    if(!this.props.search){
        this.props.getMovie(this.state.count);
        let items  =[];
        let images = {
          "poster1.jpg":poster1,
          "poster2.jpg":poster2,
          "poster3.jpg":poster3,
          "poster4.jpg":poster4,
          "poster5.jpg":poster5,
          "poster6.jpg":poster6,
          "poster7.jpg":poster7,
          "poster8.jpg":poster8,
          "poster9.jpg":poster9
        }
        setTimeout(() => {
          let movie  = this.props.movie;
        if(movie){
        
          for(let i=0; i< movie.page.contentitems.content.length;i++){
              items.push(<div><Card style={{backgroundColor:"black",color:"white"}}>
                <CardMedia
                    component="img"
                    width="30%"
                    image={images[movie.page.contentitems.content[i]["poster-image"]]}
                    alt="green iguana" 
                />
                  <CardActions>{movie.page.contentitems.content[i].name}</CardActions>
              </Card></div>)
            
          }
          items = [...this.state.items,...items];
          this.setState({...this.state,items,hasmore:true,count:this.state.count+1});
      }
      }, 300);
    }
  }

  render() {
    if(this.props.search){
      console.log(this.props);
      let items  =[];
      let images = {
        "poster1.jpg":poster1,
        "poster2.jpg":poster2,
        "poster3.jpg":poster3,
        "poster4.jpg":poster4,
        "poster5.jpg":poster5,
        "poster6.jpg":poster6,
        "poster7.jpg":poster7,
        "poster8.jpg":poster8,
        "poster9.jpg":poster9
      }
      setTimeout(() => {
        let movie  = this.props.movie;
      if(movie){
        for(let i=0; i< movie.page.contentitems.content.length;i++){
            items.push(<div><Card style={{backgroundColor:"black",color:"white"}}>
              <CardMedia
                  component="img"
                  width="30%"
                  image={images[movie.page.contentitems.content[i]["poster-image"]]}
                  alt="green iguana" 
              />
                <CardActions>{movie.page.contentitems.content[i].name}</CardActions>
            </Card></div>)
          
        }
        items = items;
        this.setState({...this.state,items,hasmore:true,count:1});
    }
    }, 300);
  }



      return (
        <div   >
          <div style={{overflow:"auto",paddingTop:"6%"}}>
      <InfiniteScroll
        dataLength={this.state.items.length}
        style={{paddingLeft:"30px",display:"grid" ,paddingTop:"20px",gridColumn:"2",gridTemplateColumns:"auto auto auto",columnGap:"30px",justifyItems:"center" ,rowGap:"36px",paddingRight:"30px"}}
        pageStart={0}
        next={()=>this.loadFunc()}
        hasMore={true}
       >
         {/* <div > */}
         
          {this.state.items}
        {/* </div> */}
    </InfiniteScroll>
</div>
         
        </div>
      );

    
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Movies);
