import React from "react";

const BookItem = ({ book }) => {
  return (
    <div className class="card">
      <div className="content">
        <div className="header">{book.title} </div>
        <div className="description">{book.subtitle}</div>
      </div>
      <div className="extra content">
        <div className="ui two buttons"></div>{" "}
      </div>{" "}
    </div>
  );
};
export default BookItem;
