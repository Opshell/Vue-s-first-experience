const vm = new Vue({
    el: '#app',
    delimiters: ['${', '}'],
    data: {
        msg: 'Hellow world!',
        actValue: 0,
        itemList: [
            {name: 'opshell', value: 5},
            {name: 'death', value: 23},
            {name: 'adven', value: 456},
            {name: 'bear', value: 229},
            {name: 'kaven', value: 0},
        ],
        count: 0,
        spac: 1
    },
    methods: {
        addCount: function (spac) { 
            let spa = spac || 1;
            this.count += Number(spa);
        }
    }
});

/*
    某些後臺程式會洗掉{{}}
    所以可以用"delimiters"這個參數宣告別的判別符號(界定符)

    3. 雙向綁定v-model 結合 methods 的互動{
        那在寫 function 的時候要注意一點，
        一定要用 function(){} 的方式，
        這樣子裡面使用 this 才會指向 Vue 實例，
        不要使用箭頭函式(arrow function)，
        因為這樣 this 就不會是指向 Vue 實例，
        就會沒辦法取到 Vue 實例其他的方法。
    }
*/