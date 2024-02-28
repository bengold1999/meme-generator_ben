'use strict'

// let gCurrentImg

var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] }]
          
var gMeme = {
    selectedImgId: 1,//back here 
    selectedLineIdx: 0,
    url: '', // back here
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 20,
            color: 'red',
            x: 100,
            y: 100
        }
    ]
}
var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }



function getMeme() {
    var CurrentImg = getMemeFromImg() ////back here
    gMeme.url = CurrentImg.url
    return gMeme
}


function getMemeFromImg() {
    var CurrentImg = gImgs.find((meme) => gMeme.selectedImgId === meme.id)
    return CurrentImg
}



function setLineTxt() {

    var userText = document.querySelector('.text-meme')
    userText.addEventListener('input', () => {
        if (gMeme.lines.length > 0) {
            gMeme.lines[gMeme.selectedLineIdx].txt = userText.value
            renderMeme()
        }
    })



}


