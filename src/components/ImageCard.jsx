const ImageCard = ({ url, title }) => {
  return (
    <>
    <div className='container mb-2 col-md-2 p-2 m-1 card card-body' >
      <img src={url} alt={title} className='' />
      <div className="card-title display-7 text-center text-black">
      {title}
      </div>
    </div>
    </>
  )
}

export default ImageCard
