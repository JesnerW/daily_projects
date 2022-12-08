const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name_ = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 1500)

function getData() {
  header.innerHTML = '<img src="https://crehana-blog.imgix.net/media/filer_public/c2/e1/c2e11470-3258-42e7-8cdf-aec64a706f1d/laptop-nueva-que-consejos.jpg" alt="">'
  title.innerHTML = 'Lorem ipsum dolor sit amet.'
  excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, placeat?'
  profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/27.jpg" alt="">'
  name_.innerHTML = 'John Doe'
  date.innerHTML = 'Oct 08, 2022'

  animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}