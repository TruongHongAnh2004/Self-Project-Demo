import { AiOutlineUser } from "react-icons/ai";
function SearchInput() {
  return (
    <div className="flex items-center justify-between p-2">
      <div className="text-xl font-bold text-white">Cửa hàng điện thoại</div>
      <form action="search" className="flex flex-1 mx-6 bg-white rounded-md">
        <input
          type="text"
          name="message"
          placeholder="Bạn muốn mua gì?"
          className="w-full px-4 py-2 rounded-l-md text-black outline-none"
        />
        <button
          type="submit"
          className="bg-blue-300 px-4 rounded-r-md hover:bg-blue-800"
        >
          Tìm kiếm
        </button>
      </form>

      <div className="flex items-center gap-6">
        <div className="cursor-pointer hover:text-gray-200">
          <AiOutlineUser size={30} />
        </div>
      </div>
    </div>
  );
}
export default SearchInput;
