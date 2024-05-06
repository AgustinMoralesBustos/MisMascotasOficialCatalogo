import React from 'react';
import PaginaTemplate from '../PaginaTemplate';

const Entrega = () => {
    return (
        <PaginaTemplate
            titulo="Políticas de Entrega"
            contenido={
                <div>
                    <p>Aquí va la información sobre Nosotros...</p>
                    <p>Esta información puede ser diferente para cada página.</p>
                </div>
            }
        />
    );
}

export default Entrega;
