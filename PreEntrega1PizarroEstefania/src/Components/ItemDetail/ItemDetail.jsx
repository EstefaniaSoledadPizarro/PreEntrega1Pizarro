import React, {useState} from 'react'

const ItemDetail = ({item}) => {
    return (
        <div className='row'>
            <div className='col-md-4 iifset-md-4'>
                <img src={item.imagen} className='img-fluid' alt={item.nombre} />
                <h3>{item.nombre}</h3>
                <p>{item.descripcion}</p>
                <p> $ {item.precio} </p>
                <p>cantidad: {item.stock}</p>
            </div>
        </div>
    )
}

export default ItemDetail