import React, { useState } from 'react';
import './styles.css';

import Card from '../../componentes/Card'

function Home() {  

  /*Criar um estado - estado em si, função que atualiza o estado (padrão set)*/
  const [studentName,setStudentName] = useState();
  const [students,setStudents] = useState([]);

  function handleAddStudent(){
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br",{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    }
    setStudents(prevState => [ ...prevState, newStudent]);
  }

  return (
    //So pode ter um elemento retornado -> empacotar em uma div
    <div className='container'>
      <h1>Lista de Presença{studentName}</h1>
      <input 
        type="text" 
        placeholder="Digite o nome..."
        onChange={e => setStudentName(e.target.value)}
      />
      <button type="button" onClick={handleAddStudent}>
      Adicionar
      </button>    

      {
        students.map(student => (
        <Card 
        key={student.time}
        name={student.name} 
        idade={student.time}/>
        ))
      }
      
  
      
    </div>
  ) 
}

export default Home
