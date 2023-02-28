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
    //propertie_list handler
    const listHandler = {
        cnvs_width: () => {
            cnvs_width_res = object_list.width

            if(typeof(cnvs_width_res) !== "number" || cnvs_width_res === undefined){
                cnvs_width_res = 400
            }
            return cnvs_width_res
        },
        cnvs_height: () => {
            cnvs_height_res = object_list.height

            if(typeof(cnvs_height_res) !== "number" || cnvs_height_res === undefined){
                cnvs_height_res = 200
            }
            return cnvs_height_res
        },
        rect_fill: object_list.rect_fill,
        back_fill: object_list.back_fill,
    }
    //importing properties
    canvas.width = listHandler.cnvs_width()
    canvas.height = listHandler.cnvs_height()

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

    //distance between rectangles
    let margin_x = 0
    let margin_y = 0

    //trigger for random
    let trigger = 1

    //inner rectangles width and height
    const inner_rect_width = Math.floor(canvas.width / count_x)
    const inner_rect_height = Math.floor(canvas.height / count_y)

    //loop for generating pictures
    for(let i = 0; i < count_x * count_y; i++){
        //randomise logic
        trigger = Math.round(Math.random())
        if(trigger === 1){
            ctxt.beginPath()
            ctxt.rect(margin_x, margin_y, inner_rect_width, inner_rect_height)
            ctxt.fillStyle = object_list.rect_fill
            ctxt.fillRect(margin_x, margin_y, inner_rect_width, inner_rect_height)
            ctxt.stroke()

            distanceLog()

        }else{
            distanceLog()
        }

        function distanceLog(){
            //distance logic
            if(counter_x + 1 === count_x){
                counter_x = 0
                margin_x = 0

                margin_y += inner_rect_height
            }else{
                counter_x++
                margin_x += inner_rect_width
            }
        }
    }
}

rePic(propertie_stroke_1)