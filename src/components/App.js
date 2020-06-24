import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

const KEY = 'AIzaSyCS6PI0d-fhDaIKpT8rAI2sxmZjlCoZWWU';


class App extends React.Component {
    state = { videos: [] };

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


    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                I have {this.state.videos.length} videos.
            </div>
        );
    }
}

export default App;