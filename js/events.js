//define functions here

$(document).ready(function(){

  getIt()
  frameIt()
  submitIt()
  pressIt()
});


function getIt(){
  return $('p').on('click', function(){
    alert("Hey!")
  })
}

function frameIt(){
  return $('img').on('load', function(){
    return $('img').addClass('tasty')
  })
}

function submitIt(){
  return $('form').on('submit',function(){
    alert('Your form is going to be submitted now.')
  })
}

function pressIt() {
  return $('#typing').on('keydown', function(key){
    if (key.which===71) {
      alert('g was pressed')
    }
  })
}
