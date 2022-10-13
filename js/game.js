class Game{
    constructor(ctx, width, height, player){
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.player = player;
        this.intervalId = null;
        this.obstacles = [];
        this.frames = 0;
    } 

     start(){
        this.intervalId = setInterval(this.update, 500 / 60);
    } 

    clear(){
        this.ctx.clearRect ( 0, 0, this.width, this.height)
    }

    score() {
        const points = Math.floor(this.frames / 15);
        this.ctx.font = "22px monospace";
        this.ctx.fillStyle = "black";
        this.ctx.fillText (`Score: ${points}` , 320, 50);
    }

    update = () => {
        this.frames++;
        this.clear();
        this.player.newPos();
        this.player.draw();
         this.updateObstacles(); 
         this.checkGameOver();
         this.score(); 
    };

    stop(){
        clearInterval(this.intervalId);
    }

    checkGameOver() {
        const crashed = this.obstacles.some((obstacle) => {
            return this.player.crashWith(obstacle);
        });

        if(crashed){
            this.stop();
        }

        
    }

    updateObstacles() {
        for (let i = 0; i < this.obstacles.length; i++ ) {
            this.obstacles [i].y += 1;
            this.obstacles[i].draw();
   
        }




        if (this.frames % 180 === 0){
            let y = 300;
            
            let minWidth = 50
            let maxWidth = 300

            let width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth)

            let randomX = Math.floor(Math.random() * 500);
         
            


            
            this.obstacles.push(new Component(randomX - width, 0, width, 30, "blue", this.ctx))

            
        } 
    }


}