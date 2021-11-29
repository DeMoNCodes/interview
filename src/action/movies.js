import movie from "../components/movie";
import { LOAD_MOVIES, NOT_SEARCH_MOVIES, SEARCH_MOVIES } from "../constants/actionTypes";
import page1 from "../data/API/CONTENTLISTINGPAGE-PAGE1.json";
import page2 from "../data/API/CONTENTLISTINGPAGE-PAGE2.json";
import page3 from "../data/API/CONTENTLISTINGPAGE-PAGE3.json";


export const getList = (pageno) => { 

    let page  = undefined;
        if(pageno==1){
            page = page1;
        }else if(pageno==2){
            page = page2;
        }else if(pageno==3) {
            page =  page3;
        }
    return (dispatch) => { 
      return dispatch(addPage(page));
    }
  }

  export const addPage = (movies) => {
    return {
      type: LOAD_MOVIES,
      movies
    }
  }
  
  let movieList1 = page1.page.contentitems ?page1.page.contentitems.content : [] ;
  let movielist2 = page2.page.contentitems ? page2.page.contentitems.content :[];
  let movielist3 = page3.page.contentitems ? page3.page.contentitems.content : [];
  let allMovie = [...movieList1,...movielist2,...movielist3];


  export const searchMovie =(searchString) => { 
    
    let movies = allMovie.filter(e => e.name.toLowerCase().includes(searchString.toLowerCase()) )
    let page = page1;
    page.page.contentitems.content = movies;
    return (dispatch) => { 
      if(searchString){
        dispatch(searching());
      }else{
        return dispatch(searchEnd());
      }
      return dispatch(addPage(page));
    }
  }
  
  export const searching = () => {
    return {
      type: SEARCH_MOVIES,
    
    }
  }
   
  export const searchEnd= () => {
    return {
      type: NOT_SEARCH_MOVIES
    }
  }
  