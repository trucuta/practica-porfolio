const toggleMenu = () => {
  document.body.classList.toggle('open')

  !document.body.classList.contains('open')
    ? document.querySelector('#toggle-btn').classList.add('inactive')
    : document.querySelector('#toggle-btn').classList.remove('inactive')
}
