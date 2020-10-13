import React, { Component } from 'react'

class GaleriaItem extends Component{
    render (){
        return(
            <div 
                className="galeria-item"
                onClick={() => {
                    this.props.event(this.props.image)
                }}
            >
                <img
                    src={this.props.image.imagen}
                />
                <div className="galeria-info">
                    <img
                        src={this.props.image.author.avatar}
                    />
                    <h3>{this.props.image.author.name}</h3>
                    <p>{this.props.image.views}</p>
                </div>
            </div>
        )
    }
}

export default GaleriaItem