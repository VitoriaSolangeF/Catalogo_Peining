import { useEffect, useState } from 'react';

import Produtos from '../../date/Produtos.json'

export const LoadProdutos = () => {

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        setProdutos(Produtos);
    }, [produtos])

   return produtos;
}