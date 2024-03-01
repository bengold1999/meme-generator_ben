'use strict'

function renderGallery() {
    var gallery = document.querySelector('.gallery')
    var gImgs = getImgs()
    var strHtml = gImgs.map(img => `<img id = "${img.id}" src="${img.url}" alt ="meme photo" onclick="onImgSelect(this)">`)
    gallery.innerHTML = strHtml.join('')
}
