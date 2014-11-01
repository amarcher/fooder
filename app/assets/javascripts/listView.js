var ListView = function(){
  this.list = "ul.list"
}

ListView.prototype = {

  updateList: function(){
  },

  appendToList: function(item_partial){
    $(this.list).append(item_partial)
  }

}
