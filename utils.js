export function objectToArray(obj) {
  return Object.keys(obj).map((key) => obj[key]);
}
export function getSnippetDecksArray(decks, cards) {
console.log("decks",decks,"cards",cards)
  return objectToArray(decks).map((deck) => {
    return {
      id: deck.id,
      title: deck.title,
      cardsCount: getCardsOfDeck(deck.id, cards).length,
    };
  });
}
export function getCardsOfDeck(deckID, cards) {
  return objectToArray(cards).filter((card) => card.deckID == deckID);
}
export function timeConverter(timeStamp) {
  var a = new Date(timeStamp);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + " " + month + " " + year + " " + hour + ":" + min;
  return time;
}
