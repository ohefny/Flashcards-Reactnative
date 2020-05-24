export function objectToArray(obj) {
  return Object.keys(obj).map((key) => obj[key]);
}
export function getSnippetDecksArray(decks, cards) {
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
