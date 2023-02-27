const canvas = document.querySelector('canvas')
const ctxt = canvas.getContext('2d')

function PicProperties(width, height, rect_fill, back_fill){
    this.width = width
    this.height = height
    this.rect_fill = rect_fill
    this.back_fill = back_fill
}

const propertie_stroke_1 = new PicProperties(100, 100, 'red', 'black')

function rePic(object_list){
    //importing properties
    canvas.width = object_list.width
    canvas.height = object_list.height

    //creating background
    ctxt.fillStyle = object_list.back_fill
    ctxt.fillRect(0,0,canvas.width,canvas.height)
}

rePic(propertie_stroke_1)