import React, { Component } from "react";
import Youtube from "./Youtube";
import { songs } from "../../routes";
import { Link } from "react-router-dom";

class Player extends Component {
  render() {
    let song = songs.find(song => {
      return song.id === parseInt(this.props.match.params.songid, 10);
    });
    if (song != null) {
      this.curLink = song.youtube_link;
    } else {
      this.curLink = "";
    }

    return (
      <div className="well">
        {this.curLink !== "" ? (
          <div>
            <Youtube
              video={this.curLink}
              width="320"
              height="240"
              autoplay="1"
              rel="1"
              modest="1"
            />
            <Link to="/songs">return Song list</Link>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Player;
