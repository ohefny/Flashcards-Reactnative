import { getInitialData } from "../../api";
import { receiveDecks } from "../actions/decks";
import { receiveCards } from "../actions/cards";
import { showLoading, hideLoading } from "../actions/loading";

export function handleInitialData(dispatch) {
  dispatch(showLoading());
  getInitialData().then(({ decks, cards }) => {
    dispatch(receiveDecks(decks));
    dispatch(receiveCards(cards));
    dispatch(hideLoading());
  });
}
