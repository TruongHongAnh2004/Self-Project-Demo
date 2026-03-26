
import { AiOutlineUser } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { setSearch } from "../../features/productSlice";


function SearchInput() {
  const search = useSelector((state: RootState) => state.products.search);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between p-2">
      <div className="text-xl font-bold text-white">Cửa hàng điện thoại</div>

      <form className="flex flex-1 mx-6 bg-white rounded-md">
        <input
          type="text"
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
          placeholder="Bạn muốn mua gì?"
          className="w-full px-4 py-2 rounded-l-md text-black outline-none"
        />
      </form>

      <div className="flex items-center gap-6">
        <AiOutlineUser size={30} />
      </div>
    </div>
  );
}
export default SearchInput;
