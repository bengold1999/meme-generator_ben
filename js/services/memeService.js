'use strict'

let gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
            { id: 2, url: 'img/2.jpg', keywords: ['funny', 'cat'] }]
let gMeme

function _createMeme(){
    gMeme = {
        selectedImgId: null,//back here 
        selectedLineIdx: 0,
        url: '', // back here
        lines: [
            {
                txt: '',
                size: 20,
                color: 'red',
                x: 100,
                y: 100
            }
        ]
    }
}
var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

function getMeme() {
    var CurrentImg = gImgs.find(img => gMeme.selectedImgId === img.id)
     console.log(CurrentImg)
    gMeme.url = CurrentImg.url
    return gMeme
}

function getImgs(){
    return gImgs
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

function setImg(elImg){
    gMeme.selectedImgId = parseInt(elImg.id,10)
}