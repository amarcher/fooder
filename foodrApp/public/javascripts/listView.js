var ListView = function(){
  this.list = "ul.list";
  this.compare = '#show_comparinator'
}

ListView.prototype = {

  clearList: function(){
    $(this.list).html('');
  },

  appendToList: function(item_partial){
    $(this.list).append(item_partial);
    $(this.list + ' > li').last().hide();
    $(this.list + ' > li').last().fadeIn(400);
  },

  selectItem: function(index){
    $(this.list + ' > li:nth-of-type(' + index + ')').css("background-color",'rgb(228, 247, 219)');
  },

  switchToComparinator: function(){
    $(this.compare).text("Select Food")
  },

  switchToTinder: function(){
    $(this.compare).text("Compare Head-to-Head")
  }

}
