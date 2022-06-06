import './style.css'
import { Card } from 'react-bootstrap';
import planta333 from '../../assets/planta333.png'


function PlantCard() {
    return(

        // <Card className='card-plant__container'>
        //     <Card.Img className='card-img' variant="top" src={planta333} />
        //     <Card.Body>
        //         <Card.Text className='card-text'>
        //             Some quick example text to build on the card title and make up the bulk of
        //             the card's content.
        //         </Card.Text>
        //     </Card.Body>
        // </Card>
        
        <div className='card-plant__container'>

                <img className='card-img'src={planta333} alt="" />
           
                <section className='card-text'>
                    <p>Some quick example text to build on the card title and make up the bulk of
                     the card's content.</p>
                </section>
        </div>

    )
}

export default PlantCard