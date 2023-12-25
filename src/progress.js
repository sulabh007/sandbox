import React, { useEffect, useRef } from 'react';
import './progress.css';

const progressbar = () => {
 const stepRefs = useRef([]);
 const stepCount = 7;

 useEffect(() => {
  stepRefs.current = Array.from({ length: stepCount }, (_, i) => stepRefs.current[i] || React.createRef());
 }, []);

 const progress = (stepNum) => {
  let p = stepNum * (100 / (stepCount - 1));
  document.getElementsByClassName('percent')[0].style.width = `${p}%`;
  let step = document.querySelectorAll('.step')
  stepRefs.current.forEach((ref, i) => {
      if (i === stepNum) {
        step[i].classList.add('selected');
        step[i].classList.remove('completed');
      }
      if (i < stepNum) {
        step[i].classList.add('completed');
      }
      if (i > stepNum) {
        step[i].classList.remove('selected', 'completed');
      }
    
  });
 };

 return (
  <div className="container">
    <div className="progress">
      <div className="percent"></div>
    </div>
    <div className="steps">
      {Array.from({ length: stepCount }, (_, i) => (
        <div key={i} ref={stepRefs.current[i]} className="step" id={i} onClick={() => progress(i)}></div>
      ))}
    </div>
  </div>
 );
}

export default progressbar;
