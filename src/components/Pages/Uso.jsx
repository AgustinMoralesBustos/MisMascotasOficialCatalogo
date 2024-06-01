import React from 'react';
import PaginaTemplate from '../PaginaTemplate';

const Uso = () => {
    return (
        <PaginaTemplate
            titulo="Términos de uso"
            contenido={
                <div>
                    <p>Aquí va la información sobre Nosotros...</p>
                    <p>Esta información puede ser diferente para cada página.</p>
                </div>
            }
        />
    );
}

export default Uso;
