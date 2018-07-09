import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="ui container left aligned centerText">
        <h1>Cardápio</h1>
        <h3>Coquetel</h3>
          <ul>
            <li>Canapés de carpaccio ou kani com kiwi;</li>
            <li>Salmão com pão preto e torradas;</li> 
            <li>patê de fois com geléia de framboesa.</li>
          </ul>
        <h3>Entrada</h3>
          <ul>
            <li>Sopa de tomate com ervas finas;</li>
            <li>Salada verde com queijos variados, em cubos,</li>
            <li>Torradinhas ao molho de azeite e nozes.</li>
          </ul>
        <h3>Pratos</h3>
          <ul>
            <li>Filé mignon com shimeji sauté, purê de batatas e alho ao molho oriental de shoyo;</li>
            <li>Salmão marinado em ervas, com arroz e sauté de zuchini (abobrinhas), coradas ao molho de alcaparras</li>
            <li>Espaguete de espinafre e de tomate (verde e vermelho), servido ao molho de tomates, com tomilho (erva) e lascas de parmesão;</li>
            <li>Torta de açafrão.</li>
          </ul>
        <h3>Sobremesa</h3>
          <ul>
            <li>Musse de cappuccino ao molho de chocolate amargo</li>
            <li>Bolo de Noiva</li>
            <li>Doces caramelizados variados</li>
            <li>Bem-casados</li>
            <li>Café / Chás</li>
          </ul>
        
          <h1>Traje</h1>
          Black-tie
      </div>
    )
  }
}

export default About;