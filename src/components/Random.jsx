import useGif from "../hooks/useGif";
import Spinner from "./Spinner";

const Random = () => {
  const { gif, loading, fetchData } = useGif();

  return (
    <div className="max-w-4xl mx-auto p-5 md:p-10 lg:p-15 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-5">
      <h1 className="text-xl md:text-2xl lg:text-3xl uppercase underline font-bold">
        A Random Gif
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <img
          src={gif}
          alt="Random Gif"
          className="w-full h-auto max-w-sm md:max-w-lg lg:max-w-xl"
        />
      )}
      <button
        onClick={fetchData}
        className="w-full max-w-md bg-white text-base md:text-lg lg:text-xl py-2 rounded-lg font-bold"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
