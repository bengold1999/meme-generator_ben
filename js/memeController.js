'use strict'
let gElCanvas
let gCtx

function renderMeme() {
    const selectedMeme = getMeme()
    if (!selectedMeme) return

    const img = new Image()
    img.src = selectedMeme.url

    img.onload = () => {
        gElCanvas.height = (img.naturalHeight / img.naturalWidth) * gElCanvas.width
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        selectedMeme.lines.forEach((line, index) =>
            drawText(line, index === selectedMeme.selectedLineIdx))
    }
}



function drawText(line, isSelected) {
    gCtx.save()
    gCtx.lineWidth = 2
    gCtx.strokeStyle = line.color

    gCtx.fillStyle = line.color

    gCtx.font = `${line.size}px Arial`
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    if (isSelected) {
        const padding = 5
        const textWidth = gCtx.measureText(line.txt).width
        gCtx.fillStyle = 'rgba(0,0,0, 0.2)'
        gCtx.fillRect(line.x - textWidth / 2 - padding, line.y - line.size / 2 - padding, textWidth + padding * 2, line.size + padding * 2)

    }

    gCtx.fillText(line.txt, line.x, line.y)
    gCtx.strokeText(line.txt, line.x, line.y)
    gCtx.restore()
}

function onImgSelect(elImg) {
    createMeme(elImg.id, elImg.src)
    renderMeme()
    updateUserColor()
    updateUserInput()
    showEditor()
}

function onAddLine() {
    addLine()
    renderMeme()
}

function onLineTextChanged() {
    setLineTxt()
    renderMeme()
}

function onSwitchLine() {
    switchLine()
    renderMeme()
    updateUserColor()
    updateUserInput()
}

function onIncreaseSize() {
    increaseSize()
    renderMeme()
}

function onDecreaseSize() {
    decreaseSize()
    renderMeme()
}

function onColorPicked(colorValue) {
    switchColor(colorValue)
    renderMeme()
}

function updateUserInput() {
    const selectedMeme = getMeme()
    if (!selectedMeme) return
    var userText = document.querySelector('.text-meme')
    userText.value = selectedMeme.lines[selectedMeme.selectedLineIdx].txt
}

function updateUserColor() {
    const selectedMeme = getMeme()
    if (!selectedMeme) return
    var userColor = document.querySelector('.text-color')
    userColor.value = selectedMeme.lines[selectedMeme.selectedLineIdx].color
}

function downloadMeme(elLink) {
    elLink.download = 'my-meme'
    const dataUrl = gElCanvas.toDataURL()
    gCtx.clea
    elLink.href = dataUrl
}

function onDownloadMeme(elLink) {
    downloadMeme(elLink)
}



function onclickLine(ev) {
    const pos = getEvPos(ev)
    const meme = getMeme()
    let lineSelected = false

    meme.lines.forEach((line, idx) => {
        if (Math.abs(pos.y - line.y) < line.size / 2 + 10) {
            meme.selectedLineIdx = idx
            lineSelected = true
        }
    })

    if (lineSelected) {
        renderMeme()
        updateUserInput()
        updateUserColor()
    }

}

