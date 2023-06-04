import React, { Fragment } from 'react'

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";

const Layout = () => {
  return (
    <Fragment>
      
      <div style={{ marginTop: '118px', width: '100%' }}>
        <Routers />
      </div>
      
    </Fragment>
  );
};

export default Layout
