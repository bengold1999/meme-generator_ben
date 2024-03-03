'use strict'


function filterImg(){
    let search = document.querySelector('.keys').value
     renderGallery(search)

}

function renderGallery(filter='') {
    var gallery = document.querySelector('.gallery')
    gallery.innerHTML=''
    var gImgs = getImgs()
    var filterImg = gImgs.filter(img=> img.keywords.includes(filter))
    var strHtml = filterImg.map(img => `<img id = "${img.id}" src="${img.url}" alt ="meme photo" onclick="onImgSelect(this)">`)
    gallery.innerHTML = strHtml.join('')
}

// function clearFilter(){
//     document.getElementById('filter').value=''
//     renderGallery()
// }

function renderSaved(){

    var gallery = document.querySelector('.gallery')
    gallery.innerHTML=''
    var savedMemes = loadFromStorage(USERSAVEKEY)
    if (!savedMemes || savedMemes.length === 0) return gallery.innerHTML = '<p>No saved memes found.</p>'



    var strHtml =  savedMemes.map(meme => `<img id="${meme.selectedImgId}" src="${meme.url}" alt="saved meme" onclick="onmemeSelect(this)">`)
   
    gallery.innerHTML = strHtml.join('')
}


function renderKeywords() {
    var strHtml = ''
    var keys = getKeys()
    for (var key in keys) {
        if (keys.hasOwnProperty(key)) {
            var fontSize = keys[key]
            strHtml += `<span class='wordsKey' style="font-size:${fontSize*5}px;" onclick="onKeywordClick('${key}')">${key}</span>`
        }
    }
    document.querySelector('.keyNames').innerHTML = strHtml;
}
function onClearFilter(){
    clearFilterSerach()
}

function onKeywordClick(keyWord){
    var keys = getKeys()
    keys[keyWord]=keys[keyWord]+1||1
    if(keys[keyWord]>8)return
    renderKeywords()
}
