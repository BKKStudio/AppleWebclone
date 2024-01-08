import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
export default function TextSlide() {
  return (
    <article className=" w-full z-2  flex justify-center  items-center text-sm  overflow-hidden ">
    <div className="w-full h-full flex justify-center items-center gap-2   py-4 animate-animation-textslide  duration-500">มีการผ่อนชำระในอัตราดอกเบี้ย 0% นานสูงสุด 10 เดือน <Link href={""} className="text-blue-600 flex items-center  ">ดูเพิ่มเติม <BsChevronRight size={14}/></Link></div>
  </article>
  )
}
