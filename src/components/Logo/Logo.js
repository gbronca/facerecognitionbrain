import React from 'react';
import Tilt from 'react-tilt';
import brain from './chip.svg';
import './Logo.css';
import 'tachyons';

const Logo = () => {
  return(
    <div className='ma4 mt0'>
      <Tilt className="Tilt" options={{ max : 45 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner"><img src={brain} alt="Logo"/> </div>
      </Tilt>
    </div>
  );
}

export default Logo;