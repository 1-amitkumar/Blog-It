// javascript for create.html
const form = document.querySelector('form');
var obj = JSON.parse(sessionStorage.getItem('user'));

const createPost = async (e) => {
  e.preventDefault();

  const doc = {
    title: form.title.value,
    body: form.body.value,
    category: form.category.value,
    datetime: new Date(),
    userid : obj.id,
    likes: 0,
  }

  await fetch('http://localhost:3000/posts', {
    method: 'POST',
    body: JSON.stringify(doc),
    headers: { 'Content-Type': 'application/json' }
  })

  window.location.replace('/pages/blog.html')
}

form.addEventListener('submit', createPost);