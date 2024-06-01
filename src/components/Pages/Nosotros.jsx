import React from 'react';
import PaginaTemplate from '../PaginaTemplate';
import './pages.css'

const Nosotros = () => {
    return (
        <PaginaTemplate
            titulo="Nosotros"
            contenido={
                <div className='container'>
                    <div className='section'>
                        <h2>¿Quienes sómos?</h2>
                        <p>Mis Mascotas nació en 2007 en la provincia de Córdoba Capital de la pasión y el espíritu emprendedor de Adrián y Gabriela, un matrimonio que se propuso a transformar su amor por los animales en un negocio con propósito. Después de enfrentar numerosos desafíos, decidieron comenzar desde cero, fabricando colchones y bolsos para perros y gatos en su propio hogar.</p>
                    </div>
                    <div className='section'>
                        <h2>Misión</h2>
                        <p>En Mis Mascotas, nuestra misión es simple pero poderosa: garantizar el confort y el bienestar de las mascotas en su momento de descanso, al tiempo que promovemos la sostenibilidad ambiental. Nos esforzamos por ofrecer productos de alta calidad que no solo satisfagan las necesidades de nuestros clientes peludos, sino que también minimicen nuestro impacto en el medio ambiente.</p>
                    </div>
                    <div className='section'>
                        <h2>Visión</h2>
                        <p>Con 17 años de experiencia y dedicación, nuestra visión es expandir nuestra presencia por todo el territorio argentino y países vecinos, llevando un pedacito de nuestro hermoso proyecto a cada hogar. Buscamos convertirnos en la opción preferida de las familias que desean brindarles a sus mascotas el máximo confort mientras contribuyen al cuidado del planeta.</p>
                    </div>
                    <div className='section'>
                    <h2>Valores</h2>
                        <ul className='list'>
                            <p>En Mis Mascotas, nuestros valores son la piedra angular de todo lo que hacemos:</p>
                            <li><strong>Pasión por los animales:</strong> Amamos a nuestros amigos peludos y nos esforzamos por proporcionarles productos que mejoren su calidad de vida.</li>
                            <li><strong>Innovación:</strong> Nos comprometemos a buscar constantemente nuevas formas de mejorar y desarrollar productos que sean tanto efectivos como eco-amigables.</li>
                            <li><strong>Responsabilidad ambiental:</strong> Nos preocupamos por el futuro de nuestro planeta, por lo que nos esforzamos por utilizar materiales reciclados y sostenibles en todos nuestros productos.</li>
                            <li><strong>Compromiso con la calidad:</strong> Nos comprometemos a ofrecer productos de la más alta calidad, diseñados para durar y satisfacer las necesidades de nuestros clientes y sus mascotas.</li>
                        </ul>
                    </div>
                </div>
            }
        />
    );
}

export default Nosotros;
