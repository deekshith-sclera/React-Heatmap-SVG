import React, { useState } from 'react'

function Camera() {
    const [svgContent,setSvgContent]=useState(null)

    //The Input SVG image is uploaded using the handleFilepload function
  const handleFileUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file && file.type === "image/svg+xml") {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSvgContent(e.target.result);
      };
      reader.readAsText(file);
    } else {
      alert("Please upload an SVG image of the Floor Map");
    }
  };

  return (
    <div>
       <input
        type="file"
        accept="image/svg+xml"
        onChange={handleFileUpload}
        required
      />
    <img src={svgContent}/>

    </div>
  )
}

export default Camera