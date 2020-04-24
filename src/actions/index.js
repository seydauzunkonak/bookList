//Aksiyonlar
//Kitap ekleme
const addBook = ({ isbn, title, subtitle, description, author, pages }) => {
  return {
    //Aksiyon objesi
    type: "ADD_BOOK",
    payload: {
      isbn,
      title,
      subtitle,
      description,
      author,
      pages,
    },
  };
};

// kitap silme
const deleteBook = (book) => {
  return {
    type: "DELETE_BOOK",
    payload: book,
  };
};

// kitap seçme
const selectBook = (book) => {
  return {
    type: "SELECTED_BOOK",
    payload: book,
  };
};

// kitap seçmeme
const deselectBook = () => {
  return {
    type: "DESELECT_BOOK",
  };
};
export { addBook, deleteBook, selectBook, deselectBook };
