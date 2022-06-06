import './style.css'
import Header from '../../components/header'
import { Container, Row, Col } from 'react-bootstrap';
import search from '../../assets/search.svg'
import location from '../../assets/location.svg'
import union from '../../assets/union.svg'
import PlantCard from '../../components/plantCard'

function Home() {
    return (
        <>
            <Header></Header>
            {/* <Container>
                <Row>
                    <Col> */}
                    <div className='input__container'>
                    <h1 className='welcome-title'>Bienvenido a tu zona cuidado</h1>
                    <div className='form__container'>
                        <input className='input-box' placeholder='Localización'></input>
                        <button><img src={search}></img></button>
                        <button><img src={location}></img></button>
                    </div>
                </div>
                    {/* </Col>
                </Row>
            </Container> */}
            <section>

            

                <div className='img__container'>
                    <div className='blur__container'>

                        <div className='info-weather__container'></div>
                    </div>
                </div>
              
                <div className='cards-section'>

                    <h1 className='plants-title' > Tus plantas</h1>

                    <div className='input-plants__container'>
                        <img className='union-icon' src={union} alt="" />
                        <input className='input-plants' placeholder='Busca tus plantas'></input>
                    </div>

                    <section className='cards__container'>
                    <PlantCard></PlantCard>
                    </section>
                </div>
               
            </section>
        </>
    )
}

export default Home