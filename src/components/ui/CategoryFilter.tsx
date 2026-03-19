type Props = {
  onSelect: (value: string) => void
}

function CategoryFilter({ onSelect }: Props) {
  return (
    <div className="w-64 bg-white p-4 rounded-xl ">
      <div className="mb-6">
        <h1 className="font-bold text-lg mb-3 border-b pb-2">
          Hãng điện thoại
        </h1>

       <div className="flex flex-col gap-2 text-gray-700">
        <p onClick={() => onSelect("iphone")} className="cursor-pointer hover:text-red-500">iPhone</p>
        <p onClick={() => onSelect("oppo")} className="cursor-pointer hover:text-red-500">Oppo</p>
        <p onClick={() => onSelect("realme")} className="cursor-pointer hover:text-red-500">Realme</p>
        <p onClick={() => onSelect("samsung")} className="cursor-pointer hover:text-red-500">Samsung</p>
        <p onClick={() => onSelect("vivo")} className="cursor-pointer hover:text-red-500">Vivo</p>
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
