function CategoryFilter() {
  return (
    <div className="w-64 bg-white p-4 rounded-xl ">
      <div className="mb-6">
        <h1 className="font-bold text-lg mb-3 border-b pb-2">
          Hãng điện thoại
        </h1>

        <div className="flex flex-row gap-2 text-gray-700 ">
          <p className="cursor-pointer hover:text-red-500 hover:font-semibold">
            iPhone
          </p>
          <p className="cursor-pointer hover:text-red-500 hover:font-semibold">
            Oppo
          </p>
          <p className="cursor-pointer hover:text-red-500 hover:font-semibold">
            Realme
          </p>
          <p className="cursor-pointer hover:text-red-500 hover:font-semibold">
            Samsung
          </p>
          <p className="cursor-pointer hover:text-red-500 hover:font-semibold">
            Vivo
          </p>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-lg mb-3 border-b pb-2">
          Sắp xếp theo giá tiền
        </h1>

        <div className="flex flex-col gap-2 text-gray-700">
          <p className="cursor-pointer hover:text-red-500 hover:font-semibold">
            Tăng dần
          </p>
          <p className="cursor-pointer hover:text-red-500 hover:font-semibold">
            Giảm dần
          </p>
        </div>
      </div>
    </div>
  );
}
export default CategoryFilter;
