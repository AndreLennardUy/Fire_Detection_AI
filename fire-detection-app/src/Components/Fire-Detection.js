import React, { useState, useEffect } from 'react';

function FireDetection(props) {
  const [fileDirectory, setFileDirectory] = useState('');
  const [fileName, setFileName] = useState('');

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    const temporaryUrl = URL.createObjectURL(uploadedFile);
    setFileName(uploadedFile.name);
    setFileDirectory(temporaryUrl);
  };

  useEffect(() => {
    props.imgPath(fileName)
  }, [fileName]);

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      {props.data.predictedLabel && (
        <>
          <p>Result: {props.data.predictedLabel}</p>
          <p>Fire Score: {props.data.score[1]}</p>
          <p>Normal Score: {props.data.score[0]}</p>
        </>
      )}
      <img className='image' src={fileDirectory} alt="Uploaded file"/> 
    </div>
  );
}

export default FireDetection;
