import React, { FC } from 'react';

import { Footer } from '../Footer';
import { NavBar } from '../NavBar';

const MainLayout: FC<any> = (props) => {
  return (
    <div>
      <NavBar elevation={0} />
      {props.children}
      <Footer />
    </div>
  );
};

export default MainLayout;
