'use strict'
let gElCanvas
let gCtx

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    resizeCanvas()

    renderMeme()
    window.addEventListener('resize', () => renderMeme())
    setLineTxt()
}

function renderMeme() {

    const selctedImg = getMeme()

    const img = new Image()
    console.log(selctedImg)
    img.src = selctedImg.url



    img.onload = () => {
        gElCanvas.height = (img.naturalHeight / img.naturalWidth) * gElCanvas.width
        gCtx.drawImage(img, 0, 0,gElCanvas.width, gElCanvas.height)
        selctedImg.lines.forEach(line=> drawText(line.txt,line.x,line.y))
        
    }
}





function resizeCanvas() {
    const elContainer = document.querySelector('.canvas')
    gElCanvas.width = elContainer.width //// back here!
   renderMeme()
}




function drawText(text,x,y) {
    

    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'orange'

    gCtx.fillStyle = 'lightsteelblue'

    gCtx.font = '45px Arial'
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    gCtx.fillText(text,x,y)
    gCtx.strokeText(text,x,y)
}


