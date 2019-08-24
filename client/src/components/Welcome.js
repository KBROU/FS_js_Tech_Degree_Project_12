//Bootstrap jumbotron to create app title
import React from 'react';
import Weather from './Weather';
import GoogleMapComp from './GoogleMapComp';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Container, Row, Col } from 'reactstrap';

  // <div className="container-fluid">
  //   <div className="mx-auto">
  //     <GoogleMapComp classname="mx-auto"/>
  //   </div>
  // </div>

const Welcome = props => (
  <div>
    <div className="jumbotron jumbotron-fluid bg-info text-white" style={{ backgroundImage: `url(${require('../img/sunrise.jpg')})`, backgroundSize: 'cover', backgroundColor: "gray"}}>
      <div className="container text-lg-center pt-5">
        <p className="display-1"><strong>Good Morning,{<br />} {props.name}!</strong></p>
      </div>
    </div>

    <Container>
       <Row>
         <Col>
           <Card>
             <CardImg top width="100%" src={require('../img/weatherCard2.jpg')} alt="card cap weather" />
             <CardBody>
               <CardTitle className="h5 text-center">Todays Weather</CardTitle>
               <CardText className="weather">
                <Weather/>
               </CardText>
             </CardBody>
           </Card>
         </Col>
         <Col>
           <Card className="mb-2">
             <CardImg top width="100%" src={require('../img/road2.jpg')} alt="card cap map" />
             <CardBody>
               <CardTitle className="h5 text-center">Commute</CardTitle>
               <CardText>
                <GoogleMapComp classname="mx-auto"/>
               </CardText>
             </CardBody>
           </Card>
         </Col>
       </Row>
     </Container>

  </div>

);

export default Welcome;
