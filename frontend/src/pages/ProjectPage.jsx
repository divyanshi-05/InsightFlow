import { useState } from "react";

function ProjectPage() {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div>
      <h1>Create Project</h1>

      <input
        type="text"
        placeholder="Enter Project Name"
      />

      <br />
      <br />

      <input
        type="file"
        accept=".csv"
        onChange={handleFileChange}
      />

      <br />
      <br />

      {fileName && (
        <p>Selected File: {fileName}</p>
      )}
    </div>
  );
}

export default ProjectPage;