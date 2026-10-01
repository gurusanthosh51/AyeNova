import "../styles/home.css";

function Home() {
  return (
    <div className="home">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <h2>🌌 AyeNova</h2>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#login">Login</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <h1>Welcome to AyeNova</h1>

        <p>
          AI-powered health monitoring, respiratory tracking,
          intelligent assistance, and personalized insights —
          all in one platform.
        </p>

        <div className="buttons">
          <button>Get Started</button>
          <button>Learn More</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <h2>Our Features</h2>

        <div className="cards">
          <div className="card">
            <h3>🤖 AI Assistant</h3>
            <p>
              Get intelligent responses, guidance, and support
              powered by AI.
            </p>
          </div>

          <div className="card">
            <h3>🫁 Respiratory Tracking</h3>
            <p>
              Monitor breathing patterns and maintain better
              respiratory health awareness.
            </p>
          </div>

          <div className="card">
            <h3>📊 Health Dashboard</h3>
            <p>
              View health statistics, trends, and insights
              through a simple dashboard.
            </p>
          </div>

          <div className="card">
            <h3>🎤 Voice Commands</h3>
            <p>
              Interact with AyeNova using voice for a
              hands-free experience.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <h2>About AyeNova</h2>

        <p>
          AyeNova is designed to combine artificial intelligence,
          health monitoring, and smart assistance into a single
          platform. Our goal is to help users better understand
          their health while providing a modern and intuitive
          AI-powered experience.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 AyeNova. All Rights Reserved.</p>
        <p>Built with React, Vite, and AI-powered technologies.</p>
      </footer>
    </div>
  );
}

export default Home;