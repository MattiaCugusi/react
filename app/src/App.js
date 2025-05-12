import './App.css';
import {useState} from "react";
function App() {
  const [alunni, setAlunni]=useState([]);
  const [loading, setLoading]=useState(false);
  const [inserimento, setIns]=useState(false);
  function carica(){
     setLoading(true);
      fetch('http://localhost:8080/alunni')
      .then(response => response.json())
      .then(data => { 
        setAlunni(data)
        setLoading(false);
      });
    }

    function mostraIns(){
      setIns(true);
    }

    function salvaAlunno(){
      fetch("http://localhost:8080/alunni", {
        method:"POST",
        headers: {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify({nome: nome, cognome: cognome})
      });

      .then(response => response.json())
      .then(data => { 
        carica();
      }


    }


    return (
    <>
    <table border="1">
      {
        alunni.map(alunno => 
            <tr>
              <td>{alunno.id}</td>
              <td>{alunno.nome}</td>
              <td>{alunno.cognome}</td>
            </tr>
          )
      }
    </table>
    {loading &&
      <p>caricamento... attendere</p>
    }
    {alunni.length===0 && !loading &&
    <button onClick={carica}>
      Carica gli alunni
    </button> 
    }
    {alunni.length>0 && !inserimento && 
    <button onClick={mostraIns}>Inserisci un nuovo alunno</button>
    }
    {inserimento && 
      <form>
          <input placeholder='Nome' type="text" name="nome" onChange={e => SVGAnimateTransformElement()}></input><br></br>
          <input placeholder='Cognome'></input><br></br>
          
      </form>}
    </>
  );
}
export default App;
