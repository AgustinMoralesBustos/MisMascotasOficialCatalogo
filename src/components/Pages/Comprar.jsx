import React from 'react';
import PaginaTemplate from '../PaginaTemplate';

const Comprar = () => {
    return (
        <PaginaTemplate
            titulo="Como Comprar"
            contenido={
                <div>
                    <p>Aquí van las preguntas frecuentes...</p>
                    <p>Esta información puede ser diferente para cada página.</p>
                </div>
            }
        />
    );
}

export default Comprar;
