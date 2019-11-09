const vm = new Vue({
    el: '#test',
    delimiters: ['${', '}'],
    data: {
        msg: 'Hellow world!',
        actValue: 0,
        itemList: [
            { name: 'opshell', value: 5 },
            { name: 'death', value: 23 },
            { name: 'adven', value: 456 },
            { name: 'bear', value: 229 },
            { name: 'kaven', value: 0 },
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

    4. computed{
        cpmputed 和 methods 很像，
        不同的是，
        computed 是根據相依的資料改變時才做計算，
        而 method 是不管有無相依都會計算。

        在 Vue 中 computed 是經常會使用到的屬性，
        因為在 Vue 中透過 computed 會 cache 住沒有改變的資料，
        因此正確且適當的使用 computed 將可以減少資料重新運算的次數，
        讓網頁的效能提升。

        但是在使用的過程中，
        有時候會發現 computed 怎麼樣就是不被觸發，
        這當中有些細節是我們可以進一步瞭解的。
    }

*/



const bmi = new Vue({
    el: '#bmi',
    delimiters: ['${', '}'],
    data: {
        height: null,
        weight: null,
    },
    computed: {
        bmi: { 
            get() { 
                const weight = Number(this.weight);
                const height = Number(this.height) / 100;
                const bmi = weight / (height * height);
                return bmi || 0;
            },
            set(bmi) { 
                const height = Number(this.height) / 100;
                const w = bmi * (height * height);
                
                if (this.weight != w) this.weight = w;
            }
        }
    }
});
/*
    computed 渲染時會自己取 get,
    異動時會自己跑 set 並帶入異動後的值
    BMI範例 => {
        輸入身高體重會算目前的BMI => get
        調整BMI後就能知道要到較健康的BMI體重需要增減多少 => set
    }
*/
