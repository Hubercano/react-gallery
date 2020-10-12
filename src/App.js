import React, { Component } from 'react';
import './App.css';
import {Galeria, Header, Footer} from './componentes'

class App extends Component {
  constructor(){
    super()
    this.refHeader = React.createRef()
    this.state = {
      altoHeader: 0,
    }
  }

  componentDidMount () {
    this.setState({
      altoHeader: this.refHeader.current.clientHeight
    })
  }

  render() {
  return (
      <div className="global">
        <Header refHeader={this.refHeader}/>
        <Galeria altoHeader={this.state.altoHeader}/>
        <Footer/>
      </div>
    )
  }
}

export default App;
  