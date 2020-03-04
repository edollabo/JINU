var Links = {
  setColor:function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
      alist[i].style.color = color;
      i = i + 1;
    }
  }
}

var Body = {
  setColor:function (color){
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor:function (color){
    document.querySelector('body').style.backgroundColor = color;
  },
  setHeaderColor:function (color){
    document.querySelector('#jb-header').style.backgroundColor = color;
  },
  setContentColor:function (color){
    document.querySelector('#jb-content').style.backgroundColor = color;
  }

}

function nightdayhandler(self){
  var target = document.querySelector('body')
  if(self.value === 'night'){
    Body.setBackgroundColor('black')
    Body.setHeaderColor('#2a3e57')
    Body.setContentColor('#2a3e57')
    Body.setColor('white')
    self.value = 'day';
    Links.setColor('gray');
  } else {
    Body.setBackgroundColor('#406285')
    Body.setHeaderColor('white')
    Body.setContentColor('white')
    Body.setColor('black')
    self.value = 'night';

    Links.setColor('white');
  }
}



$(document).ready(function(){
  $("#보라플립").click(function(){
    $("#보라패널").slideToggle("slow");
  });
});

$(document).ready(function(){
  $("#진우플립").click(function(){
    $("#진우패널").slideToggle("slow");
  });
});
