$(document).ready(() => {
    var obj = JSON.parse(sessionStorage.getItem('user'));

    console.log(obj);
    $.ajax({
        url: 'http://localhost:3000/posts?userid=' + obj.id,
        data: "GET",
        success: (posts) => {
          
            console.log(posts)
            let template = '<h2 class="text-center">My Blogs</h2><br>';
            posts.forEach(post => {
                template += `
                <div class="card text-center">
                <div class="card-header">
                    <h2><b>${post.title}</b><h2>
                </div>
                <div class="card-body">
                <p>Category: <b>${post.category}</b></p></br>
                    <p class="card-text">${post.body.slice(0, 400)}...</p>
                    <a href="details.html?id=${post.id}" class="btn btn-outline-dark">Edit</a>
                </div>
                <div class="card-footer text-muted">
                ${post.likes} <b>likes</b>
                </br>
                <b>Posted on :</b> ${new Date(post.datetime).toLocaleString()} 
                </div>
                </div>
                </br>
                </br>
                </br>
                `
            });

            $('#update').html(template);
          
            
        },
        error: (e) => {
            alert("error: " + e);
        },
        complete: () => {
            console.log("call is completed...");
        },
    });
      
  });