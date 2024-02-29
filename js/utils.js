'use strict'

let gStartPos

addMouseListeners()
addTouchListeners()

const TOUCH_EVENTS = ['touchstart', 'touchmove', 'touchend']

function getEvPos(ev) {
	let pos = {
		x: ev.offsetX,
		y: ev.offsetY,
	}

	if (TOUCH_EVENTS.includes(ev.type)) {
		
		ev.preventDefault()         
		ev = ev.changedTouches[0]   


		pos = {
			x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
			y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
		}
	}
	return pos
}


function addMouseListeners() {
	gElCanvas.addEventListener('click', onclickLine)
	// gElCanvas.addEventListener('mousemove', onMove)
	// gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
	gElCanvas.addEventListener('touchstart', onclickLine)
	// gElCanvas.addEventListener('touchmove', onMove)
	// gElCanvas.addEventListener('touchend', onUp)
}
