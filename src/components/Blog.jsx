import React from 'react';

function Blog() {
  const posts = [
  ];

  return (
    <div>
      <h1 className="mb-4">Blog</h1>
      <div className="blog-posts">
        {posts.map((post) => (
          <div key={post.id} className="card">
            <h2 className="card-title">{post.title}</h2>
            <p>{post.excerpt}</p>
            <p style={{color: '#666', fontSize: '0.9em'}}>{post.date}</p>
            <button className="btn btn-primary">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;