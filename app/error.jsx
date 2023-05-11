"use client";

const error = ({ error, reset }) => {
  return (
    <div>
      This ain't loading up: {error.message}
      <button onClick={() => reset()}>Reload website</button>
    </div>
  );
};

export default error;
