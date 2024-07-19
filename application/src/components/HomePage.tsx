import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div>
    
        
        <div className="container mx-auto p-4 bg-gray-100">

            {/* Welcome */}
            <div className="text-center my-8">
                <h1 className="text-4xl font-bold my-8">Welcome to Our World</h1>
                <p className="text-lg text-gray-700 text-left">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem unde, recusandae tempora incidunt officiis fugiat magni veniam commodi blanditiis minus nulla itaque! Perspiciatis.
                </p>
            </div>

            {/* Projects */}
            <div className="my-8">
                <h1 className="text-3xl font-bold text-center mb-6">Our Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="p-6 bg-slate-200 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Project 1</h2>
                        <p className="text-gray-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem unde, recusandae tempora incidunt officiis fugiat magni veniam commodi blanditiis minus nulla itaque! Perspiciatis.</p>
                    </div>

                    <div className="p-6 bg-slate-200 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Project 2</h2>
                        <p className="text-gray-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem unde, recusandae tempora incidunt officiis fugiat magni veniam commodi blanditiis minus nulla itaque! Perspiciatis.</p>
                    </div>

                    <div className="p-6 bg-slate-200 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Project 3</h2>
                        <p className="text-gray-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem unde, recusandae tempora incidunt officiis fugiat magni veniam commodi blanditiis minus nulla itaque! Perspiciatis.</p>
                    </div>
                    
                </div>
            </div>

            {/* How it works */}
            <div className="text-center my-8">
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

        </div>
    </div>
  )
}

export default HomePage
