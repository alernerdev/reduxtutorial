import React, {Component} from "react";
import {connect} from "react-redux";
import {selectBook} from "../actions/index";
import { bindActionCreators} from "redux";

class BookList extends Component {
    renderList() {
       return this.props.books.map( (book) => {
            return (
            <li
                key={book.title} 
                onClick={ () => this.props.selectBook(book) }
                className="list-group-item">
                {book.title}
            </li>
          );
       }) 
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

// glue between react and redux
function mapStateToProps(state) {
    // whatever gets returned, shows up as props inside BookList
    return {
        books: state.books
    }
}

// anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
    // whenever selectBook is called, result should be passed to ALL of reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// connect react component with redux
// Promote BookList from component to container -- it needs to know about
// this new dispatch method, selectBook.  Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
