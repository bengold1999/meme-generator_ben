'use strict'



function filterImg(){
    let search = document.getElementById('filter').value
     renderGallery(search)

}

function renderGallery(filter='') {
    var gallery = document.querySelector('.gallery')
    var gImgs = getImgs()
    var filterImg = gImgs.filter(img=> img.keywords.includes(filter))
    var strHtml = filterImg.map(img => `<img id = "${img.id}" src="${img.url}" alt ="meme photo" onclick="onImgSelect(this)">`)
    gallery.innerHTML = strHtml.join('')
}

function clearFilter(){
    document.getElementById('filter').value=''
    renderGallery()
}

