var app = new Vue({
    el: '#app',
    data: {
        name:"キマイラ",
        count: 0,
        message: {
            value :'Hello, Vue'
        },
        list:['apple','orange',"strawberry"],
        num: 1,
        bind: "value",
        ok: true,
        ng: false,
        monsters: [
            {id: 1, name: "スライム", hp: 100},
            {id: 2, name: "ゴブリン", hp: 300},
            {id: 3, name: "ドラゴン", hp: 500}
        ],
    },
    methods: { 
        increment: function(){
            this.count += 1
        },
        doAdd: function(){
            const max = this.monsters.reduce(function(a,b){
                console.log(a);
                return a > b.id ? a : b.id
            },0)

            this.monsters.push({
                id: max + 1,
                name: this.name,
                hp: 500
            })
        },
        doRemove: function(index) {
            this.monsters.splice(index,1);
        },
        attack: function(index){
            this.monsters[index].hp -= 10;
        }
    }
})