export default function Home() {
  return (
    <section className="home">
      <div className="main-post">
        <img src="https://via.placeholder.com/800x300" alt="Main Post" />
        <div className="main-post-content">
          <p className="date">Post Date</p>
          <h2>Main Post Title</h2>
          <p>Summary of Main Post</p>
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
