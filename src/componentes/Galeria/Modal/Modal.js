import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

class Modal extends Component {
    render () {

        if (!this.props.visible){
            return (
                null
            )
        }
        
        return ReactDOM.createPortal((
            <div>
                <div 
                    className="fondo-modal" 
                    onClick={this.props.cerrar}
                ></div>
                <div className="cont-modal">
                    <div 
                        className="cerrar-modal"
                        onClick={this.props.cerrar}
                    >x</div>
                    <img
                        src={this.props.imagenClick.imagen}
                    />
                    <div className="autor-modal">
                        <img
                            src={this.props.imagenClick.author.avatar}
                        />
                        <h4>{this.props.imagenClick.author.name}</h4>
                    </div>
                </div>
            </div>
        ), document.getElementById('modal'))

        
    }
}

export default Modal