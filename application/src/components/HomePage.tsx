import React from 'react'

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold my-8">Welcome to Our World</h1>
        <p className="text-lg text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem unde, recusandae tempora incidunt officiis fugiat magni veniam commodi blanditiis minus nulla itaque! Perspiciatis.
        </p>
      </div>

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
    </div>
  )
}

export default HomePage
