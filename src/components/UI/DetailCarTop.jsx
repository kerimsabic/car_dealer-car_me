import React from 'react'
import GLA from '../../assets/gla.jpeg'
import '../../styles/detailcartop.css'
import { Card, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap'
import Devider from '../UI/devider'
import Car from '../../components/UI/singleCar'

const DetailCarTop = () => {
    return (

        <div className='upper-part'>

            <div className="empty-div2"></div>

            <div className="container3">
                <div className="title">
                    <h3>Mercedes GLA 220d</h3>
                </div>
                <div className="icon2">
                    <i class="ri-chat-3-line"></i>
                </div>

            </div>


            <div className="image-container">
                <div className="image-container2">
                    <img src={GLA} alt="" />
                </div>
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

                    <CardBody className='special-cardBody'>

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

            <Devider />

            

            <div className="description-about">

                <div class="line-container">
                    <div class="custom-line"></div>
                </div>
                <div class="dealers">
                    <h3>Detailed description</h3>
                    <div class="line-container">
                        <div class="custom-line2"></div>
                    </div>
                    <div class="line-container">
                        <div class="custom-line3"></div>
                    </div>
                </div>
                <div className="description-box">
                    <div className="description-box2">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consequuntur sint iure maiores ea molestiae repudiandae cupiditate odit quibusdam laborum optio similique id repellat doloribus quasi ab vitae perferendis mollitia!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro molestiae nobis iusto nulla accusantium quia consequuntur. Earum harum impedit, recusandae quis, explicabo labore reprehenderit sequi expedita culpa hic numquam et.</p>
                    </div>
                </div>
            </div>


            <Devider />

            <div className="user-information-box">
                <div class="line-container">
                    <div class="custom-line"></div>
                </div>
                <div class="dealers">
                    <h3>User information</h3>
                    <div class="line-container">
                        <div class="custom-line2"></div>
                    </div>
                    <div class="line-container">
                        <div class="custom-line3"></div>
                    </div>
                </div>

                <div className="user-info-row">
                    <i class="ri-user-line"></i>

                    <Card
                            className="my-3"
                            color="dark"
                            outline
                            style={{
                                width: '18rem'
                            }}
                        >
                            <CardHeader className='header3'>
                                <h5>Name</h5>
                            </CardHeader>
                            <CardBody>

                                <CardText>
                                    <h5>Kramar</h5>
                                </CardText>
                            </CardBody>
                        </Card>

                        <Card
                            className="my-3"
                            color="dark"
                            outline
                            style={{
                                width: '18rem'
                            }}
                        >
                            <CardHeader className='header3'>
                                <h5>Address</h5>
                            </CardHeader>
                            <CardBody>

                                <CardText>
                                    <h5>Sarajevo</h5>
                                </CardText>
                            </CardBody>
                        </Card>

                        <Card
                            className="my-3"
                            color="dark"
                            outline
                            style={{
                                width: '18rem'
                            }}
                        >
                            <CardHeader className='header3'>
                                <h5>Contact</h5>
                            </CardHeader>
                            <CardBody>

                                <CardText>
                                    <h5>033-111-111</h5>
                                </CardText>
                            </CardBody>
                        </Card>
                </div>
            </div>

            <Devider />

            <div className="detail-similar-cars">
            <div class="line-container">
                    <div class="custom-line"></div>
                </div>
                <div class="dealers">
                    <h3>Similar Cars</h3>
                    <div class="line-container">
                        <div class="custom-line2"></div>
                    </div>
                    <div class="popular-cars-container">
                <div class="car-item">
                    <Car />
                </div>

                <div class="car-item">
                    <Car />
                </div>

                <div class="car-item">
                    <Car />
                </div>

               
            </div>
                </div>


            </div>
        </div>

    )
}

export default DetailCarTop
