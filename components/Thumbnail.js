import React from "react";
import { forwardRef } from "react";
import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";

const Thumbnail = forwardRef(({ props }, ref) => {
  const baseUrl = "https://image.tmdb.org/t/p/original";
  return (
    <div
      ref={ref}
      className='group cursor-pointer p-2 transition duration-500 ease-in-out transform sm:hover:scale-105 hover:z-50'
    >
      <Image
        src={`${baseUrl}${props.backdrop_path || props.poster_path}`}
        alt={props.title}
        className='object-contain w-auto h-auto'
        height={1080}
        width={1920}
      />
      {/* <img
        src={`${baseUrl}${props.backdrop_path || props.poster_path}`}
        alt={props.title}
        loading='lazy'
        className='object-contain w-auto h-auto'
      /> */}
      <div className='p-2'>
        <p className='truncate max-w-md'>{props.overview}</p>
        <h3 className='mt-1 text-xl text-white transition duration-100 ease-in-out group-hover:font-bold'>
          {props.title || props.original_name}
        </h3>
        <p className='flex opacity-0 group-hover:opacity-100'>
          {props.media_type} {props.release_date || props.first_air_date}{" "}
          <ThumbUpIcon className='h-5 mx-2' />
          {props.vote_count}
        </p>

        <p></p>
      </div>
    </div>
  );
});

export default Thumbnail;
