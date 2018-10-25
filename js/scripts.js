function numbers(even){
  var evenNumbers = [];
  // console.log(evenNumbers);
  for (var i = 0; i <= even; i++){
    if(i % 2 !== 0){
      evenNumbers.push(i);
    }
  }
  return evenNumbers;
}

//user input

$(document).ready(function(){
  $("form#info").submit(function(event){
    event.preventDefault();

    var input = parseInt($("input#number").val());
    var result = numbers(input);
    $("#output").text(result);
  });
});
