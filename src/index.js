import React from "react";
import ReactDom from "react-dom";
import { books } from "./Books";
import Book from "./Book";
//CSS
import "./index.css";

//setup variables

function BookList() {
  return (
    <section className="bookList">
      {books.map((book, index) => {
        return <Book key={book.id} book={book}></Book>;
      })}
    </section>
  );
}

// function BookList() {
//   return (
//     <>
//       <section className="bookList">
//         <Book
//           title={defaultBook.title}
//           author={defaultBook.author}
//           img={defaultBook.img}
//         >
//           <p>lorem20 description</p>
//         </Book>
//         <Book
//           title="Mastering Kafka with Oreilly-2"
//           author="Mitch Seymour-2"
//           img="https://images-na.ssl-images-amazon.com/images/I/51BCQMHrV2S._SX379_BO1,204,203,200_.jpg"
//         />
//       </section>
//     </>
//   );
// }

// seperate components
const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/51BCQMHrV2S._SX379_BO1,204,203,200_.jpg"
    alt=""
  />
);

const Title = () => <h1>Mastering Kafka</h1>;
const Author = () => (
  <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
    Mitch Seymour
  </h4>
);
// end

ReactDom.render(<BookList />, document.getElementById("root"));
