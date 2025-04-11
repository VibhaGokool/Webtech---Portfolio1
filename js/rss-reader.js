document.addEventListener("DOMContentLoaded", () => {
    const feedSelector = document.getElementById("feed-selector");
    const content = document.getElementById("rss-content");
    const errorDiv = document.getElementById("rss-error");
  
    function loadFeed(feedUrl) {
      if (!feedUrl) return;
  
      content.innerHTML = "<p>Loading articles...</p>";
      errorDiv.textContent = "";
  
      const apiURL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`;
  
      fetch(apiURL)
        .then((res) => res.json())
        .then((data) => {
          if (!data.items || data.items.length === 0) {
            content.innerHTML = "<p>No articles found.</p>";
            return;
          }
  
          content.innerHTML = "";
  
          data.items.forEach((article) => {
            const articleEl = document.createElement("article");
            articleEl.innerHTML = `
              <h3>${article.title}</h3>
              <p>${article.description}</p>
            `;
            content.appendChild(articleEl);
          });
        })
        .catch((err) => {
          console.error("Feed error:", err);
          errorDiv.textContent = "❌ Unable to load feed. Please try another source.";
          content.innerHTML = "";
        });
    }
  
    feedSelector.addEventListener("change", () => {
      const selectedFeed = feedSelector.value;
      if (selectedFeed) loadFeed(selectedFeed);
    });
  });
  