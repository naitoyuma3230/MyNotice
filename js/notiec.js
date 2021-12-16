(function(){
  'use strict';

  let notice = new Vue({
    el :"#notice_vue",
    data:{
      articles:[]
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
      deleteItem: function(index){
        if(confirm("この記事を削除してもいいですか？")){
          this.articles.splice(index, 1);
        }
      },
      deleteTag: function(i, index){
        this.articles[index].target[i].check = false;
        
        
      },
      checkAll: function(index){
        if(this.articles[index].checkAll){ 
          for(let i = 0; i < this.articles[index].target.length; i++){
            this.articles[index].target[i].check = true;
          }
        }else{
          for(let i = 0; i < this.articles[index].target.length; i++){
            this.articles[index].target[i].check = false;
          }
        }
      },
      checkChild: function(index){
        let count = 0;
        for(let i = 0; i < this.articles[index].target.length; i++){
          if(this.articles[index].target[i].check){
            count ++;
          }
        }
        if(count >= this.articles[index].target.length){
          this.articles[index].checkAll = true;
        }else{
          console.log(count);
          this.articles[index].checkAll = false;
        }
      },
      checkedDelete: function(){
        if(confirm("チェックした記事を全て削除します")){
          this.articles = this.deletedArray;
        }
      }
    },
    mounted:function(){
      this.articles = JSON.parse(localStorage.getItem("articles")) || [];
    },
    computed:{
      deleteIdCount: function(){
        let count = 0;
        for(let i = 0; i < this.articles.length; i++){
          if(this.articles[i].deleteId){
            count ++;
          }
          if(count > 0){
            return true;
          }
        }
      },
      deletedArray: function(){
        let deletedItem = this.articles.filter(function(d){
          return !d.deleteId;
        });
        return deletedItem;
      }
    }
  })


})();