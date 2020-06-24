import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY = 'AIzaSyCS6PI0d-fhDaIKpT8rAI2sxmZjlCoZWWU';


class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onTermSubmit('alux.com');
    }

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
        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0] 
        });
    };

    //when user will click on the video then this function will execute
    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList 
                                onVideoSelect={this.onVideoSelect} 
                                videos={this.state.videos} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;