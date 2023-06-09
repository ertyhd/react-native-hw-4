import * as React from "react";
import { SvgXml } from "react-native-svg";

const SvgCreatePosts = () => {
  const xml = `<svg width="70" height="40" viewBox="0 0 70 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_12_109)">
  <rect width="70" height="40" rx="20" fill="#FF6C00"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M35.5 13.5H34.5V19.5H28.5V20.5H34.5V26.5H35.5V20.5H41.5V19.5H35.5V13.5Z" fill="white"/>
  </g>
  <defs>
  <clipPath id="clip0_12_109">
  <rect width="70" height="40" fill="white"/>
  </clipPath>
  </defs>
  </svg>`;
  return <SvgXml xml={xml} width="100%" height="100%" />;
};

export default SvgCreatePosts;
