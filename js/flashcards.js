function addWord() {
  var table = document.getElementById("words-list");
  var row = table.insertRow();

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);

  cell1.innerHTML = '<input type="text" name="word">';
  cell2.innerHTML = '<textarea class="definitions"> </textarea><span class="close"> x </span>';
}

function toggleList() {
  $(".list-show").toggle();
}

function resetCards() {
  $("#card-area").html("");
}

function makeCards() {
  var cards = [];
  this.resetCards();
  $("#words-list").find('tr').each(function(){
    var word = "";
    var definition = "";
    $(this).find('input').each(function(){
      word = $(this).val();
    });
    $(this).find('textarea').each(function(){
      definition = $(this).val();
    });
    var c = new Card( word, definition );
    cards.push(c);
  });
  cards.forEach(function(card){
    if (card.word != "") {
      $("#card-area").append(card.view);
    }
  });
}

function Card( word, definition ) {
  this.word = word;
  this.definition = definition;
  this.view = '<div class="click-card-area"> <div class="card word" margin="auto"> ' + this.word + '</div>'
   + '<div class="card definition" style="display:none"> ' + this.definition + '</div> </div>';
}

$(document).ready(function(){
  $('body').on('click', '.click-card-area', function() {
    $(this).find('.card').each(function(){
      $(this).toggle();
    });
  });
});
