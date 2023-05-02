import * as React from "react";
import { SvgXml } from "react-native-svg";

const SvgLogOut = () => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2H10" stroke="#BDBDBD" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M17 16L21 12L17 8" stroke="#BDBDBD" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M21 12H9" stroke="#BDBDBD" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
  return <SvgXml xml={xml} width="100%" height="100%" />;
};

export default SvgLogOut;