import React, { useState } from 'react';
import './styles.css';

import Card from '../../componentes/Card'

function Home() {  

  /*Criar um estado - estado em si, função que atualiza o estado (padrão set)*/
  const [studentName,setStudentName] = useState();  


  return (
    //So pode ter um elemento retornado -> empacotar em uma div
    <div className='container'>
      <h1>Nome: {studentName}</h1>
      <input 
        type="text" 
        placeholder="Digite o nome..."
        onChange={e => setStudentName(e.target.value)}
      />
      <button type="button"> Adicionar</button>    

      <Card name="Juliana" idade={21}/>
      <Card name="Guilherme" idade={25}/>
      <Card name="Marléa" idade={45}/>
      <Card name="Edson" idade={48}/>
      <Card name="Maria Clara" idade={14}/>
      
    </div>
  ) 
}

export default Home
