import React, { Component } from "react";
import { connect } from "react-redux";
import { addBook } from "../../actions";
import BookItem from "./bookItem";
import "./bookList.css";
// içinden bir değer import edilmek istenseydi { }  kullanılır
class BookList extends Component {
  render() {
    const { bookList } = this.props;
    return (
      <div className="book-list-container ui cards ">
        {bookList.map((book) => (
          <BookItem key={book.isbn} book={book} />
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    bookList: state.bookList,
  };
};

export default connect(mapStateToProps, { addBook })(BookList);
