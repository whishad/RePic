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

    //getting canvas width first number,for future Math calculation
    const width_num = Number(String(canvas.width)[0])
    const height_num = Number(String(canvas.height)[0])

    //number of rectangles by x and y
    const count_x = width_num * 3
    const count_y = height_num * 3

    //counter for counting the distance traveled by x
    let counter_x = 0
    
    //inner rectangles width and height
    const inner_rect_width = Math.floor(canvas.width / count_x)
    const inner_rect_height = Math.floor(canvas.height / count_y)

    //loop for generating pictures
    for(let i = 0; i < count_x * count_y; i++){
        ctxt.beginPath()
        ctxt.rect(0, 0, inner_rect_width, inner_rect_height)
        ctxt.fillStyle = object_list.rect_fill
        ctxt.fillRect(0, 0, inner_rect_width, inner_rect_height)
        ctxt.stroke()
    }
}

rePic(propertie_stroke_1)