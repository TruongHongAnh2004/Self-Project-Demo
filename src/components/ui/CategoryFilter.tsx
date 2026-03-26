import { useState } from "react";

type Props = {
  onSelect: (brand: string[]) => void;
  onSortChange: (sort: "asc" | "desc") => void;
};

function CategoryFilter({ onSelect, onSortChange }: Props) {
  const [selected, setSelected] = useState<string[]>([]);

  const handleClick = (brand: string) => {
    let updated;

    if (selected.includes(brand)) {
      updated = selected.filter((b) => b !== brand); // bỏ chọn
    } else {
      updated = [...selected, brand]; // thêm
    }

    setSelected(updated);
    onSelect(updated);
  };
  return (
    <div className="w-64 bg-white p-4 rounded-xl ">
      <div className="mb-6">
        <h1 className="font-bold text-lg mb-3 border-b pb-2">
          Hãng điện thoại
        </h1>

        <div className="flex flex-col gap-2 text-gray-700">
          {["APPLE", "OPPO", "REALME", "SAMSUNG", "VIVO"].map((b) => (
            <p
              key={b}
              onClick={() => handleClick(b)}
              className={`cursor-pointer hover:text-red-500 ${
                selected.includes(b) ? "text-red-500 font-bold" : ""
              }`}
            >
              {b}
            </p>
          ))}
        </div>
      </div>

      <div>
        <h1 className="font-bold text-lg mb-3 border-b pb-2">
          Sắp xếp theo giá tiền
        </h1>

        <div className="flex flex-col gap-2 text-gray-700">
          <button
            onClick={() => onSortChange("asc")}
            className="cursor-pointer hover:text-red-500 hover:font-semibold"
          >
            Tăng dần
          </button>
          <button
            onClick={() => onSortChange("desc")}
            className="cursor-pointer hover:text-red-500 hover:font-semibold"
          >
            Giảm dần
          </button>
        </div>
      </div>
    </div>
  );
}
export default CategoryFilter;
