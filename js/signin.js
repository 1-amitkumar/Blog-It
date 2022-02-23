$(document).ready(() => {
    $("#userSignin").submit((event) => {
      event.preventDefault();
      var email = $("#userEmail").val();
      var password = $("#userPassword").val();

      $.ajax({
        url: "http://localhost:3000/users",
        data: "GET",
        success: (x) => {

          x.forEach(element => {
                if (element.email === email && element.password === password) {
                sessionStorage.setItem('user', JSON.stringify(element));
                window.location = "blog.html";
                }
            });
        },
        error: (e) => {
          alert("error: " + e);
        },
        complete: () => {
          console.log("call is completed...");
        },
      });
  
    });
   });