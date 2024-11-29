var posts=["2024/11/29/hello-world/","2024/11/29/go-commit/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };