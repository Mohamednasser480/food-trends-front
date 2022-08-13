import React from "react";
import { HiOutlinePlusSm, HiOutlineX } from "react-icons/hi";

export default function DragAndDrop({ label, onAddImg, images, onImgRemove }) {
  // console.log(images);
  if (images.length === 0)
    return (
      <div className="flex items-center justify-center font-sans">
        <label
          htmlFor="dropzone-file"
          className="mx-auto flex w-full max-w-lg cursor-pointer flex-col items-center rounded-xl border-2 border-dashed border-blue-400 bg-slate-50 p-6 text-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>

          <h2 className="mt-4 text-xl font-medium tracking-wide text-gray-700">
            {label}
          </h2>

          <p className="mt-2 tracking-wide text-gray-500">
            Upload your files [ SVG, PNG, JPG or GIF ].
          </p>

          <input
            id="dropzone-file"
            type="file"
            name="images"
            className="hidden"
            accept="image/*"
            onChange={(e) => {
              onAddImg(e.target.files);
            }}
          />
        </label>
      </div>
    );

  return (
    <div className="relative flex max-h-[20rem] flex-wrap overflow-y-auto rounded-xl border-2 border-dashed border-blue-400 bg-slate-50 p-3">
      {images.map((image) => (
        <div key={image.id} className="group relative max-h-[11rem] w-1/2 p-2">
          <img className="h-full w-full object-cover" src={image.imgPrev} />
          <button
            type="button"
            className="absolute top-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-white opacity-20 transition-all hover:bg-error hover:text-white group-hover:opacity-100"
            onClick={() => onImgRemove(image.id)}
          >
            <HiOutlineX className="h-5 w-5" />
          </button>
        </div>
      ))}
      <input
        id="dropzone-file"
        type="file"
        name="images"
        className="hidden"
        accept="image/*"

        onChange={(e) => {
          onAddImg(e.target.files);
        }}
      />
      <label
        htmlFor="dropzone-file"
        className="absolute bottom-2 right-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-primary text-white shadow-lg transition-colors hover:bg-black"
      >
        <HiOutlinePlusSm className="h-5 w-5" />
      </label>
    </div>
  );
}
