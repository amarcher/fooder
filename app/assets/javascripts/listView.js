var ListView = function(){
  this.list = "ul.list"
}

ListView.prototype = {

  updateList: function(){
  },

  appendToList: function(item_partial){
    $(this.list).append(item_partial)
    $(this.list + ' > li').last().hide()
    $(this.list + ' > li').last().fadeIn(400)
  }

  selectItem: function(index){
    $(this.list + ' > li:nth-of-type(' + index + ')').css("background-color",'rgb(228, 247, 219)'));
  }

}
