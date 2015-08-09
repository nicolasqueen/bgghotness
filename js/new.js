function getGames(data) {
  var htmlString = "<ul>";

  data.forEach(function(v, i, a) {
    htmlString += "<li><a href='https://www.boardgamegeek.com/boardgame/'" + v.gameId + "/";
    htmlString += v.name + ">";
    htmlString += "<img src='http://" + v.thumbnail + "'></a></li>";
  });

  htmlString += "</ul>";

  $('#games').html(htmlString);
}

$(document).ready(function() {
  var bggAPI = "https://bgg-json.azurewebsites.net/hot?callback=getGames";

  $.ajax({
    dataType: "json",
    url: bggAPI,
  });
});