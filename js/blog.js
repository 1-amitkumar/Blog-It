$(document).ready(() => {

      $.ajax({
        url: "http://localhost:3000/posts?_sort=likes&_order=desc",
        data: "GET",
        success: (posts) => {
            console.log(posts)
            let template = '';
              posts.forEach(post => {
                template += `
                  <div class="post">
                    <h2>${post.title}</h2>
                    <p><small>${post.likes} likes</small></p>
                    <p><small>Category: <b>${post.category}</b></small></p>
                    <p><small>Created: ${new Date(post.datetime).toLocaleString()}</b></small></p>
                    <p>${post.body.slice(0, 200)}...</p>
                    <a href="details.html?id=${post.id}">Read more</a>
                  </div>
                `
              });
            
              $('.blogs').html(template);
        },
        error: (e) => {
          alert("error: " + e);
        },
        complete: () => {
          console.log("call is completed...");
        },
      });
  
});