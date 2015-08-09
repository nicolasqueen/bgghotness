function getGames(data) {
      var htmlBGG = "<ul>";
      data.forEach(function(game, index, a) {
        htmlBGG += "<li class='indItem'>";
        htmlBGG += "<a href='https://www.boardgamegeek.com/boardgame/";
        htmlBGG += game.gameId + "/";
        htmlBGG += game.name + "'>";
        htmlBGG += "<img src='https:" + game.thumbnail + "'></a><p>";
        htmlBGG += "<strong>" + (index + 1) + ". ";
        htmlBGG += game.name + "</strong></li>";
      });
      
      htmlBGG += "</ul>";
      $('#games').html(htmlBGG);
}

$(document).ready(function(){
    var bggAPI = "https://bgg-json.azurewebsites.net/hot";

    $.getJSON(bggAPI, getGames);

});