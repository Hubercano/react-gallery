import React, { Component } from 'react'
import GaleriaItem from './GaleriaItem/GaleriaItem'
import Modal from './Modal/Modal'
import './Galeria.css'

const images = [
    {
        author: {
            name: 'Christopher Gower',
            avatar: 'https://images.unsplash.com/profile-1526936950214-7fa0cd79390f?auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
        },
        imagen: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80',
        views: 153,
        id: 1
    },
    {
        author: {
            name: 'Domenico Loia',
            avatar: 'https://images.unsplash.com/profile-1551994941432-afc3dca6deb3?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
        },
        imagen: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        views: 517,
        id: 2
    },
    {
        author: {
            name: 'Ilya Pavlov',
            avatar: 'https://images.unsplash.com/profile-1592711717005-e6dc94458f51image?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
        },
        imagen: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        views: 86,
        id: 3
    },
    {
        author: {
            name: 'Marvin Meyer',
            avatar: 'https://images.unsplash.com/profile-1512990007569-007d42cc3a64?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
        },
        imagen: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        views: 560,
        id: 4
    },
    {
        author: {
            name: 'Sai Kiran Anagani',
            avatar: 'https://images.unsplash.com/profile-1592292242948-9c3d17040cc1image?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
        },
        imagen: 'https://images.unsplash.com/photo-1454165205744-3b78555e5572?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        views: 12,
        id: 5
    },
    {
        author: {
            name: 'Luca Bravo',
            avatar: 'https://images.unsplash.com/profile-1585521746678-1988925483d3image?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
        },
        imagen: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
        views: 53,
        id: 6
    },
    {
        author: {
            name: 'Sai Kiran Anagani',
            avatar: 'https://images.unsplash.com/profile-1592292242948-9c3d17040cc1image?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
        },
        imagen: 'https://images.unsplash.com/photo-1454165205744-3b78555e5572?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        views: 12,
        id: 7
    },
    {
        author: {
            name: 'Ilya Pavlov',
            avatar: 'https://images.unsplash.com/profile-1592711717005-e6dc94458f51image?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
        },
        imagen: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        views: 86,
        id: 8
    },
    {
        author: {
            name: 'Christopher Gower',
            avatar: 'https://images.unsplash.com/profile-1526936950214-7fa0cd79390f?auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
        },
        imagen: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80',
        views: 153,
        id: 9
    },
]

class Galeria extends Component {
    state = {
        imagenClick: {}
    }

    select = (imagenClick) => {
        this.setState({
            imagenClick
        })
    }

    render() {
        return(
            <main style={{
                paddingTop: this.props.altoHeader
            }}>
                <div className="container cont-galeria">
                    {images.map(image => (
                        <GaleriaItem 
                            image={image}
                            key={image.id}
                            imagenClick={this.state.imagenClick}
                            event={this.select}
                        />
                    ))}
                </div>
                <Modal imagenClick={this.state.imagenClick}/>
            </main>
        )
    }
}

export default Galeria