import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import ProjectPage from "./pages/ProjectPage";

function App() {
  const [page, setPage] = useState("landing");

  return (
    <>
      {page === "landing" ? (
        <LandingPage
          goToProject={() => setPage("project")}
        />
      ) : (
        <ProjectPage />
      )}
    </>
  );
}

export default App;