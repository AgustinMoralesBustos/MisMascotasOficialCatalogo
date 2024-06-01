import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        const fetchProducto = async () => {
            const db = getFirestore();
            const productoRef = doc(db, "productos", id);

            try {
                const docSnap = await getDoc(productoRef);
                if (docSnap.exists()) {
                    setProducto(docSnap.data());
                } else {
                    setError(new Error('Producto no encontrado'));
                }
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducto();
    }, [id]);

    if (loading) {
        return <div>Cargando producto...</div>;
    }

    if (error) {
        return <div>Error al cargar producto: {error.message}</div>;
    }

    return (
        <ItemDetail producto={producto} />
    );
};

export default ItemDetailContainer;
