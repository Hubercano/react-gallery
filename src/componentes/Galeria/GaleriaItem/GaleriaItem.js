import React from 'react'

const GaleriaItem = (props) => (
    <div className="galeria-item">
        <img
            src={props.image.imagen}
        />
        <div className="galeria-info">
            <img
                src={props.image.author.avatar}
            />
            <h3>{props.image.author.name}</h3>
            <p>{props.image.views}</p>
        </div>
    </div>
)

export default GaleriaItem