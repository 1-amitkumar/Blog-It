// javascript for index.html
const container = document.querySelector('.blogs');
const searchForm = document.querySelector('.search');

var obj = JSON.parse(sessionStorage.getItem('user'));

const renderPosts = async (term) => {
  let uri = 'http://localhost:3000/posts?_sort=likes&_order=desc';
  if (term) {
    uri += `&q=${term}`
  }

  const res = await fetch(uri);
  const posts = await res.json();
   
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

  container.innerHTML = template;
}

// search
searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  renderPosts(searchForm.term.value.trim());
})

window.addEventListener('DOMContentLoaded', () => renderPosts());