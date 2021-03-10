import React from 'react';
import {HashLink as Link} from 'react-router-hash-link'

function Contato(){
    return(
        <div className="contato" id="contato">
            <h1>Entre em contato</h1>
            <h2>Telefone: (XX) 9 9999-9999</h2>
            <h3>Rua: Alguma Rua, 19</h3>
            <p>Subir para o <Link smooth to="#home">TOPO!</Link></p>
        </div>
    );
}

export default Contato;