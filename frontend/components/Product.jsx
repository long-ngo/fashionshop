import Image from 'next/image';
import ProductImg from '../public/image/speaker4.webp';
export default function Product() {
  return (
    <div className="text-left">
      <Image
        className="bg-[#ebebeb] rounded-2xl"
        src={ProductImg}
        alt="product"
        width={250}
        height={250}
      />
      <div>
        <p className="text-base font-medium">Speaker</p>
        <p className="font-bold">$56</p>
      </div>
    </div>
  );
}
