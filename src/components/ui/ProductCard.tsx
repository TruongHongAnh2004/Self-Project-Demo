import type { Product } from "../../types/type";
import { AiOutlineStar } from "react-icons/ai";

function ProductCard(props: Product) {
  const number = props.price * 25000;
  const vnd = number.toLocaleString("vi-VN");

  return (
    <div>
      <div className="relative bg-white rounded-lg hover:bg-gray-100">
        <div className="">
          <img src={props.image} alt="smartphone" />
          <h1 className="font-bold">
            <p>
              <span>{props.title}</span> | Chính hãng
            </p>
          </h1>
          <h2 className="font-bold text-red-600">Giá: {vnd}đ</h2>

          <div className=" bg-red-600 rounded-md -py-0.5 absolute -top-2 -left-1 ">
            <p className="text-white ">
              Giảm{" "}
              <span className="font-bold">{props.discountPercentage}%</span>
            </p>
          </div>
          <h4 className="text-blue-600">{props.returnPolicy}</h4>
          <h3 className="font-bold flex items-center gap-2">
            <AiOutlineStar color="gold" size={30} />
            <span>{props.rating}</span>
          </h3>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
