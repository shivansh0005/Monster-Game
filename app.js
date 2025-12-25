const app=Vue.createApp({
    data(){
        return {
          playerHealth:100,
          monsterHealth:100
        }
    },    methods:{
        attackMonster(){

            const randomDamage=Math.floor(Math.random()*10)+1;
            this.monsterHealth-=randomDamage;

            this.attackPlayer();
            



        },

        attackPlayer(){
            const randomDamage=Math.floor(Math.random()*12)+1;
            this.playerHealth-=randomDamage;
            
        }
        
}
})

app.mount('#game');