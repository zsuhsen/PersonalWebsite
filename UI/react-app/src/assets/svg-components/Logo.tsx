import React from 'react';
import logo from '../icons/zs-logo-minified.svg'; // Tell webpack this JS file uses this image

interface LogoProps {
    click?: () => void;
    width?: number;
    height?: number;
}
function Logo(props: LogoProps) {
  return <img src={logo} onClick={props.click} width={props.width} height={props.height} alt="Logo" />;
}

export default Logo;