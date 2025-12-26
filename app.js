const app=Vue.createApp({
    data(){
        return {
          playerHealth:100,
          monsterHealth:100,
          round:0,
            logMessages:[]
        }
    },    methods:{
        attackMonster(){

            const randomDamage=Math.floor(Math.random()*10)+1;
            this.monsterHealth-=randomDamage;
            this.checkWin();
            this.round++;
            this.addLogMessage("player", "attacks", randomDamage);
            this.attackPlayer();
            
            



        },

        attackPlayer(){
            const randomDamage=Math.floor(Math.random()*12)+1;
            this.playerHealth-=randomDamage;
             this.checkWin();
            this.round++;
            this.addLogMessage("monster", "attacks", randomDamage);
          
               
            
        },

        specialAttack(){
          
            const randomDamage=Math.floor(Math.random()*20)+1;
            this.monsterHealth-=randomDamage;
            this.round++;
             this.checkWin();
            this.addLogMessage("player", "special attacks", randomDamage);
            this.attackPlayer();
           
        },

        checkWin(){
            if(this.monsterHealth<=0 && this.playerHealth>0){
                alert("You won!");
       
                this.playerHealth=100;
                this.monsterHealth=100;
            }

            else if(this.playerHealth<=0 && this.monsterHealth>0){
                alert("You lost!");

                this.playerHealth=100;
                this.monsterHealth=100;
                this.logMessages=[];

            }
            else if(this.playerHealth<=0 && this.monsterHealth<=0){
                alert("It's a tie!");
                this.playerHealth=100;
                this.monsterHealth=100;
                this.logMessages=[];
            }
        },
        healPlayer(){
            const healAmount=Math.floor(Math.random()*15)+1;
            this.playerHealth+=healAmount;

            if(this.playerHealth>100){
                this.playerHealth=100;
            }
            this.round++;
            this.addLogMessage("player", "heals", healAmount);
            this.attackPlayer();
            this.checkWin();
           
        },
        surrender(){
            alert("You surrendered! Monster wins!");
            this.playerHealth=100;
            this.monsterHealth=100;
            this.round=0;
        },

        addLogMessage(who, what, value){
            console.log(who, what);
            this.logMessages.unshift({
                actionBy:who,
                actionType:what,
                actionValue:value
            });
        }
        
}
})

app.mount('#game');