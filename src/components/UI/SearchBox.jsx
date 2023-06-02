import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { Collapse, Button, CardBody, Card } from 'reactstrap';


import '../../styles/searchbox.css';

const SearchBox = (args) => {
  const [makeDropdownOpen, setMakeDropdownOpen] = useState(false);
  const [selectedMake, setSelectedMake] = useState('All');
  const [modelDropdownOpen, setModelDropdownOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState('All');
  const [fuelDropdownOpen, setFuelDropdownOpen] = useState(false);
  const [selectedFuel, setSelectedFuel] = useState('All');
  const [transmissionDropdownOpen, setTransmissionDropdownOpen] = useState(false);
  const [selectedTransmission, setSelectedTransmission] = useState('All');


  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

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

  const handleSearch = () => {
    navigate('/cars');
  };

  return (

    <div className='detailed-search'>
      <div className="container">
        <Dropdown isOpen={makeDropdownOpen} toggle={toggleMakeDropdown}>
          <DropdownToggle caret>
            Make: {selectedMake}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => handleMakeSelect('All')}>
              All
            </DropdownItem>
            <DropdownItem onClick={() => handleMakeSelect('Audi')}>
              Audi
            </DropdownItem>
            <DropdownItem onClick={() => handleMakeSelect('Bmw')}>
              Bmw
            </DropdownItem>
            <DropdownItem onClick={() => handleMakeSelect('Honda')}>
              Honda
            </DropdownItem>
            <DropdownItem onClick={() => handleMakeSelect('Mercedes')}>
              Mercedes
            </DropdownItem>
            <DropdownItem onClick={() => handleMakeSelect('Peugeot')}>
              Peugeot
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown isOpen={modelDropdownOpen} toggle={toggleModelDropdown}>
          <DropdownToggle caret>
            Model: {selectedModel}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => handleModelSelect('All')}>
              All
            </DropdownItem>
            <DropdownItem onClick={() => handleModelSelect('A1')}>
              A1
            </DropdownItem>
            <DropdownItem onClick={() => handleModelSelect('A3')}>
              A3
            </DropdownItem>
            <DropdownItem onClick={() => handleModelSelect('A5')}>
              A5
            </DropdownItem>
            <DropdownItem onClick={() => handleModelSelect('A6')}>
              A6
            </DropdownItem>
            <DropdownItem onClick={() => handleModelSelect('A7')}>
              A7
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown isOpen={fuelDropdownOpen} toggle={toggleFuelDropdown}>
          <DropdownToggle caret>
            Fuel: {selectedFuel}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => handleFuelSelect('All')}>
              All
            </DropdownItem>
            <DropdownItem onClick={() => handleFuelSelect('Diesel')}>
              Diesel
            </DropdownItem>
            <DropdownItem onClick={() => handleFuelSelect('Petrol')}>
              Petrol
            </DropdownItem>
            <DropdownItem onClick={() => handleFuelSelect('Hybrid')}>
              Hybrid
            </DropdownItem>
            <DropdownItem onClick={() => handleFuelSelect('Electric')}>
              Electric
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown isOpen={transmissionDropdownOpen} toggle={toggleTransmissionDropdown}>
          <DropdownToggle caret>
            Transmission: {selectedTransmission}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => handleTransmissionSelect('All')}>
              All
            </DropdownItem>
            <DropdownItem onClick={() => handleTransmissionSelect('Automatic')}>
              Automatic
            </DropdownItem>
            <DropdownItem onClick={() => handleTransmissionSelect('Manual')}>
              Manual
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <div className="container2">

          <FormGroup>
            <Label for="exampleNumber">
              Year
            </Label>
            <Input
              id="exampleNumber"
              name="number"
              placeholder="from"
              type="number"
            />
          </FormGroup>

          <FormGroup>
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

          <FormGroup>
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

          <React.StrictMode>
            <Button color="transparent" onClick={toggle} style={{ marginBottom: '2.5rem' , textDecoration:'underline',color:'#1F41BC'}} className='advancedSearch-btn'>
              <h6><i class="ri-equalizer-line"></i>Advanced Search</h6>
            </Button>
            <Collapse isOpen={isOpen} {...args} className='expanded-collapse'>
              <Card className='expanded-card' >
                <CardBody className='cardbody'>
                  <div className="moreLabes">
                    <FormGroup className='formgroup1'>
                      <Label for="exampleNumber">
                        Year
                      </Label>
                      <Input
                        id="exampleNumber"
                        name="number"
                        placeholder="to"
                        type="number"
                      />
                    </FormGroup>

                    <FormGroup className='formgroup1'>
                      <Label for="exampleNumber">
                        Mileage
                      </Label>
                      <Input
                        id="exampleNumber"
                        name="number"
                        placeholder="to"
                        type="number"
                      />
                    </FormGroup >

                    <FormGroup className='formgroup1'>
                      <Label for="exampleNumber">
                        Price
                      </Label>
                      <Input
                        id="exampleNumber"
                        name="number"
                        placeholder="to"
                        type="number"
                      />
                    </FormGroup>
                    <FormGroup className='formgroup1'>
                      <Label for="exampleNumber">
                        Horse Power
                      </Label>
                      <Input
                        id="exampleNumber"
                        name="number"
                        placeholder="from"
                        type="number"
                      />
                    </FormGroup>
                  </div>

                  <div className="morecheckboxes">
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

                </CardBody>
              </Card>
            </Collapse>
          </React.StrictMode>

          <button className="search-vehicle" id="search" onClick={handleSearch}>
            Search
          </button>

        </div>

      </div>

    </div>
  );
};

export default SearchBox;
