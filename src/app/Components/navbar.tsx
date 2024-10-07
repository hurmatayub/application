
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (


  <div className="bg-black text-white font-sans">
  <header className="container mx-auto px-4 py-6">
  <nav className="flex justify-between items-center">
  <div className="flex items-center">  
                  
              <Image 
                src="/images/coffee-icon1.png" 
                alt="Coffee Logo" 
                width={40} 
                height={40} 
                className="mr-4"
              />
             
             <Link href='/'><span className="text-lg font-bold">Coffee Lab</span></Link>
             
            </div>
    <ul className="flex space-x-6">
             <li><Link  href="/" className="hover:bg-[#5e3b21] hover:border hover:border-white py-2 px-6 rounded-full">Home</Link></li>
              <li><Link href="/about" className="hover:bg-[#5e3b21] hover:border hover:border-white py-2 px-6 rounded-full">About Us</Link></li>
              <li><Link href="/shop" className="hover:bg-[#5e3b21] hover:border hover:border-white py-2 px-6 rounded-full">Shop</Link></li>
              <li><Link href="/reviews" className="hover:bg-[#5e3b21] hover:border hover:border-white py-2 px-6 rounded-full">Reviews</Link></li>
              <li><Link href="/contactUs" className="hover:bg-[#5e3b21] hover:border hover:border-white py-2 px-6 rounded-full">Contact Us</Link></li>
              </ul>
    <div className=" flex items-center">
      <Link href="/login" className="hover:bg-[#5e3b21] border border-white py-2 px-6 rounded-full mr-4">Login</Link>
    </div>
  </nav>
</header>
</div>
)
}





