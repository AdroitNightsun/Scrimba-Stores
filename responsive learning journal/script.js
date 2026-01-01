const cont = document.getElementById('container')

function createBlogs(){
    let blogHtml = ``
    for(let i = 1; i<=6; i++){
        blogHtml += `<div class="blog">
          <img class="blog-img" src="images/b${i}.png" alt="blog-image" />
          <div class="date">JULY 23, 2099</div>
          <h1 class="blog-heading">Blog one</h1>
          <p class="blog-p">
            I'm excited to start a new learning journey as a Scrimba Bootcamp
            student! After several months of learning in the Frontend Developer
            Career Path.
          </p>
        </div>`
    }
    return blogHtml
}

function render(){
    cont.innerHTML = createBlogs()
}

render()