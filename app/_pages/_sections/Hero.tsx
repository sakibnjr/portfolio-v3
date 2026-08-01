import Image from "next/image";
import UserImage from "@/public/Nahid.jpg"

export default function Hero() {
  return (
      <section
                id="home"
                className="min-h-screen flex items-center">
    
                <div
                    className="w-full grid lg:grid-cols-2 gap-24">
    
    
                    <div className="space-y-8">
    
                        <p className="text-lg font-medium">
                            Hello, I&apos;m Sakib Nahid.
                        </p>
    
                        <p className="uppercase tracking-[0.2em] text-sm text-gray-500">
                            Software Engineer • Frontend Specialist • Problem Solver
                        </p>
    
                        <h1 className="text-7xl font-bold leading-none max-w-3xl">
                            I build digital experiences that people remember.
                        </h1>
    
                        <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                            Crafting fast, accessible, and visually refined web
                            applications through clean engineering,
                            thoughtful design, and purposeful motion.
                        </p>
    
                        <div className="flex gap-5">
    
                            <button className="bg-blue-600 text-white rounded-full px-8 py-4">
                                Explore My Work
                            </button>
    
                            <button className="border rounded-full px-8 py-4">
                                Hire Me
                            </button>
    
                        </div>
    
                    </div>
    
    
                    <div
                        className="relative">
                          <Image src={UserImage}
                          priority
                          quality={70}
                          placeholder="blur"
                          alt="Sakib Nahid" 
                         fill
                         sizes="auto"
                         className="object-cover rounded-3xl"
                          />
    
                    </div>
    
                </div>
    
            </section>
  )
}
