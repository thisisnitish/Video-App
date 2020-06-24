import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY = 'AIzaSyCS6PI0d-fhDaIKpT8rAI2sxmZjlCoZWWU';


class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    onTermSubmit = async term => {
       const response = await youtube.get("/search", {
          params: {
            q: term,
            type: 'video',
            part: "snippet",
            maxResults: 5,
            key: KEY
          }
        });
        this.setState({ videos: response.data.items });
    };

    //when user will click on the video then this function will execute
    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
        );
    }
}

export default App;