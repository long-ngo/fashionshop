import { AiOutlineShopping } from 'react-icons/ai';
import Link from 'next/link';
export default function Header() {
  return (
    <header className="flex justify-between items-center my-2 mx-5">
      <p className="text-lg text-gray-500">
        <Link href="/">JSM Headphones</Link>
      </p>
      <button className="relative">
        <AiOutlineShopping size={25} color="gray" />
        <span className="absolute top-0 -right[8] bg-[#f02d34] text-[#eee] text-center text-xs font-semibold rounded-[50%] w-4 h-4">
          0
        </span>
      </button>
    </header>
  );
}
