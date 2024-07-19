import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div>
    
        
        <div className="container mx-auto p-4 bg-gray-100">

            {/* Welcome */}
            <div className="text-center my-4">
                <h1 className="text-4xl font-bold my-8">Welcome to Our World</h1>
                <p className="text-lg text-gray-700 text-left">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem unde, recusandae tempora incidunt officiis fugiat magni veniam commodi blanditiis minus nulla itaque! Perspiciatis.
                </p>
            </div>

            {/* Projects */}
            <div className="my-4">
                <h1 className="text-3xl font-bold text-center mb-6">Our Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="p-6 bg-yellow-200 hover:bg-yellow-300 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                        <Link href="#">
                            <h2 className="text-2xl font-bold mb-4">Project 1</h2>
                            <p className="text-gray-700">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem unde, recusandae tempora incidunt officiis fugiat magni veniam commodi blanditiis minus nulla itaque! Perspiciatis.     
                            </p>
                        </Link>
                    </div>

                    <div className="p-6 bg-pink-200 hover:bg-pink-300 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                        <Link href="#">
                            <h2 className="text-2xl font-bold mb-4">Project 2</h2>
                            <p className="text-gray-700">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem unde, recusandae tempora incidunt officiis fugiat magni veniam commodi blanditiis minus nulla itaque! Perspiciatis.     
                            </p>
                        </Link>
                    </div>

                    <div className="p-6 bg-green-200 hover:bg-green-300 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                        <Link href="#">
                            <h2 className="text-2xl font-bold mb-4">Project 3</h2>
                            <p className="text-gray-700">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem unde, recusandae tempora incidunt officiis fugiat magni veniam commodi blanditiis minus nulla itaque! Perspiciatis.     
                            </p>
                        </Link>
                    </div>
                    
                </div>
                <div className="flex justify-end">
                    <Link href="#">
                        <button className="bg-gray-100 hover:bg-blue-500 text-blue-500 hover:text-white py-2 px-4 rounded-lg border border-slate-400 my-8">View All Projects</button>
                    </Link>
                </div>
            </div>

            {/* How it works */}
            <div className="text-center my-4">
                <h1 className="text-3xl font-bold text-center my-5">How It Works</h1>
                <p className="text-lg text-gray-700 text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quis ipsam sit iure maxime accusantium, veritatis laboriosam dolorum culpa consectetur ullam nam libero. Adipisci itaque vero numquam tempora! Sed, numquam.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quis ipsam sit iure maxime accusantium, veritatis laboriosam dolorum culpa consectetur ullam nam libero. Adipisci itaque vero numquam tempora! Sed, numquam.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quis ipsam sit iure maxime accusantium, veritatis laboriosam dolorum culpa consectetur ullam nam libero. Adipisci itaque vero numquam tempora! Sed, numquam.
                </p>
            </div>

            {/* View Plans */}

            <div className="my-8">
                <h1 className="text-3xl font-bold text-center mb-6">View Plans</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="p-6 bg-red-200 hover:bg-red-300 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                        <Link href="#">
                            <h2 className="text-2xl font-bold mb-4">Personal</h2>
                            <p className="text-gray-700">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem unde, recusandae tempora incidunt officiis fugiat magni veniam commodi blanditiis minus nulla itaque! Perspiciatis.     
                            </p>
                        </Link>
                    </div>

                    <div className="p-6 bg-purple-200 hover:bg-purple-300 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                        <Link href="#">
                            <h2 className="text-2xl font-bold mb-4">Business</h2>
                            <p className="text-gray-700">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem unde, recusandae tempora incidunt officiis fugiat magni veniam commodi blanditiis minus nulla itaque! Perspiciatis.     
                            </p>
                        </Link>
                    </div>

                    <div className="p-6 bg-blue-200 hover:bg-blue-300 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                        <Link href="#">
                            <h2 className="text-2xl font-bold mb-4">Corporate</h2>
                            <p className="text-gray-700">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem unde, recusandae tempora incidunt officiis fugiat magni veniam commodi blanditiis minus nulla itaque! Perspiciatis.     
                            </p>
                        </Link>
                    </div>
                    
                </div>
            </div>

            {/* Gallery & Location */}
            <div className="flex justify-between gap-6 my-4">
                <div className="flex-1 text-center bg-gray-500 relative">
                    <Image
                        src="/images/home/home1.jpg"
                        alt="Gallery"
                        // layout="fill"
                        // objectFit="cover"
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover opacity-50"
                    />
                    <div className=" absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <Link href="#">
                            <span className="text-white text-2xl font-bold bg-gray-600 p-2 rounded hover:bg-gray-800">
                                GALLERY
                            </span>
                        </Link>
                    </div>
                    
                </div>

                <div className="flex-1 text-center bg-gray-500 relative">
                    <Image
                        src="/images/home/location1.jpg"
                        alt="Gallery"
                        // layout="fill"
                        // objectFit="cover"
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover opacity-50"
                    />
                    <div className=" absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <Link href="#">
                            <span className="text-white text-2xl font-bold bg-gray-600 p-2 rounded hover:bg-gray-800">
                                LOCATION
                            </span>
                        </Link>
                    </div>
                    
                </div>
            </div>

        </div>
    </div>
  )
}

export default HomePage
