import Fade from 'react-reveal/Fade'
const ImageCard = ({ url, title, origin, status }) => {
  return (
    <>
    <Fade top distance="20%">
    <div className='shadow container mb-2 col-md-2 p-2 m-1 card card-body' >
      <img src={url} alt={title} className='' />
      <div className="card-title display-6 text-center text-black">
      {title}   
      </div>
      <div className="card-title display-7 text-center text-black">
      <h5 className="text-dark">orígen:</h5>
      <p className="text-dark">{origin}</p>
      <h5 className="text-dark">Estado  :</h5>
      <p className="text-dark">{status}</p>       
      </div>
    </div>
    </Fade>
    </>
  )
}

export default ImageCard
