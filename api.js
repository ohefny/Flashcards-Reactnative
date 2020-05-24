import { AsyncStorage } from "react-native";

const DECKS_STORAGE_KEY = "DECKS_STORAGE_KEY";
const CARDS_STORAGE_KEY = "CARDS_STORAGE_KEY";

export function fetchDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY);
}

export function addDeck(deck) {//{id,title,creationDate,numberOfPractices,lastResult}
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).andThen((decks) => {
    initDecks = decks == null ? {} : decks;
    initDecks[deck.id] = deck;
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(initDecks));
  });
}
export function fetchCards() {
  return AsyncStorage.getItem(CARDS_STORAGE_KEY)
}

export function addCard(card) {//{id,answer,question,deckID}
  return AsyncStorage.getItem(CARDS_STORAGE_KEY).andThen((cards) => {
    initCards = cards == null ? {} : cards;
    initCards[card.id] = card;
    AsyncStorage.setItem(CARDS_STORAGE_KEY, JSON.stringify(initCards));
  });
}

export function removeEntry(key) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then((results) => {
    const data = JSON.parse(results);
    data[key] = undefined;
    delete data[key];
    AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data));
  });
}
export function getInitialData () {
  return Promise.all([
    fetchDecks(),
    fetchCards(),
  ]).then(([decks, cards]) => ({
    decks,
    cards,
  }))
}
function objectToArray(obj) {
    return Object.keys(obj).map((key) => obj[key]);
  }