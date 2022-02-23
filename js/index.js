$("document").ready(function(){
    
    getBlogs();

    $('a').click(function(){
        value=$(this).attr('id');
        getBlogsCategoryWise(value)
    });

})

function getBlogsCategoryWise(text){
    axios.get('http://localhost:3000/posts?category='+text)
      .then((response) => {
          let blogs = response.data;
  
          let template = '';
          blogs.forEach(post => {
            template += `
              <div class="card text-center">
                <div class="card-header">
                    <h2><b>${post.title}</b><h2>
                </div>
                <div class="card-body">
                <p>Category: <b>${post.category}</b></p></br>
                    <p class="card-text">${post.body.slice(0, 400)}...</p>
                    <a onClick="logInFirst()" class="btn btn-outline-dark">Read more...</a>
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

        $('.categorywise').html(template);
      })
      .catch((err) => {
        console.log(err);
      });
  }

function getBlogs(){
    axios.get('http://localhost:3000/posts')
      .then((response) => {
          let blogs = response.data;
          console.log(blogs);
  
          let template = '';
          blogs.forEach(post => {
              console.log(post);
            template += `
              <div class="card text-center">
                <div class="card-header">
                    <h2><b>${post.title}</b><h2>
                </div>
                <div class="card-body">
                <p>Category: <b>${post.category}</b></p></br>
                    <p class="card-text">${post.body.slice(0, 400)}...</p>
                    <a onClick="logInFirst()"  class="btn btn-outline-dark">Read more...</a>
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
          

        $('.categorywise').html(template);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function logInFirst(){
      alert("login to read complete article")
  }



                 