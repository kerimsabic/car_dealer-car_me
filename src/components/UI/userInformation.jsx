import React, { useState } from 'react';
import { Button } from 'reactstrap';
import Kramar from '../../assets/kramar.jpg';
import '../../styles/userInformation.css';
import Car from '../UI/singleCar'
import TwoCars from '../UI/twocars'


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

      <div className="empty-div3"></div>

      <div className="user">

        <div className="user-image-container">
          <img src={Kramar} alt="" />
        </div>

        <div className="boxes-right">
          <div className="blue-containers">
            <div className="first-row">
              <div className="first-two">
                <div className="text-boxes1">
                  <h6>Kerim</h6>
                </div>
                <div className="text-boxes2">
                  <h6>ID:1111</h6>
                </div></div>
              <div className="text-boxes">
                <h6>033-111-111</h6>
              </div>
            </div>

            <div className="second-row">
              <div className="text-boxes">
                <h6>Sarajevo</h6>
              </div>
              <div className="text-boxes">
                <h6>kerim.sabic@stu.ibu.edu.ba</h6>
              </div>
            </div>

          </div>

        </div>
      </div>

      <div className="two-buttons">
        <div className="right-button">
          <Button className='active-cars'>Active</Button>
        </div>
        <div className="left-button">
          <Button className='sold-cars'>Sold</Button>
        </div>
      </div>

      <div className="display-cars">

        <div className="first-row2">

          <div className="first-container">
            <div className="car-card">
              <Car />
            </div>
          </div>
          <div className="second-container">
            <div className="car-card">
              <Car />
            </div>
          </div>
          <div className="third-container">
            <div className="car-card">
              <Car />
            </div>
          </div>

        </div>
        <div className="second-row2">
        <div className="first-container">
            <div className="car-card">
              <Car />
            </div>
          </div>
          <div className="second-container">
            <div className="car-card">
              <Car />
            </div>
          </div>
          <div className="third-container">
            <div className="car-card">
              <Car />
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default UserInformation;
