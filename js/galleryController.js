'use strict'

renderGallery()

function renderGallery(){
    var gallery = document.querySelector('.gallery')
    var strHtml=
     `
    <img src="img/2.jpg" alt="no-photo">
    <img src="img/3.jpg" alt="no-photo">
    `
    gallery.innerHTML=strHtml
}
