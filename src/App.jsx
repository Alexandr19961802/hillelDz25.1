import React from "react";

function Hello(props) {
  return <h1>Hello {props.name}</h1>;
}

export default function App() {

  const elJSX = <h1>Hello Alex</h1>;
  const elNoJSX = React.createElement("h1", null, "Hello Alex");

  console.log(elJSX);
  console.log(elNoJSX);

  const card = (
    <div className="card">
      <h2>Title</h2>
      <p>Text</p>
    </div>
  );

  console.log(card);

  const movies = [
    { id: 1, title: "Interstellar", year: 2014 },
    { id: 2, title: "Inception", year: 2010 },
    { id: 3, title: "Matrix", year: 1999 },
  ];

  const isLoggedIn = false;

  return (
    <div>

      <Hello name="Alex" />

      {elJSX}

      {card}

      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            {movie.title} ({movie.year})
          </li>
        ))}
      </ul>

      {isLoggedIn ? <h2>Welcome!</h2> : <h2>Please log in</h2>}

    </div>
  );
}