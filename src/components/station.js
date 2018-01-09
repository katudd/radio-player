import React from "react"

class Station extends React.Component {
  render() {
    return (

      <div className="station-holder" style={{ backgroundColor: `#${this.props.color}` }} >
        <img src={this.props.image} alt="Logo" />
        <div className="content">
          <h2>{this.props.name}</h2>
          <audio controls>
            <source src={this.props.liveaudio} />
            <track kind="captions" />
          </audio>
        </div>

      </div>

    )
  }
}

export default Station
