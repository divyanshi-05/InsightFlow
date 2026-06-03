function LandingPage({goToProject}) {
  return (
    <div>
      <h1>InsightFlow</h1>

      <h2>Turn Raw Business Data Into Actionable Decisions</h2>

      <p>
        Upload datasets, generate dashboards, forecast trends,
        and uncover AI-powered insights.
      </p>

    <button onClick={(goToProject)}>
        Create Project
    </button>
    </div>
  );
}

export default LandingPage;