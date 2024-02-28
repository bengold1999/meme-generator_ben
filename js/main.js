function onInit() {
    renderGallery()
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    _createMeme()
    renderGallery()
    // resizeCanvas()
    setLineTxt()
}

onInit()
