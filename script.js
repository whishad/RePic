const canvas = document.querySelector('canvas')
const ctxt = canvas.getContext('2d')

function PicProperties(width, height, rect_fill, back_fill){
    this.width = width
    this.height = height
    this.rect_fill = rect_fill
    this.back_fill = back_fill
}

const propertie_stroke_1 = PicProperties(100, 100, 'red', 'black')

function rePic(object_list){}