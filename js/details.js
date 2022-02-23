
$(document).ready(() => {
  const id = new URLSearchParams(window.location.search).get('id');
  var obj = JSON.parse(sessionStorage.getItem('user'));
  // console.log(obj);
  $.ajax({
      url: 'http://localhost:3000/posts/' + id,
      data: "GET",
      success: (post) => {
        // console.log(post);
        const template = `
        <h1>${post.title}</h1>
        <p>${post.body}</p><br><br>
        <h2 id="count">${post.likes} likes</h2>
      `  
        $('.details').html(template);
        
        if(Number.parseInt(post.userid) !== obj.id){
          $("#edit").hide()
          $("#delete").hide()
        }

      },
      error: (e) => {
          alert("error: " + e);
      },
      complete: () => {
          console.log("call is completed...");
      },
  });

  

  

});