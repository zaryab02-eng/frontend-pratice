import { useState } from "react";

const Likes = () => {
  const [likes, setLikes] = useState(0);
  const [disLikes, setdisLikes] = useState(0);

  return (
    <>
      <div className="flex flex-col gap-y-2">
        <div className="flex gap-2">
          <p className="p-2 bg-gray-300 border border-red-400 text-black">
            Likes:{likes}
          </p>
          <p className="p-2 bg-gray-300 border border-red-400 text-black">
            DisLikes:{disLikes}
          </p>
        </div>
        <div className="flex gap-4">
          <button
            className="px-3.5 py-1 rounded bg-green-600 hover:bg-green-500 hover:cursor-pointer"
            onClick={() => setLikes(likes + 1)}
          >
            Like!
          </button>
          <button
            className="px-3.5 py-1 rounded bg-red-600 hover:bg-red-500 hover:cursor-pointer "
            onClick={() => setdisLikes(disLikes + 1)}
          >
            disLike!
          </button>
        </div>
        {likes > 5 && (
          <p className="text-green-500 font-bold">Wow! So popular!🔥</p>
        )}
        {disLikes > 5 && <p className="text-red-600 font-bold">Oh no!😢</p>}
      </div>
    </>
  );
};

export default Likes;
