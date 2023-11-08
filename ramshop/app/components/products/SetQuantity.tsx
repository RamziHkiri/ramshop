"use client";

import { CartProductType } from "@/app/product/[productId]/ProductDetails";

interface SetQtyProps {
  cartCounter?: boolean;
  cartPrduct: CartProductType;
  handleQtyIncrease: () => void;
  handleQtyDecrease: () => void;
}

const bntStyles = "border-[1.2px] border-slate-300 px-2 rounded";
const SetQuantity: React.FC<SetQtyProps> = ({
  cartCounter,
  cartPrduct,
  handleQtyDecrease,
  handleQtyIncrease,
}) => {
  return (
    <div className="flex gap-8 items-center">
      {cartCounter ? null : <div className="font-semibold">QUANTITY </div>}
      <div className="flex gap-4 items-center text-base">
        <button className={bntStyles} onClick={handleQtyDecrease}>
          -
        </button>
        <div>{cartPrduct.quantity}</div>
        <button className={bntStyles} onClick={handleQtyIncrease}>
          +
        </button>
      </div>
    </div>
  );
};

export default SetQuantity;
