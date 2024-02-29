import React, { useState, useEffect } from "react";

export default function JsonDemo() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/uthawong/repos")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Could not read data", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 className="project-title">MY PORTFOLIO</h1>
      {loading ? (
        <p>Loading projects......... *Elevator music*......Loading...</p> // Message while loading
      ) : (
        <ul>
          {posts.map((repo) => (
            <div key={repo.id}>
              <p className="description">
                <h2 className="repoName">{repo.name}</h2>
                <p className="repoDescription">{repo.description}</p>
                <p className="repoLink">{repo.html_url}</p>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                  <br />
                  <br />
                  <br />
                  <br />
                </a>
              </p>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}
