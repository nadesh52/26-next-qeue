import React from "react";

interface GoogleIconProps extends React.SVGProps<SVGSVGElement> {}

const GoogleIcon: React.FC<GoogleIconProps> = ({ ...props }) => {
  return (
    <svg
      {...props}
      viewBox="0 0 512 512"
      fill="currentColor"
      width='24'
      height='24'
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="M428.7,69.3c-24.2,24.2-48.3,48.2-71.9,71.8c-10.2-6-20.1-12.9-30.9-17.9c-41.1-19-82.6-18.9-123.6-0.1   c-38.4,17.7-64.9,47-77.8,87.2c-16.2,50.5-7.8,97.6,25.2,139.3c23.9,30.3,55.7,47.9,94,53.3c28.6,4,56.6,0.9,83.3-9.9   c37.6-15.3,61.4-42.7,70.7-82.5c0.1-0.6,0.1-1.3,0.2-2.5c-44.4,0-88.6,0-133.1,0c0-32.3,0-64,0-96.3c2.2-0.1,4.3-0.3,6.4-0.3   c73.3,0,146.7,0.1,220-0.2c5.7,0,6.9,2.5,7.7,7c4.2,22.1,5.1,44.3,2.9,66.7c-2.6,25.8-7.8,50.9-17.4,75.1   c-19,48.1-50.2,85.9-94.6,112.5C337.3,504,280.3,513,220.5,502.8c-57.6-9.9-105.9-37.6-144.5-81.5c-24.8-28.2-42-60.6-52.1-96.8   s-11.8-73-5.7-109.9C25.6,170.2,44,130.5,73.1,96c34.1-40.4,76.7-67.8,127.9-80.7c62.7-15.8,123.2-9.2,180.6,21.5   C398.6,45.9,414.3,56.8,428.7,69.3z" />
      </g>
    </svg>
  );
};

export default GoogleIcon;
