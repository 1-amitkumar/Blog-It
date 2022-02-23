$(document).ready(() => {

    $.ajax({
        url: "http://localhost:3000/posts?_sort=likes&_order=desc",
        data: "GET",
        success: (posts) => {
            console.log(posts)
            let template = '<h2 class="text-center">All articles</h2><br>';
            posts.forEach(post => {
                template += `
                <div class="card text-center">
                <div class="card-header">
                    <h2><b>${post.title}</b><h2>
                </div>
                <div class="card-body">
                <p>Category: <b>${post.category}</b></p></br>
                    <p class="card-text">${post.body.slice(0, 400)}...</p>
                    <a href="details.html?id=${post.id}" class="btn btn-outline-dark">Read more...</a>
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

            $('#blogs').html(template);
        },
        error: (e) => {
            alert("error: " + e);
        },
        complete: () => {
            console.log("call is completed...");
        },
    });

    $('a').click(function () {
        value = $(this).attr('id');
        getBlogsCategoryWise(value)
    });

});

function getBlogsCategoryWise(text) {
    axios.get('http://localhost:3000/posts?category=' + text)
        .then((response) => {
            let blogs = response.data;

            let template = `<h1 class="text-center">Articles on ${blogs[0].category}</h1>`;
            blogs.forEach(post => {
                template += `
              <div class="card text-center">
                <div class="card-header">
                    <h2><b>${post.title}</b><h2>
                </div>
                <div class="card-body">
                <p>Category: <b>${post.category}</b></p></br>
                    <p class="card-text">${post.body.slice(0, 400)}...</p>
                    <a href="details.html?id=${post.id}" class="btn btn-outline-dark">Read more...</a>
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

            $('#blogs').html(template);
        })
        .catch((err) => {
            console.log(err);
        });
}