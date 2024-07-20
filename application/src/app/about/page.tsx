import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


const About = () => {
  return (
    <div className="container mx-auto p-4 bg-gray-100">

      <div>
        {/* About */}
        <div className="text-center my-4">
          <h1 className="text-4xl font-bold my-4">About Us</h1>
          <p className="text-lg text-gray-700 text-left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita incidunt hic perspiciatis doloribus earum sit ipsa, blanditiis iusto rem laboriosam rerum qui odio accusamus quia, aspernatur tempore et, id numquam cumque? Voluptatibus rerum modi voluptatem hic maxime, molestias commodi, tenetur expedita omnis dignissimos quasi! Magnam labore eum consectetur eligendi blanditiis.
          </p>
        </div>

        <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="p-6 bg-pink-200 hover:bg-pink-300 cursor-pointer rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga culpa odit magni. Commodi quam natus assumenda possimus. Quidem fugit recusandae itaque sed esse qui? Inventore esse voluptas numquam minus id, optio et, mollitia quasi molestiae quod, dignissimos obcaecati similique harum eum autem! Temporibus nam delectus sequi quibusdam sit voluptatem accusantium.
            </p>
          </div>
          {/* Vision */}
          <div className="p-6 bg-green-200 hover:bg-green-300 cursor-pointer rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga culpa odit magni. Commodi quam natus assumenda possimus. Quidem fugit recusandae itaque sed esse qui? Inventore esse voluptas numquam minus id, optio et, mollitia quasi molestiae quod, dignissimos obcaecati similique harum eum autem! Temporibus nam delectus sequi quibusdam sit voluptatem accusantium.
            </p>
          </div>

        </div>
      </div>

      {/* Team */}
      <div className="my-8 p-6 bg-blue-100 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-center">Our Team</h2>
        <div className="flex justify-between gap-4 my-2">
                <div className="flex-1 text-center relative">
                    <Image
                        src="/images/about/man1.jpg"
                        alt="Gallery"
                        // layout="fill"
                        // objectFit="cover"
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute top-0 left-0 w-full h-full flex items-end justify-center">
                        <Link href="#">
                            <span className="text-lg font-semibold bg-gray-200 opacity-50 hover:opacity-80 p-1">
                                JOHN DOE
                            </span>
                        </Link>
                    </div>
                    
                </div>

                <div className="flex-1 text-center relative">
                    <Image
                        src="/images/about/woman1.jpg"
                        alt="Gallery"
                        // layout="fill"
                        // objectFit="cover"
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute top-0 left-0 w-full h-full flex items-end justify-center">
                        <Link href="#">
                            <span className="text-lg font-semibold bg-gray-200 opacity-50 hover:opacity-80 p-1">
                                JANE DOE
                            </span>
                        </Link>
                    </div>
                    
                </div>

                <div className="flex-1 text-center relative">
                    <Image
                        src="/images/about/man2.jpg"
                        alt="Gallery"
                        // layout="fill"
                        // objectFit="cover"
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute top-0 left-0 w-full h-full flex items-end justify-center">
                        <Link href="#">
                            <span className="text-lg font-semibold bg-gray-200 opacity-50 hover:opacity-80 p-1">
                                JOHN SMITH
                            </span>
                        </Link>
                    </div>
                    
                </div>

                <div className="flex-1 text-center relative">
                    <Image
                        src="/images/about/woman2.jpg"
                        alt="Gallery"
                        // layout="fill"
                        // objectFit="cover"
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute top-0 left-0 w-full h-full flex items-end justify-center">
                        <Link href="#">
                            <span className="text-lg font-semibold bg-gray-200 opacity-50 hover:opacity-80 p-1">
                                JANE SMITH
                            </span>
                        </Link>
                    </div>
                    
                </div>
            </div>
      </div>

      {/* Highlights */}
      <div className="my-8 p-6 bg-yellow-100 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-center">Our Highlights</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In omnis ipsum magnam libero eos. Quod earum aliquam a consequatur aliquid veniam dicta natus obcaecati nemo delectus, ipsum quam voluptates blanditiis ex error ab minima temporibus debitis, dolor magni quidem enim quo similique et. Harum blanditiis illo facere repellat eveniet sit!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In omnis ipsum magnam libero eos. Quod earum aliquam a consequatur aliquid veniam dicta natus obcaecati nemo delectus, ipsum quam voluptates blanditiis ex error ab minima temporibus debitis, dolor magni quidem enim quo similique et. Harum blanditiis illo facere repellat eveniet sit!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In omnis ipsum magnam libero eos. Quod earum aliquam a consequatur aliquid veniam dicta natus obcaecati nemo delectus, ipsum quam voluptates blanditiis ex error ab minima temporibus debitis, dolor magni quidem enim quo similique et. Harum blanditiis illo facere repellat eveniet sit!
          </p>
        </div>
        
      </div>

      {/* Jobs, Press, Contact */}
      {/* <div>
        <div>
          CAREERS
        </div>
        <div>
          BLOGS
        </div>
        <div>
          CONTACTS
        </div>
      </div> */}
    </div>
  )
}

export default About;
