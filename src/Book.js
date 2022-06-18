import React from "react";

const Book = (props) => {
  // console.log(props);
  const { title, author, img } = props.book;

  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Hellow click");
  };

  const complexexample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      {/* <Image></Image>
        <Title></Title>
        <Author></Author> */}

      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <button type="button" onClick={() => complexexample(author)}>
        complext button
      </button>
    </article>
  );
};

export default Book;
