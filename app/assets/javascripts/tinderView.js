var TinderView = function(){
  this.yesButton = "#yes"
  this.noButton = "#no"
  this.view = "#tinder"
}

TinderView.prototype = {

  show: function(){
    $(this.view).removeClass( 'hide' );
  },

  hide: function(){
    $(this.view).addClass( 'hide' );
  },

  replaceFood: function(){

  }

}
