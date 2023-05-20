import React, { useState, useEffect, useRef } from 'react';
import './css/firedetection.css';
import cloud from './images/14868.png';

function FireDetection(props) {
  const [fileDirectory, setFileDirectory] = useState(cloud);
  const [fileName, setFileName] = useState('');

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    const temporaryUrl = URL.createObjectURL(uploadedFile);
    setFileName(uploadedFile.name);
    setFileDirectory(temporaryUrl);
  };

  useEffect(() => {
    props.imgPath(fileName);
  }, [fileName]);

  const fileInputRef = useRef(null);

  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = () => {
    const uploadedFile = fileInputRef.current.files[0];
    const filename = uploadedFile.name;
    const selectName = document.getElementsByClassName('file-select-name')[0];
    selectName.innerText = filename;
    handleFileUpload({ target: { files: [uploadedFile] } });
  };

  const result = props.data.predictedLabel ? props.data.predictedLabel : 'No Photo';
  const firePercentage = props.data.predictedLabel ? (props.data.score[1] * 100).toLocaleString() : '0';
  const normalPercentage = props.data.predictedLabel ? (props.data.score[0] * 100).toLocaleString() : '0';

  return (
    <div className='main-container'>
      <div className="file-upload">
        <div className="file-upload-select" onClick={handleFileSelect}>
          <div className="file-select-button">Choose File</div>
          <div className="file-select-name">No file chosen...</div>
          <input
            type="file"
            name="file-upload-input"
            id="file-upload-input"
            onChange={handleFileChange}
            ref={fileInputRef}
          />
        </div>
      </div>
      <div className='first-container'>
        <div className='left-container'>
          <p><b>Result:</b> {result}</p>
          <p><b>Fire Percentage:</b> {firePercentage}%</p>
          <p><b>Normal Percentage:</b> {normalPercentage}%</p>
        </div>
        <div className='right-container'>
          <img className='image' src={fileDirectory} alt="Uploaded file" />
        </div>
      </div>
    </div>
  );
}

export default FireDetection;
