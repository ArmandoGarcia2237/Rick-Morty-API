import { useState, useEffect } from 'react'
import ImageCard from './components/ImageCard' 
import './App.css'

function App() {
  const [character,setCharacter] = useState([])
  const [page,setPage] = useState(1)
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => {
        return response.json()
      }).then((data) => {
        setCharacter(data.results)
      }).catch((error) => {
        console.log(error)
      })
  }, [page])

  const Add = () => {
    //console.log('siguiente pagina')
    if(page==42){
      console.log('no hay más pags')
    }
    else if(page<42){
      setPage(page+1)
    }
  }
  const back = () => {
    if(page==1){
      console.log('es la pag más abajo')
    }
    else if(page>1){
      setPage(page-1)
    }
  }
return (
    <>
    <div className="bg-dark text-white">
      <h1 className='text-center display-1 py-4'>Rick and Morty</h1>
      <div className='container'>
      <div className='d-flex justify-content-between aling-items-center'>
      <button className='btn btn-success' onClick={back}>atrás</button>
      <button className='btn btn-success' onClick={Add}>siguiente</button>
      </div>
        <div className='row'>
        {character.map((crd) => {
      return <ImageCard key={crd.id} url={crd.image} title={crd.name} />
      })}
        </div>
      </div>
    </div>
    </>
  )
}

export default App
