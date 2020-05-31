import React from 'react';

import './css/global.css'

export default function App() {
    return (
        <div className="container-search">
            <div className="card-search">
                <h1>Pesquise uma empresa</h1>
                <form>
                    <input type="text" placeholder="Pesquise uma empresa" />
                    <button>Pesquisar</button>
                </form>

                <div className="card-sugestion">
                    <h4>Nome da empresa</h4>
                </div>
            </div>

            
        </div>
        
    )
}