import hero from "../images/hero-image.png";

export default function Home() {
  return (
    <section className="home">
      <div className="main-post">
        <img src={hero} alt="Main Post" />
        <div className="main-post-content">
          <p className="date">Post Date</p>
          <h2>My new journey as a bootcamp student.</h2>
          <p>
            After several months of learning in the Frontend Developer Career
            Path, I've made the big jump over to the Bootcamp to get expert code
            reviews of my Solo Projects projects and meet like-minded peers.
          </p>
        </div>
      </div>

      <div className="recent-posts">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="post-card">
            <img
              src={`https://via.placeholder.com/400x200?text=Post+${i + 1}`}
              alt={`Post ${i + 1}`}
            />
            <p className="date">May {6 - i}, 2025</p>
            <h3>Recent Post Title {i + 1}</h3>
            <p>Summary of the recent post {i + 1}.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
