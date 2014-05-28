
var Factor = function(x, y, o) {
    this.x = x;
    this.y = y;
    this.o = o;//orientation
};

var Rect = function(w, h, x, y) {
    this.height = h;
    this.width = w;
    this.posX = x;
    this.posY = y;
    this.draw = function(canvas) {
        var ctx = canvas.getContext("2d");
        ctx.rect(this.posX, this.posY, this.width, this.height);
        ctx.stroke();
    };
};

var Models = {
    avatar: {
        w: 180,
        h: 540
    },
    cover: {
        w: 851,
        h: 315
    }
};

var Samples = {
    //3x102 ; 1x304; 1x250+5x50; 2x155   
    //sample1: [[102,102,102],[304],[250,50,50,50,50,50],[150,150]]
    sample1: { 
        factores: [ //
            [new Factor(0.11985898942, 0.32380952381,0), new Factor(0.11985898942, 0.32380952381,0), new Factor(0.11985898942, 0.32380952381,0)],
            [new Factor(0.357226792  , 0.96825396825,0)], 
            [new Factor(0.2937720329 , 0.79365079365,0),new Factor(0.05875440658,0.15873015873,1),new Factor(0.05875440658,0.15873015873,1),new Factor(0.05875440658,0.15873015873,1),new Factor(0.05875440658,0.15873015873,1),new Factor(0.05875440658,0.15873015873,1)], 
            [new Factor(0.1821386604 , 0.47619047619,0),new Factor(0.1821386604, 0.47619047619,0)]
        ],
        draw: function(canvas,model,mx,my){
            var lastGreater = 0;
            var i = 0;
            var j = 0;
            for (i = 0; i < this.factores.length - 1; i++) {
                for(j = 0; j < this.factores[i].length; j++) {
                    var factor = this.factores[i][j];
                    var w = factor.x * model.w;
                    var h = factor.y * model.h;
                    var x = mx + i* factor.x;
                    var y = my + j * h;
                    //vertical = 0; horizontal = 1
                    if(factor.o === 1){
                        if(j > 0){
                            if(this.factores[i][j-1].o === factor.o){
                                x = mx + (j-1) * w;                          
                            }
                        }
                        y = model.h + h * (-i + 0.7) + i * my;
                    }
                    var r = new Rect(w,h,x,y);
                    var g = (w > h) ? w : h;
                    if(g > lastGreater) lastGreater = g; 
                    r.draw(canvas);
                }
                mx += lastGreater + my;
            }
            //last column
            for(j = 0; j < this.factores[i].length; j++) {                    
                var factor = this.factores[i][j];
                var w = factor.x * model.w;
                var h = factor.y * model.h;
                var x = model.w - w - 2 * my;
                var y = my + j * h;
                var r = new Rect(w,h,x,y);
                var g = (w > h) ? w : h;
                if(g > lastGreater) lastGreater = g; 
                r.draw(canvas);
            }
        }
    }
};
