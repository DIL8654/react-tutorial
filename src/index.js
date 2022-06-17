import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

//setup variables

const books = [
  {
    id: 1,
    title: "Mastering Kafka with Oreilly",
    author: "Mitch Seymour",
    img: "https://images-na.ssl-images-amazon.com/images/I/51BCQMHrV2S._SX379_BO1,204,203,200_.jpg",
  },
  {
    id: 2,
    title: "Head First JavaScript Programming",
    author: "Eric Preeman",
    img: "https://images-na.ssl-images-amazon.com/images/I/51kTKuJSlqS._SX422_BO1,204,203,200_.jpg",
  },
  {
    id: 3,
    title: "Head First Java",
    author: "Cathey Sierra",
    img: "https://images-na.ssl-images-amazon.com/images/I/51dBjBGQFXS._SX431_BO1,204,203,200_.jpg",
  },
];

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

const Book = (props) => {
  // console.log(props);
  const { title, author, img } = props.book;

  const clickHandler = () => {
    alert("Hellow click");
  };
  return (
    <article className="book">
      {/* <Image></Image>
      <Title></Title>
      <Author></Author> */}

      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        {" "}
        reference example
      </button>
    </article>
  );
};

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
