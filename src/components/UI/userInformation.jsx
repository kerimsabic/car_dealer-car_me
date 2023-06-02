import React, { useState } from 'react';
import { Row, Col, Button } from 'reactstrap';
import Kramar from '../../assets/kramar.jpg';
import '../../styles/userInformation.css';
import Cars from './carsInSearch';

const UserInformation = () => {
    const [isButton1Clicked, setIsButton1Clicked] = useState(false);
  const [isButton2Clicked, setIsButton2Clicked] = useState(false);

  const handleButton1Click = () => {
    setIsButton1Clicked(true);
    setIsButton2Clicked(false);
  };

  const handleButton2Click = () => {
    setIsButton1Clicked(false);
    setIsButton2Clicked(true);
  };

  return (
    <div className="userinfo">
      <div className="user">
        <img src={Kramar} alt="" />
        <Row xs="3" className="row">
          <Col className="bg-blue border column">Kerim</Col>
          <Col className="bg-blue border column">ID:1111</Col>
          <Col className="bg-blue border column">033-222-222</Col>
          <Col className="bg-blue border column">Sarajevo</Col>
          <Col className="bg-blue border column2">kerimsabic@stu.ibu.edu.ba</Col>
        </Row>
      </div>
      <div className="buttons">
        <Row xs="4" row2>
        <Col
            className={`bg-color border customCol ${isButton1Clicked ? 'grey' : 'blue'}`}
          >
            <Button outline onClick={handleButton1Click}>
              Button 1
            </Button>
          </Col>
          <Col
            className={`bg-color border customCol ${isButton2Clicked ? 'grey' : 'blue'}`}
          >
            <Button outline onClick={handleButton2Click}>
              Button 2
            </Button>
          </Col>
        </Row>
      </div>
      <Cars/>
    </div>
  );
};

export default UserInformation;
