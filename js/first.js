new Vue({
    el: '#app',
    delimiters: ['${', '}'],
    data: {
        msg: 'Hellow world!',
        actValue: 0,
        itemList: [
            {name: 'opshell', value: 20},
            {name: 'death', value: 23},
            {name: 'adven', value: 456},
            {name: 'bear', value: 229},
            {name: 'kaven', value: 0},
        ],
        count: 0
    },
});

/*
    某些後臺程式會洗掉{{}}
    所以可以用"delimiters"這個參數宣告別的判別符號(界定符)
*/