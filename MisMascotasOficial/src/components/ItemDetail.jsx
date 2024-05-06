import React from 'react';
import './ItemDetail.css'; // Importa los estilos CSS

const ItemDetail = ({ producto }) => {
    if (!producto) {
        return <div className="item-detail">No hay detalles disponibles</div>;
    }
    return (
                <div className="item-detail">
                <div className="item-image-container">
                    <img className="item-image" src={producto.img} alt={producto.alt} />
                </div>
                <div className="item-info">
                    <h2 className="item-title">{producto.title}</h2>
                    <h3 className="item-description-title">DESCRIPCION</h3>
                    <p className="item-description">¡Nuestro {producto.producto} para mascotas es la elección ideal para brindarle a tu compañero peludo la máxima comodidad, calidad y confort!
                                                    Diseñado con materiales de primera calidad y una atención meticulosa a los detalles, esta cama ofrece tranquilidad para tu mascota. 
                                                    El acolchado suave y mullido proporciona un soporte óptimo para las articulaciones y la columna vertebral, promoviendo un descanso reparador y revitalizante.</p>
                    <br></br>
                    <h3 className="item-description-title">CARACTERÍSTICAS</h3>
                    <dl className="item-description">
                        <dt><p>MODELO: {producto.category}</p></dt>
                        <dt><p>TAMAÑO: {producto.tamaño}</p></dt>
                        <dt><p>MEDIDAS: {producto.size}</p></dt>
                        <dt><p>MATERIALES:</p>
                                <li>{producto.material1}</li>
                                <li>Base {producto.material2}</li>
                                <li>Relleno 100% ecofriendly</li>
                        </dt>
                    </dl>
                </div>
            </div>
    );
}

export default ItemDetail;
