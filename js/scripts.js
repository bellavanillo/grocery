$(document).ready(function(){
  $("form#grocery").submit(function(event){
    event.preventDefault();

    var blanks =["veggies","fruits","desert"];
    //var upperCase = blanks.toUpperCase();
    //var sort = upperCase.sort();

    alert(sort);
    var newBlank = sort.map(function(blank){
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
      blanks.toUpperCase().sort();
    });
    $("#result").fadeIn();
  });
});
