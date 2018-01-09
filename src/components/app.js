import React from "react"
import Station from "./station"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      radioChannel: []
    }
  }

  componentDidMount() {
    fetch("https://api.sr.se/api/v2/channels?format=json&size=100").then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({
        radioChannel: json.channels
      })
    })
  }

  render() {
    return (
      <div className="app">
        <h1>Lyssna direkt på SR:s kanaler</h1>
        {this.state.radioChannel.map((item) => {
          return <Station
            key={item.id}
            name={item.name}
            image={item.image}
            color={item.color}
            liveaudio={item.liveaudio.url} />
        })}
      </div>
    )
  }
}

export default App
