import React from "react";
import Thumbnail from "../components/Thumbnail";
import FlipMove from "react-flip-move";
function Result({ movies }) {
  return (
    <FlipMove className='px-5 mx-10 sm:grid md:grid-cols-2 xl:grid-cols-3 mt-10 3xl:flex flex-wrap justify-center'>
      {movies.map((movie, index) => (
        <Thumbnail key={movie.id} props={movie} />
      ))}
    </FlipMove>
  );
}

export default Result;
