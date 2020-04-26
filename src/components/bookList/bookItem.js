import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook, deleteBook } from "../../ actions";

class BookItem extends Component {
  render() {
    const { book } = this.props;
    return (
      <div className="card">
        <div className="content">
          <div className="header">{book.title} </div>
          <div className="description">{book.subtitle}</div>
        </div>
        <div className="extra content">
          <div className="ui two buttons"></div>
          <div
            className="ui basic green button"
            onClick={() => {
              this.props.selectBook(book);
            }}
          >
            SEÇ
          </div>
          <div
            className="ui basic red button"
            onClick={() => {
              this.props.deleteBook(book);
            }}
          >
            KİTABI SİL
          </div>
        </div>
      </div>
    );
  }
}
// state'den değer kullanılayacağı için null seçtik
export default connect(null, { selectBook, deleteBook })(BookItem);
