import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Modal extends Component {
    render () {

        if (Object.keys(this.props.imagenClick).length == 0){
            return (
                null
            )
        }
        
        return ReactDOM.createPortal((
            <div>
                <img
                    src={this.props.imagenClick.imagen}
                />
            </div>
        ), document.getElementById('modal'))

        
    }
}

export default Modal