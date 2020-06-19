import React from 'react'
import SearchBar from '../Components/Search-bar'
import VideoList from './Video-list'
import axios from 'axios'
import VideoDetail from '../Components/Video-details'

const API_END_POINT = "https://api.themoviedb.org/3/"
const POPULAR_MOVIES_URL ="discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images"
const API_KEY = "api_key=423429819c6e154b40b2b60c526f0b0b";

class App extends React.Component{
    constructor(props){
        super(props);
        //this.state={}
        this.state={movieList: {}, currentMovie:{}}
    }
    componentWillMount(){
        this.initMovies();
    }

    initMovies(){
        axios.get('${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}').then(function(response){
            this.setState({movies:response.data.results.slice(1,6),
            currentMovie:response.data.result[0]});
            
        }.bind(this));
    }


    render(){
        const renderVideoList = () => {
            if(this.state.movieList.length >=5){
                return <VideoList movieList={this.state.movieList}/>
            }
        }
        return(
            <div>
                <SearchBar/>
                {renderVideoList()} 
                <VideoDetail title={this.state.currentMovie.title}
                description={this.state.currentMovie.overview}/>
            </div>
        )
    }
}

export default App;