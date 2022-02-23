$(document).ready(() => {
  var obj = JSON.parse(sessionStorage.getItem('user'));
  $("#create").submit((event) => {
    event.preventDefault();
     
     var title= $("#title").val();
     var blogbody= $("#blogbody").val();
     var category= $("#category").val();

     let data = {
      title: title,
      body: blogbody,
      category: category,
      datetime: new Date(),
      userid: obj.id,
      likes: 0,
      comments: "[]"
    }
    $.ajax({
      url: "http://localhost:3000/posts",
      method: "POST",
      required :"true",
      data: data,
      success:(x)=>{
          window.location ="/pages/blog.html";
      },
      error:(e)=>{
          alert("error occured");
      }
    });


  });
  
});