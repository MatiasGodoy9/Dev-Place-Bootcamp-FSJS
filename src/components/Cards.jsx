import React from 'react'
import Card from './Card'
import './Cards.css'
import img1 from '../images/phantom.png'
import img2 from '../images/nike.png'
import img3 from '../images/correr.png'


function Cards() {
    return (
        <div className='container'>
            <Card
                title='Botines Nike Phantom'
                imgUrl={img1}
                body='Descripcion'
                precio='$16.000'
            />
            <Card
                title='Nike AirMax'
                imgUrl={img2}
                body='Descripcion.'
                precio='$18.000'
            />
            <Card
                title='Nike Running'
                imgUrl={img3}
                body='Descripcion'
                precio='$17.500'
            />
        </div>
    )
}

export default Cards