import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
export default function Footer() {
  return (
    <div className="py-5 text-[#324d67] font-bold text-center">
      <p>2022 JSM Headphones All rights reserverd</p>
      <div className="flex justify-center gap-x-2 my-2">
        <AiFillInstagram size={30} />
        <AiOutlineTwitter size={30} />
      </div>
    </div>
  );
}
