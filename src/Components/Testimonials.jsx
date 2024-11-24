import { assets, testimonialsData } from "../assets/assets"


const Testimonials = () => {
    return (
        <div className="flex flex-col items-center justify-center my-20 py-12">
            <h1 className="text-3xl sm:text-4xl font-semibold mb-2" >Customer Testimonials</h1>
            <p className="text-gray-500 mb-12">What Our Users are saying</p>

            <div className="flex flex-wrap gap-6">
                {testimonialsData.map((testimonial, index) => (
                    <div key={index}
                        className="bg-white/20 p-12 rounded-lg shadow-md border w-80 m-auto cursor-pointer
                     hover:scale-[1.02] transition-all duration-200 ">
                        <div className="flex flex-col items-center">
                        <img src={testimonial.image} alt="" />
                        <h2 className="text-xl font-semibold mt-3" >{testimonial.name}</h2>
                        <p className="text-gray-500">{testimonial.role}</p>
                        <div className="flex my-4">
                            {Array.from({ length: testimonial.stars }).map((_, index) => (
                                <img key={index} src={assets.rating_star} alt="Star" />
                            ))}
                        </div>
                        </div>

                        <p className="text-center text-sm text-gray-600">{testimonial.text}</p>
                    </div>

                ))}
            </div>


        </div>
    )
}

export default Testimonials
