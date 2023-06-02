import React from 'react'
import GLA from '../../assets/gla.jpeg'
import '../../styles/detailcartop.css'
import { Card, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap'
import Devider from '../UI/devider'

const DetailCarTop = () => {
    return (
        <div className='upper-part'>

            <div className="container3">
                <div className="row">
                    <div className="col-md-6">
                        <div className="title">
                            <h3>Mercedes GLA 220d</h3>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="icon2">
                            <i class="ri-chat-3-line"></i>
                        </div>
                    </div>
                </div>
            </div>

            <div className="image-container">
                <img src={GLA} alt="" />

            </div>


            <div className="price2">
                <h2>52.700KM</h2>

                <div class="info-container">
                    <div class="eye-icon2">
                        <i class="ri-eye-fill"></i>
                        <span class="info-number">200</span>
                    </div>
                </div>
            </div>

            <div className="quick-info">
                <div className="special-container2">

                    <div className="special-row">

                        <Card
                            className="my-2"
                            color="dark"
                            outline
                            style={{
                                width: '18rem'
                            }}
                        >
                            <CardHeader className='header2'>
                                <h5>Mileage</h5>
                            </CardHeader>
                            <CardBody>

                                <CardText>
                                    <h5>10.000KM</h5>
                                </CardText>
                            </CardBody>
                        </Card>
                        <Card
                            className="my-2"
                            color="dark"
                            outline
                            style={{
                                width: '18rem'
                            }}
                        >
                            <CardHeader className='header2'>
                                <h5>Mileage</h5>
                            </CardHeader>
                            <CardBody>

                                <CardText>
                                    <h5>10.000KM</h5>
                                </CardText>
                            </CardBody>
                        </Card>

                        <Card
                            className="my-2"
                            color="dark"
                            outline
                            style={{
                                width: '18rem'
                            }}
                        >
                            <CardHeader className='header2'>
                                <h5>Mileage</h5>
                            </CardHeader>
                            <CardBody>

                                <CardText>
                                    <h5>10.000KM</h5>
                                </CardText>
                            </CardBody>
                        </Card>

                    </div>



                    <div className="special-row">

                        <Card
                            className="my-2"
                            color="dark"
                            outline
                            style={{
                                width: '18rem'
                            }}
                        >
                            <CardHeader className='header2'>
                                <h5>Mileage</h5>
                            </CardHeader>
                            <CardBody>

                                <CardText>
                                    <h5>10.000KM</h5>
                                </CardText>
                            </CardBody>
                        </Card>
                        <Card
                            className="my-2"
                            color="dark"
                            outline
                            style={{
                                width: '18rem'
                            }}
                        >
                            <CardHeader className='header2'>
                                <h5>Mileage</h5>
                            </CardHeader>
                            <CardBody>

                                <CardText>
                                    <h5>10.000KM</h5>
                                </CardText>
                            </CardBody>
                        </Card>

                        <Card
                            className="my-2"
                            color="dark"
                            outline
                            style={{
                                width: '18rem'
                            }}
                        >
                            <CardHeader className='header2'>
                                <h5>Mileage</h5>
                            </CardHeader>
                            <CardBody>

                                <CardText>
                                    <h5>10.000KM</h5>
                                </CardText>
                            </CardBody>
                        </Card>

                    </div>
                </div>
            </div>

            <Devider />
            <div className="detailed-info">
                <Card
                    className="my-2"
                    color="dark"
                    outline
                    style={{
                        width: '18rem'
                    }}
                >

                    <CardBody>

                        <CardText className='car-details'>
                            <div className="data">
                                <h5>Manufacturer</h5>
                                <h5>Mercedes</h5>
                            </div>
                            <div className="data">
                                <h5>Model</h5>
                                <h5>GLA</h5>
                            </div>
                            <div className="data">
                                <h5>Fule</h5>
                                <h5>Diesel</h5>
                            </div>
                            <div className="data">
                                <h5>Mileage</h5>
                                <h5>10.000</h5>
                            </div>
                            <div className="data">
                                <h5>Year</h5>
                                <h5>2020</h5>
                            </div>
                            <div className="data">
                                <h5>Horse power</h5>
                                <h5>150</h5>
                            </div>
                            <div className="data">
                                <h5>Kilowats</h5>
                                <h5>110</h5>
                            </div>
                            <div className="data">
                                <h5>EURO</h5>
                                <h5>6</h5>
                            </div>
                        </CardText>
                    </CardBody>
                </Card>
                <Card
                    className="my-2"
                    color="dark"
                    outline
                    style={{
                        width: '18rem'
                    }}
                >

                    <CardBody>

                        <CardText className='checkmarks'>
                            <div className="data">
                                <h5>ABS</h5>
                                <i class="ri-checkbox-circle-line"></i>
                            </div>
                            <div className="data">
                                <h5>ESP</h5>
                                <i class="ri-checkbox-circle-line"></i>
                            </div>
                            <div className="data">
                                <h5>Air Bag</h5>
                                <i class="ri-checkbox-circle-line"></i>
                            </div>
                            <div className="data">
                                <h5>Parking Sensors</h5>
                                <i class="ri-checkbox-circle-line"></i>
                            </div>
                            <div className="data">
                                <h5>Air Bag</h5>
                                <i class="ri-checkbox-circle-line"></i>
                            </div>
                            <div className="data">
                                <h5>Air Bag</h5>
                                <i class="ri-checkbox-circle-line"></i>
                            </div>
                            <div className="data">
                                <h5>ABS</h5>
                                <i class="ri-checkbox-circle-line"></i>
                            </div>
                            <div className="data">
                                <h5>ESP</h5>
                                <i class="ri-checkbox-circle-line"></i>
                            </div>


                        </CardText>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default DetailCarTop
