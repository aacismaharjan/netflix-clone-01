import React from 'react';
import ResponsiveAppBar from '../header';

const Layout = ({ children }: any) => {
  return (
    <React.Fragment>
      <ResponsiveAppBar />
      {children}
    </React.Fragment>
  );
};

export default Layout;
