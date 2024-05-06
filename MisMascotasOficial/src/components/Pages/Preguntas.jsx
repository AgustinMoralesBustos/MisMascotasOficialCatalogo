import React from 'react';
import PaginaTemplate from '../PaginaTemplate';

const PreguntasFrecuentes = () => {
    return (
        <PaginaTemplate
            titulo="Preguntas Frecuentes"
            contenido={
                <div className='container'>
                    <div className='section'>
                    <h3>1.   ¿Qué hace que los productos de Mis Mascotas sean únicos?</h3>
                    <p>Nuestros productos se destacan por su calidad superior y su compromiso con la sostenibilidad ambiental. Utilizamos materiales reciclados y sostenibles en la fabricación de nuestros colchones y bolsos, garantizando así el máximo confort para las mascotas y un menor impacto en el medio ambiente.</p>
                    </div>
                    <div className='section'>
                    <h3>2.   ¿De qué están rellenos nuestros productos? </h3>
                    <p>Nuestros productos están rellenos con materiales cuidadosamente seleccionados para garantizar la comodidad y el bienestar de las mascotas. Utilizamos una combinación de material recuperado de la industria automotriz, fieltro y telgopor. Esta elección no solo proporciona un soporte óptimo, sino que también contribuye a la sostenibilidad al dar nueva vida a materiales reciclados.</p>
                    </div>
                    <div className='section'>
                    <h3>3.   ¿Hacen envíos a todo el país? </h3>
                    <p>Si, hacemos envíos a todo el país por distintos transportes (Vía Cargo, Credifin, Chilecito, Bicentenario, etc.) También trabajamos con comisionistas y si estas en Córdoba Capital podemos enviártelo personalmente a tu local. </p>
                    </div>
                    <div className='section'>
                    <h3>4.   ¿Cómo comprar? </h3>
                    <p>Una vez tengas visto el catálogo, comunicate con nosotros mediante nuestro número de whatsapp (3513256330)</p>
                    </div>
                    <div className='section'>
                    <h3>5.   ¿Se puede ir a comprar personalmente? </h3>
                    <p>Podemos recibirte en nuestro deposito para que elijas los modelos y motivos que mas te gusten. Para coordinar comunícate con nosotros.</p>
                    </div>
                    <div className='section'>
                    <h3>6.   ¿Realizan ventas por menor? </h3>
                    <p>Principalmente realizamos ventas por mayor, pero no tenemos ningun tipo de inconveniente en hacer ventas particulares.</p>
                    </div>
                    <div className='section'>
                    <h3>7.   ¿Tienen stock permanente de los productos? </h3>
                    <p>Nuestro stock cambia constantemente al tener una producción de alta rotación, por ese motivo te recomendamos visitarnos en nuestro deposito para tener una experiencia de compra personalizada</p>
                    </div>
                    <div className='section'>
                    <h3>8.	¿Formas de pago?</h3>
                    <p>Efectivo, transferencia bancaria y depósito </p>
                    </div>
                    <div className='section'>
                    <h3>9.	¿Cómo se realizan los envíos?</h3>
                    <p>En el caso de que seas de Córdoba Capital, nosotros mismos te podemos hacer el envió. En cambio, si sos del interior u otras provincias, trabajamos hace más de 15 años con los mismos transportes (Vía Cargo, Credifin, entre otros). En el caso de que vos tengas un transporte de confianza  y desees realizarlo por ese, no tenemos ningún tipo de inconveniente en mandarlo por el mismo.</p>
                    </div>
                    <div className='section'>
                    <h3>10.	¿Cuánto tarda en llegar mi pedido? </h3>
                    <p>Tenemos una demora aproximada de 15 días como mínimo.</p>
                    </div>
                    <div className='section'>
                    <h3>11.	¿Se pueden realizar cambios? </h3>
                    <p>No se pueden realizar cambios, excepto que el producto haya salido fallado desde nuestro depósito. En el caso de roturas, manchas u otros inconvenientes sucedidos en el envió, se hace cargo el transporte por el que se mandó.</p>
                    </div>
                </div>
            }
        />
    );
}

export default PreguntasFrecuentes;
