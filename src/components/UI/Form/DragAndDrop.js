import React from 'react';

export default function DragAndDrop({ label }) {
  return (
    <div className="mt-10 flex items-center justify-center font-sans">
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
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>

        <h2 className="mt-4 text-xl font-medium tracking-wide text-gray-700">{label}</h2>

        <p className="mt-2 tracking-wide text-gray-500">
          Upload or darg & drop your file SVG, PNG, JPG or GIF.
        </p>

        <input id="dropzone-file" type="file" className="hidden" />
      </label>
    </div>
  );
}
