import React from 'react';
import './PaginaTemplate.css';

const PaginaTemplate = ({ titulo, contenido }) => {
    return (
        <div className="pagina-container">
            <h1>{titulo}</h1>
            <div className="contenido">
                {contenido}
            </div>
        </div>
    );
}

export default PaginaTemplate;
