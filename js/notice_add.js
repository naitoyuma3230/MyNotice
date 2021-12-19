(function(){
  let notice_add = new Vue({
    el :"#notice_add",
    data: {
      message:"お知らせを追加",
      articles:[],
      newItem:{
        title:"ここにタイトルを入力",
        comment:"ここにコメントを入力",
        day:"1991-11-18",
        checkAll: false,
        deleteId:false,
        target:[
          {
          id:1,
          name:"訪問看護",
          check: false,
        },{
          id:2,
          name:"訪問介護",
          check: false,
        },{
          id:3,
          name:"通所介護",
          check: false,
        },{
          id:4,
          name:"訪問リハビリ",
          check: false,
        },{
          id:5,
          name:"入所介護",
          check: false,
        },{
          id:6,
          name:"入所リハビリ",
          check: false,
        }
      ]
      },

    },
    mounted:function(){
      this.articles = JSON.parse(localStorage.getItem("articles")) || [];
    },
    watch:{
      articles:{
        handler: function(){
          localStorage.setItem("articles",JSON.stringify(this.articles));
        },
        deep: true
      }
    },
    methods: {
      addItem: function(){
        let item = {
          title: this.newItem.title,
          comment: this.newItem.comment,
          day: this.newItem.day,
          checkAll: this.newItem.checkAll,
          deleteId:this.newItem.deleteId,
          target: this.newItem.target
        };
        this.articles.push(item);

        // localStorage.setItem("articles", JSON.stringify(this.articles));
        // localStorage.setItem("test", JSON.stringify(this.testdata));
        alert("お知らせを追加しました");
        this.newItem = [{
          title:"ここにタイトルを入力",
          comment:"ここにコメントを入力",
          day:"1991-11-18",
          checkAll: false ,
          target:[{
            id:1,
            name:"訪問看護",
            check: false,
          },{
            id:2,
            name:"訪問介護",
            check: false,
          },{
            id:3,
            name:"通所介護",
            check: false,
          },{
            id:4,
            name:"訪問リハビリ",
            check: false,
          },{
            id:5,
            name:"入所介護",
            check: false,
          },{
            id:6,
            name:"入所リハビリ",
            check: false,
          }]
        }]
      },
      checkAll: function(){
        if(this.newItem.checkAll){ 
          for(let i = 0; i < this.newItem.target.length; i++){
            this.newItem.target[i].check = true;
          }
        }else{
          for(let i = 0; i < this.newItem.target.length; i++){
            this.newItem.target[i].check = false;
          }
        }
      },
      checkChild: function(){
        let count = 0;
        for(let i = 0; i < this.newItem.target.length; i++){
          if(this.newItem.target[i].check){
            count ++;
          }
        }
        if(count >= this.newItem.target.length){
          this.newItem.checkAll = true;
        }else{
          console.log(count);
          this.newItem.checkAll = false;
        }
      }
    }

  })
})();
