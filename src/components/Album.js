import React, { Component } from 'react';
import albumData from './../data/albums';

class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });

    this.state = {
      album: album,
      currentSong: 0,
      isPlaying: false,
    };
    this.audioElement = document.createElement('audio');
    this.audioElement.src = album.songs[0].audioSrc;
    this.buttons = [];
    for (var i = 0; i < album.songs.length; ++i) {
      this.buttons[i] = React.createRef();
    }
  }

  play(){
    this.audioElement.play();
    this.setState({ isPlaying: true });
  }

  pause(){
    this.audioElement.pause();
    this.setState({ isPlaying: false });
  }

  setSong(index){
    this.audioElement.src = this.state.album.songs[index].audioSrc;
    this.setState({ currentSong: index });
  }

  handleSongClick(index){
    const button = this.buttonForIndex(index)
    const isSameSong = this.state.currentSong === index;
    if (this.state.isPlaying && isSameSong){
      this.pause();
      button.className="ion-md-play"
    } else {
      if (!isSameSong){
        const oldButton = this.buttonForIndex(this.state.currentSong)
        oldButton.className = "song-number"
        oldButton.innerHTML = this.state.currentSong+1
        this.setSong(index);
      }
      button.innerHTML = ""
      button.className = "ion-md-pause"
      this.play();
    }
  }

  buttonForIndex(index) {
    return this.buttons[index].current
  }

  isPlayingSong(index){
    return this.state.isPlaying && (this.state.currentSong === index)
  }

  mouseEnter(index) {
    const button = this.buttonForIndex(index)
    button.innerHTML = ""
    if (this.isPlayingSong(index))
      button.className = "ion-md-pause"
    else
      button.className = "ion-md-play"
  }

  mouseLeave(index) {
    const button = this.buttonForIndex(index)
    if (!this.isPlayingSong(index)) {
      button.className = "song-number"
      button.innerHTML = index + 1
    }
  }

  render() {
    return(
      <section className="album">
         <section id="album-info">
           <img id="album-cover-art" src={this.state.album.albumCover} />
           <div className="album-details">
             <h1 id="album-title">{this.state.album.title}</h1>
             <h2 className="artist">{this.state.album.artist}</h2>
             <div id="release-info">{this.state.album.releaseInfo}</div>
           </div>
         </section>
         <table id="song-list">
           <colgroup>
             <col id="song-number-column" />
             <col id="song-title-column" />
             <col id="song-duration-column" />
           </colgroup>
           <tbody>
           {
             this.state.album.songs.map( (song, index) =>
             <tr className="song" key={index}
             onMouseEnter={(e) => this.mouseEnter(index)}
             onMouseLeave={(e) => this.mouseLeave(index)}
             onClick={(e) => this.handleSongClick(index)}
             >
               <td className="song-actions">
               <button
                 className="song-number" ref={this.buttons[index]}
               >
                  {index+1}
               </button>
               </td>
               <td className="song-title">{song.title}</td>
               <td className="song-duration">{song.duration}</td>
              </tr>
             )
           }
           </tbody>
         </table>
       </section>
    );
  }
}

export default Album;
