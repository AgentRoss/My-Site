let tablinks = document.getElementsByClassName('tab-links')
let tabContents = document.getElementsByClassName('tab-contents')

function openTab(tabname){
  for(let tabContent of tabContents){
    tabContent.classList.remove("active-tab")
  }
  document.getElementById(tabname).classList.add("active-tab")
}
