import React, { useState } from 'react';
import '../../styles/publishComponent1.css'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FormGroup, Label, Input } from 'reactstrap';
import {  Button, } from 'reactstrap';
import { Link } from 'react-router-dom';




const PublisComponent1 = () => {


    const [makeDropdownOpen, setMakeDropdownOpen] = useState(false);
    const [selectedMake, setSelectedMake] = useState('All');
    const [modelDropdownOpen, setModelDropdownOpen] = useState(false);
    const [selectedModel, setSelectedModel] = useState('All');
    const [fuelDropdownOpen, setFuelDropdownOpen] = useState(false);
    const [selectedFuel, setSelectedFuel] = useState('All');
    const [transmissionDropdownOpen, setTransmissionDropdownOpen] = useState(false);
    const [selectedTransmission, setSelectedTransmission] = useState('All');



    const toggleMakeDropdown = () => {
        setMakeDropdownOpen(prevState => !prevState);
    };

    const toggleModelDropdown = () => {
        setModelDropdownOpen(prevState => !prevState);
    };

    const toggleFuelDropdown = () => {
        setFuelDropdownOpen(prevState => !prevState);
    };

    const toggleTransmissionDropdown = () => {
        setTransmissionDropdownOpen(prevState => !prevState);
    };

    const handleMakeSelect = (make) => {
        setSelectedMake(make);
    };

    const handleModelSelect = (model) => {
        setSelectedModel(model);
    };

    const handleFuelSelect = (fuel) => {
        setSelectedFuel(fuel);
    };

    const handleTransmissionSelect = (transmission) => {
        setSelectedTransmission(transmission);
    };

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
                <div className="image-icon">
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
                <div className="first-row4">
                    <Dropdown isOpen={makeDropdownOpen} toggle={toggleMakeDropdown} className='dropdown-sell'>
                        <DropdownToggle caret>Make: {selectedMake}</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={() => handleMakeSelect('All')}>All</DropdownItem>
                            <DropdownItem onClick={() => handleMakeSelect('Audi')}>Audi</DropdownItem>
                            <DropdownItem onClick={() => handleMakeSelect('Bmw')}>Bmw</DropdownItem>
                            <DropdownItem onClick={() => handleMakeSelect('Honda')}>Honda</DropdownItem>
                            <DropdownItem onClick={() => handleMakeSelect('Mercedes')}>Mercedes</DropdownItem>
                            <DropdownItem onClick={() => handleMakeSelect('Peugeot')}>Peugeot</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown isOpen={modelDropdownOpen} toggle={toggleModelDropdown} className='dropdown-sell'>
                        <DropdownToggle caret>Model: {selectedModel}</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={() => handleModelSelect('All')}>All</DropdownItem>
                            <DropdownItem onClick={() => handleModelSelect('A1')}>A1</DropdownItem>
                            <DropdownItem onClick={() => handleModelSelect('A3')}>A3</DropdownItem>
                            <DropdownItem onClick={() => handleModelSelect('A5')}>A5</DropdownItem>
                            <DropdownItem onClick={() => handleModelSelect('A6')}>A6</DropdownItem>
                            <DropdownItem onClick={() => handleModelSelect('A7')}>A7</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                </div>
                <div className="second-row4">
                    <Dropdown isOpen={transmissionDropdownOpen} toggle={toggleTransmissionDropdown} className='dropdown-sell'>
                        <DropdownToggle caret>
                            Transmission: {selectedTransmission}
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={() => handleTransmissionSelect('All')}>All</DropdownItem>
                            <DropdownItem onClick={() => handleTransmissionSelect('Automatic')}>Automatic</DropdownItem>
                            <DropdownItem onClick={() => handleTransmissionSelect('Manual')}>Manual</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown isOpen={fuelDropdownOpen} toggle={toggleFuelDropdown} className='dropdown-sell'>
                        <DropdownToggle caret>
                            Fuel: {selectedFuel}
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={() => handleFuelSelect('All')}>All</DropdownItem>
                            <DropdownItem onClick={() => handleFuelSelect('Diesel')}>Diesel</DropdownItem>
                            <DropdownItem onClick={() => handleFuelSelect('Petrol')}>Petrol</DropdownItem>
                            <DropdownItem onClick={() => handleFuelSelect('Hybrid')}>Hybrid</DropdownItem>
                            <DropdownItem onClick={() => handleFuelSelect('Electric')}>Electric</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>

                <div className="third-row4">
                    <FormGroup className='input-fields-sell'>
                        <Label for="yea2r">Year</Label>
                        <Input id="year2" name="year2" placeholder="YYYY" type="number" className='input-sell' />
                    </FormGroup>
                    <FormGroup className='input-fields-sell'>
                        <Label for="exampleNumber2">
                            Mileage
                        </Label>
                        <Input
                            id="exampleNumber2"
                            name="numbe2r"
                            placeholder="km"
                            type="numbe2"
                            className='input-sell' />
                    </FormGroup>

                    <FormGroup className='input-fields-sell'>
                        <Label for="exampleNumber">
                            Price
                        </Label>
                        <Input
                            id="exampleNumber2"
                            name="number2"
                            placeholder="Euro"
                            type="number"
                            className='input-sell'
                        />
                    </FormGroup>
                </div>

                <div className="title-row">
                    <div>
                        <FormGroup className='input-fields-sell'>
                            Title
                            <Input

                                className='input-title'
                            />
                        </FormGroup>
                    </div>
                </div>
                <div className="fourth-row4">

                   
                    <FormGroup check className="checkbox">
                        <Input id="abs" name="abs" type="checkbox" />
                        <Label check for="abs">
                            ABS
                        </Label>
                    </FormGroup>
                    <FormGroup check className="checkbox">
                        <Input id="cruise" name="cruise" type="checkbox" />
                        <Label check for="abs">
                            Cruise Control
                        </Label>
                    </FormGroup>
                    <FormGroup check className="checkbox">
                        <Input id="sensors" name="sensors" type="checkbox" />
                        <Label check for="abs">
                            Parking Sensors
                        </Label>
                    </FormGroup>
                    <FormGroup check className="checkbox">
                        <Input id="abs" name="abs" type="checkbox" />
                        <Label check for="abs">
                            ABS
                        </Label>
                    </FormGroup>
                    <FormGroup check className="checkbox">
                        <Input id="abs" name="abs" type="checkbox" />
                        <Label check for="abs">
                            ABS
                        </Label>
                    </FormGroup>
                </div>

                <div className="fourth-row4-2">

                    <FormGroup check className="checkbox">
                        <Input id="abs" name="abs" type="checkbox" className='check1'/>
                        <Label check for="abs">
                            ABS
                        </Label>
                    </FormGroup>
                    <FormGroup check className="checkbox">
                        <Input id="cruise" name="cruise" type="checkbox" />
                        <Label check for="abs">
                            Cruise Control
                        </Label>
                    </FormGroup>
                    <FormGroup check className="checkbox">
                        <Input id="sensors" name="sensors" type="checkbox" />
                        <Label check for="abs">
                            Parking Sensors
                        </Label>
                    </FormGroup>
                    <FormGroup check className="checkbox">
                        <Input id="abs" name="abs" type="checkbox" />
                        <Label check for="abs">
                            ABS
                        </Label>
                    </FormGroup>
                    <FormGroup check className="checkbox">
                        <Input id="abs" name="abs" type="checkbox" />
                        <Label check for="abs">
                            ABS
                        </Label>
                    </FormGroup>
                </div>

                <div className="fifth-row">
                <Link to='/publishCar2'> <Button className="next-btn">
                        Next
                    </Button></Link>
                </div>

            </div>



        </div>
    )
}

export default PublisComponent1
