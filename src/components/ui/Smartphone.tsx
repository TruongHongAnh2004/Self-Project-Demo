import type { Product } from "../../types/type";

function Smartphone(props: Product) {
  return (
    <div>
      <h1 className="font-bold">
        <span>{props.title}</span> | Chính hãng
      </h1>

      <div className="grid grid-col-5 grid-flow-row gap-4">
        <div className="flex flex-wrap row-span-3">
        {props.images.map((i, index) => (
          <img key={index} src={i} alt="image" className="w-70 h-70 flex " />
        ))}
      </div>
      <p className="">Mô tả: {props.description}</p>
        <p className="">Thương hiệu: {props.brand}</p>
      </div>
      
    </div>
  );
}
export default Smartphone;
