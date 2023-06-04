import React from 'react'
import { Button, FormGroup } from 'reactstrap'
import '../../styles/publishComponent2.css'
import { Label, Input, } from 'reactstrap';

import { Link } from 'react-router-dom';

const publishComponent2 = () => {
    return (

        <div className='component-1'>






            <div className="empty-div4"></div>
            <div className="publish-navigation">
                <div className="car-icon">
                    <i class="ri-car-line"></i>
                </div>
                <div className="arrow-icon">
                    <i class="ri-arrow-right-line"></i>
                </div>
                <div className="image-icon2">
                    <i class="ri-image-line"></i>
                </div>
                <div className="arrow-icon">
                    <i class="ri-arrow-right-line"></i>
                </div>
                <div className="file-icon">
                    <i class="ri-file-text-line"></i>
                </div>
            </div>

            <div className="empty-div5"></div>
            <div className="detail-container">


                <div className="fifth-row">


                    <FormGroup>
                        <Label for="exampleText">
                            Text Area
                        </Label>
                        <Input
                            id="exampleText"
                            name="text"
                            type="textarea"
                        />
                    </FormGroup>
                    </div>
                    <div className="fifth-row2">
                        <div className="back2">
                        <Link to='/publishCar'> <Button className="back-btn">
                            Back
                        </Button></Link>
                        </div>

                        <div className="forward">
                        <Link to='/publishCar3'> <Button className="next-btn">
                            Next
                        </Button></Link>
                        </div>
                    </div>
                
            </div>



        </div>

    )
}

export default publishComponent2
