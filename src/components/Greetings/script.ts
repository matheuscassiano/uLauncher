export default function search(list, setList, text) {
  list.forEach((item, index) => {
    if (item.toLowerCase().indexOf(text.toLowerCase()) > -1) {
      document.querySelectorAll('li')[index].style.display = ''
    } else {
      document.querySelectorAll('li')[index].style.display = 'none'
    }
  })
}
