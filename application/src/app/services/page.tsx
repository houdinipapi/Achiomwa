import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
Image

const Services = () => {
  return (
    <div className="container mx-auto p-4 bg-gray-100">

      <div className="text-center my-4">
        <h1 className="text-4xl font-bold my-4">Our Services</h1>
      </div>

      
      <div className="flex justify-center items-center mt-8 mb-16">

        {/* Service 1 */}
        <Link href="#" className="flex-1 relative flex flex-col bg-red-100 rounded-2xl mr-8 transition duration-300 hover:bg-red-200 hover:shadow-lg">
          <div className="p-10 py-4">
            <h1 className="font-bold text-[22px] text-orange-600">SERVICE 1</h1>
            <p className="font-semibold">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim culpa veniam officiis iusto repellat magni dolor perferendis repellendus rerum at expedita atque exercitationem incidunt eum, animi est nesciunt quas quasi pariatur dolores quidem laboriosam. Explicabo officiis aliquam, quod fugiat fugit exercitationem pariatur iste quisquam! Deserunt dolorum non aut sint blanditiis.
            </p>
          </div>

          <div className="relative mt-auto">
            <Image
              src="/images/services/service1.jpg"
              alt="Gallery"
              // layout="fill"
              objectFit="cover"
              width={1000}
              height={1000}
              className="p-11"
            />
          </div>
        </Link>

      </div>
    </div>
  )
}

export default Services;
