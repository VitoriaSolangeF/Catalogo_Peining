import React, { useEffect, useState } from "react";
import ReactWhatsapp from 'react-whatsapp';

// Componetes
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import ProductCard from "./components/ProductCard/ProductCard";
import { LoadProdutos } from './components/utils/loadProdutos'; 

// Imagens
import whatapp from './assets/whatsapp.png'

function Peining() {
  const [busca, setBusca] = useState('');
  const produtos = LoadProdutos();

  // Para deixa Dynamic
  const [number, setNumber] = useState('(11) 969234702');
  const [message, setMessage] = useState('Olá, mundo');

  useEffect(() => {
    const isPageReloaded = localStorage.getItem('isPageReloaded');
    if (!isPageReloaded) {
      localStorage.setItem('isPageReloaded', 'true');
    } else {
      localStorage.removeItem('isPageReloaded');
      document.querySelector('.content').classList.add('pulse-animation');
      document.querySelector('.card-container').classList.add('pulse-animation');
    }
  }, []);

  return (
    <div className='app'>
        <Header value={busca} onChange={(e) => setBusca(e.target.value)} />

        <Banner/>

        <div className="Carregadores">
          <h1>Produtos Peining</h1>
        </div>

        <div className="card-container">
          <ProductCard produtos={produtos} busca={busca}  />
          
          <div className="content"> 
            <ReactWhatsapp number="(11) 969234702" message="Olá mundo">
                <img src={whatapp} alt="" />
            </ReactWhatsapp>
          </div>
        </div>

      </div>
  );
}

export default Peining;






