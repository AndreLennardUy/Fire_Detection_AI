import React , { useRef } from 'react';

function FireDetection(props) {
    const fileInputRef = useRef(null);

    function handleFileInputChange () {
      const file = fileInputRef.current.files[0];
      const fileName = file.name;
      props.imgPath(fileName);
    };

    return (
      <div>
        <input type="file" ref={fileInputRef} onChange={handleFileInputChange} />
        <img src={'C:\\Users\\Andre Uy\\OneDrive - Cebu Institute of Technology University\\3rdYr2ndSem\\Intel System\\Fire_Detection_AI\\dataset\\Fire-Detection\\Fire Photo\\' + props.img} alt="Your Image" />        
        <h2>{props.data.predictedLabel}</h2>
      </div>
    );
}

export default FireDetection;