import React from 'react';
import { Progress } from 'reactstrap';

// Sprint backlog # 2 ID-012 & ID-013

const SensorProgress = (props) => {
  return (
    <div>
    <Progress multi>
        <Progress bar color="danger" value="5"> 😵 !!</Progress>
       <Progress bar value="15"> 🤷‍ Meh</Progress>
       <Progress bar color="warning" value="20"> 🤕 20%</Progress>
       <Progress bar color="info" value="25"> 😎 Cool</Progress>
       <Progress bar color="success" value="40"> 🤯 Wow!</Progress>
     </Progress>
    </div>
  );
};

export default SensorProgress;
