import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileContents, setFileContent] = useState(null);

  // Event handler for file input change
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log("file selected");
  };
    
  const readFile = (file) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const content = e.target.result;
      setFileContent(content);
    };

    reader.readAsText(file);
  };
   React.useEffect(() => {
    if (selectedFile) {
      readFile(selectedFile);
    }
  }, [selectedFile]);


  // Event handler for form submission (you can handle file upload here)
  const handleSubmit = (event) => {
    console.log("file uploaded?");
    event.preventDefault();
    if (selectedFile) {
      // You can handle file upload here, e.g., send it to a server
      console.log('Selected file:', selectedFile);
    }
  };

  return (
    <div>
      <h2>File Upload</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {fileContents && (
        <div>
          <h3>File Contents:</h3>
          <pre>{fileContents}</pre>
        </div>
      )}
    </div>
    
  );
};

export default App;
