const ProfileCard = () => {
  return (
    <div className="max-w-sm mx-auto border border-amber-500 rounded-xl shadow-md">
      <img
        src="https://i.pravatar.cc/150?img=5"
        alt="Avatar"
        className="w-20 h-20 rounded-full mx-auto border-4 border-blue-100 bg-white"
      />

      <div className="border border-green-500 text-center mt-4">
        <h2 className="text-xl font-bold text-gray-600">Alex johnson</h2>
        <p className="text-sm text-gray-400">Frontend developer</p>
      </div>

      <div className="mt-4 flex justify-center gap-3">
        <button className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
          follow
        </button>
        <button className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100">
          Message
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
