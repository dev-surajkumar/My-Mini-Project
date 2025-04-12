import './styles/card.css'
import cardpractice from '../assests/123.jpg'

const CardPractice = () => {
  return (
    
          <div className="container">
            <h2>Welcome to My React Mini Project</h2>
            <div className="card-main">
                <img src={cardpractice} alt="No " />
                <h3>SURAJ KUMAR</h3>
                <p>Full Stack Developer</p>
                <h5 className='socials'><i className="fa-solid fa-envelope"></i> <p>surajkumar.codes@gmail.com</p></h5>
                <h5 className='socials'><i className="fa-brands fa-linkedin"></i>  
                  <a href="www.linkedin.com/in/suraj-kumar-codes">Suraj Kumar</a>
                </h5>
            </div>
            
          </div>
        
  )
}

export default CardPractice
