import React from 'react'
import SearchBar from './components/SearchImage/SearchBar/SearchBar'
import Images from './components/SearchImage/Images/Images'
import { searchPhotos } from './components/SearchImage/AppApi';

class App extends React.Component {

  state = { images: [] }

  onSearchSubmit = async text => {
    const response = await searchPhotos(text)
    this.setState({ images: response.data.hits })
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <Images images={this.state.images} />
      </div>
    )
  }
}

export default App