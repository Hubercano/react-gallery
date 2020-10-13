import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Modal extends Component {
    render () {

        if (Object.keys(this.props.imagenClick).length == 0){
            return ReactDOM.createPortal((
                <div>
                    <h1>fff</h1>
                </div>
            ), document.getElementById('modal'))
        }else{
            return ReactDOM.createPortal((
                <div>
                    <img
                        src={this.props.imagenClick.author.avatar}
                    />
                </div>
            ), document.getElementById('modal'))
        }

        
    }
}

export default Modal