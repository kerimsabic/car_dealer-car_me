import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {  FormGroup, Label, Input } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

import TwoCars from '../UI/twocars';
import Car from '../UI/singleCar';



import '../../styles/searchList.css';

const SearchList = () => {
    const [makeDropdownOpen, setMakeDropdownOpen] = useState(false);
    const [selectedMake, setSelectedMake] = useState('All');
    const [modelDropdownOpen, setModelDropdownOpen] = useState(false);
    const [selectedModel, setSelectedModel] = useState('All');
    const [fuelDropdownOpen, setFuelDropdownOpen] = useState(false);
    const [selectedFuel, setSelectedFuel] = useState('All');
    const [transmissionDropdownOpen, setTransmissionDropdownOpen] = useState(false);
    const [selectedTransmission, setSelectedTransmission] = useState('All');


    const navigate = useNavigate();
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
        <div className="empty-div">
        <div className="list">
            <div className="sidebar">
                <div className="menu">
                    
                    <div className="dropdown-side">
                        <Dropdown isOpen={makeDropdownOpen} toggle={toggleMakeDropdown} className='dropdown-side2'>
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
                        <Dropdown isOpen={modelDropdownOpen} toggle={toggleModelDropdown}className='dropdown-side2'>
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
                        <Dropdown isOpen={transmissionDropdownOpen} toggle={toggleTransmissionDropdown}className='dropdown-side2'>
                            <DropdownToggle caret>
                                Transmission: {selectedTransmission}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={() => handleTransmissionSelect('All')}>All</DropdownItem>
                                <DropdownItem onClick={() => handleTransmissionSelect('Automatic')}>Automatic</DropdownItem>
                                <DropdownItem onClick={() => handleTransmissionSelect('Manual')}>Manual</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown isOpen={fuelDropdownOpen} toggle={toggleFuelDropdown}className='dropdown-side2'>
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
                        <FormGroup className='input-fields'>
                            <Label for="year">Year</Label>
                            <Input id="year" name="year" placeholder="from" type="number"  className='input-box2'/>
                        </FormGroup>
                        <FormGroup className='input-fields'>
                            <Label for="exampleNumber">
                                Mileage
                            </Label>
                            <Input
                                id="exampleNumber"
                                name="number"
                                placeholder="from"
                                type="number"
                            />
                        </FormGroup>

                        <FormGroup className='input-fields'>
                            <Label for="exampleNumber">
                                Price
                            </Label>
                            <Input
                                id="exampleNumber"
                                name="number"
                                placeholder="from"
                                type="number"
                            />
                        </FormGroup>
                    </div>
                    <div className="dropdown">
                        <div className="dropdown-title">Style</div>
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
                    
                </div>
                
            </div>
            <div className="container-side">
                <div className="row">
                <div className="col-md-4"><Car /></div>
                <div className="col-md-4"><Car /></div>
                <div className="col-md-4"><Car /></div>
                </div>
                <div className="row">
                <div className="col-md-4"><Car /></div>
                <div className="col-md-4"><Car /></div>
                <div className="col-md-4"><Car /></div>
                </div> 
            </div>

            <div className="container-side-version2">
                <TwoCars/>
            </div>
            <div className="container-side-version2">
                <TwoCars/>
            </div>
            <div className="container-side-version2">
                <TwoCars/>
            </div>
            

        </div>
</div>
    );
};

export default SearchList;
