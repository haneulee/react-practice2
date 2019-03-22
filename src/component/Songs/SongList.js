import React, { Component } from "react";
import Player from "./Player";
import { Route, Link } from "react-router-dom";
import { songs } from "../../routes";

class SongList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let list = songs.map(song => {
      let listClass = "list-group-item";
      let playBtnStyle = { color: "white" };

      if (
        this.props.match.path + "/" + song.id ===
        this.props.location.pathname
      ) {
        listClass += " active";
        playBtnStyle.color = "black";
      }

      return (
        <li className={listClass} key={song.id}>
          {song.title}(original musician : {song.musician})
          <span className="badge">
            <Link to={`/songs/${song.id}`}>
              <span
                className="glyphicon glyphicon-play-circle"
                style={playBtnStyle}
              />
            </Link>
          </span>
        </li>
      );
    });

    return (
      <div>
        <h2>Song List</h2>
        <ul className="list-group">{list}</ul>
        <Route
          path={`${this.props.match.url}/:songid`}
          render={props2 => <Player {...props2} songs={this.props.songs} />}
        />
      </div>
    );
  }
}

export default SongList;
