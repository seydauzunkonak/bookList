import { combineReducers } from "redux";
import books from "./books.json";

const bookListReducer = (oldBookList = books, action) => {
  if (action.type === "ADD_BOOK") {
    // kitap listesine ekle
    return [...oldBookList, action.payload];
  } else if (action.type === "DELETE_BOOK") {
    // kitap listesinden çıkar
    return oldBookList.filter(
      (oldBook) => oldBook.title !== action.payload.title
    );
  }
  return oldBookList;
};
const selectedBookReducer = (oldSelectedBook = {}, action) => {
  if (action.type === "SELECT_BOOK") {
    // kitap seçme işlemini yap
    return action.payload;
  } else if (action.type === "DESELECT_BOOK") {
    // kitap seçimini kaldır
    return {};
  } else if (action.type === "DELETE_BOOK") {
    return oldSelectedBook.isbn === action.payload.isbn ? {} : oldSelectedBook;
  }
  return oldSelectedBook;
};

export default combineReducers({
  bookList: bookListReducer,
  selectedBook: selectedBookReducer,
});
