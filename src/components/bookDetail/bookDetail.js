import React, { Component } from "react";
import { connect } from "react-redux ";
import { deselectBook } from "../../actions";

class bookDetail extends Component {
  renderContent() {
    const { selectedBook } = this.props;
    if (selectedBook.isbn) {
      return (
        <div className="ui cards">
          <div className="card">
            <div className="content">
              <div className="header">{selectedBook.title}</div>
              <div className="description">
                <div>{selectedBook.title}</div>
                <div
                  className="ui bottom attached button "
                  onClick={() => {
                    this.props.deselectBook();
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return <div>Seçili Kitap Bulunmamaktadır !</div>;
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}
//state'den propa bağlanma fonksiyonu
const mapStateToProps = (state) => {
  return {
    selectedBook: state.selectedBook,
  };
};

export default connect(mapStateToProps, { deselectBook })(bookDetail);
