import { Link} from 'react-router-dom'

import './style.css'


const Home =()=> {
  return(
    <>
    <h1 className='p'>
         Let me take you through 
         my Naivasha trip and experience the magic firsthand.<br></br> Embrace nature's embrace, discover 
         hidden gems, and create timeless memories.<br></br> Are you ready for an enchanting getaway? Pack your
          bags and let's embark on this<br></br> unforgettable Naivasha adventure together!
    </h1>
    
        <img src='/images/2.jpeg' id='foto'/>
        
    <Link to='/Trip' >
      <button className='but'> 
        unlock your Naivasha trip
      </button>
    </Link>
    </>
    )}



export default Home