import * as React from "react";
import { SvgXml } from "react-native-svg";

const SvgPosts = () => {
  const xml = `<svg
width="24"
height="24"
viewBox="0 0 24 24"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<rect width="24" height="24" fill="white" />
<path
  fill-rule="evenodd"
  clip-rule="evenodd"
  d="M3 3H10V10H3V3Z"
  stroke="#212121"
  stroke-opacity="0.8"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  fill-rule="evenodd"
  clip-rule="evenodd"
  d="M14 3H21V10H14V3Z"
  stroke="#212121"
  stroke-opacity="0.8"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  fill-rule="evenodd"
  clip-rule="evenodd"
  d="M14 14H21V21H14V14Z"
  stroke="#212121"
  stroke-opacity="0.8"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  fill-rule="evenodd"
  clip-rule="evenodd"
  d="M3 14H10V21H3V14Z"
  stroke="#212121"
  stroke-opacity="0.8"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
</svg>
`;
  return <SvgXml xml={xml} width="60%" height="60%" />;
};

export default SvgPosts;
//=============================================
// import * as React from "react";
// import Svg, { Path } from "react-native-svg";

// const SvgPosts = (props) => (
//   <Svg
//     width={24}
//     height={24}
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     {...props}
//   >
//     <Path fill="#fff" d="M0 0h24v24H0z" />
//     <Path
//       clipRule="evenodd"
//       d="M3 3h7v7H3V3ZM14 3h7v7h-7V3ZM14 14h7v7h-7v-7ZM3 14h7v7H3v-7Z"
//       stroke="#212121"
//       strokeOpacity={0.8}
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </Svg>
// );

// export default SvgPosts;
