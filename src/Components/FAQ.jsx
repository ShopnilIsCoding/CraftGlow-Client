
import { BsSend } from "react-icons/bs";
import { toast } from "react-toastify";

const FAQ = () => {
    const send = (e) => {
        e.preventDefault();
        e.target.email.value='';
        e.target.feedback.value=''
        toast.success("Thanks For Reaching Us");
    };

    return (
        <div className="my-4 lg:my-8" >
            <div className="text-center my-4 lg:my-8">
                <h2 className="text-3xl font-extrabold font-kristi sm:text-4xl" >
                    Get Answers and Share Your Thoughts
                </h2>
                <p className="mt-4 text-lg text-rose-400 font-serif mx-auto lg:max-w-lg" data-aos="zoom-in-down">
                    Have questions about our paper crafts and glass art products? Use the form below to ask anything you need or provide us with your valuable insights.
                </p>
            </div>
            <div className="container mx-auto flex flex-wrap items-start justify-between mt-3 lg:py-12 lg:px-4 lg:shadow-md border border-base-300 lg:border-base-300 rounded-lg glass  bg-base-300" >
                {/* Left side - Ask Question */}
                <div className="w-full lg:w-1/3 mb-8 lg:mb-0 h-full">
                    <div className=" p-8 rounded-t-lg  h-full flex flex-col">
                        <h2 className="text-2xl font-semibold mb-6 ">Have a Question or Feedback?</h2>
                        <form onSubmit={send}>
                        <div className="flex items-center mb-4">
                            <input type="text" placeholder="Your Email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" required/>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="text" name="feedback" placeholder="Your question or feedback..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" required/>
                        </div>
                        <button className="bg-primary flex justify-center items-center gap-2 text-white px-6 py-2 rounded-lg hover:bg-secondary transition duration-300 w-full">
                            <BsSend /> Send
                        </button>
                        </form>
                    </div>
                </div>

                {/* Right side - FAQ */}
                <div className="w-full lg:w-2/3">
                    <div className=" p-8 rounded-lg ">
                        <h2 className="text-2xl font-semibold mb-6  font-serif ">Frequently Asked Questions</h2>

                        {/* FAQ items */}
                        <div className="accordion">
                            <div className="collapse collapse-plus bg-white rounded-lg shadow-md mb-4">
                                <input type="checkbox" id="faq1" className="collapse-toggle" />
                                <label htmlFor="faq1" className="collapse-title text-lg font-medium cursor-pointer">
                                    What paper crafts and glass art products do you offer?
                                </label>
                                <div className="collapse-content">
                                    <p className="text-gray-700 mt-2">
                                        We offer a wide range of products including card making supplies, paper quilling and origami materials, glass painting tools, lampworking supplies, and glass dyeing and staining kits.
                                    </p>
                                </div>
                            </div>

                            <div className="collapse collapse-plus bg-white rounded-lg shadow-md mb-4">
                                <input type="checkbox" id="faq2" className="collapse-toggle" />
                                <label htmlFor="faq2" className="collapse-title text-lg font-medium cursor-pointer">
                                    How can I learn more about your products?
                                </label>
                                <div className="collapse-content">
                                    <p className="text-gray-700 mt-2">
                                        You can explore our tutorials, guides, and blogs on our website to learn more about our products and how to use them effectively.
                                    </p>
                                </div>
                            </div>

                            <div className="collapse collapse-plus bg-white rounded-lg shadow-md mb-4">
                                <input type="checkbox" id="faq3" className="collapse-toggle" />
                                <label htmlFor="faq3" className="collapse-title text-lg font-medium cursor-pointer">
                                    Do you offer classes or workshops?
                                </label>
                                <div className="collapse-content">
                                    <p className="text-gray-700 mt-2">
                                        Yes, we offer online classes and workshops for different crafts. You can check our website for upcoming sessions and enroll in any that interest you.
                                    </p>
                                </div>
                            </div>

                            <div className="collapse collapse-plus bg-white rounded-lg shadow-md mb-4">
                                <input type="checkbox" id="faq4" className="collapse-toggle" />
                                <label htmlFor="faq4" className="collapse-title text-lg font-medium cursor-pointer">
                                    How can I contact your customer support?
                                </label>
                                <div class="collapse-content">
                                    <p class="text-gray-700 mt-2">You can contact our customer support through the contact form on our website, via email, or by calling our customer service line.</p>
                                </div>
                            </div>

                            <div className="collapse collapse-plus bg-white rounded-lg shadow-md mb-4">
                                <input type="checkbox" id="faq5" className="collapse-toggle" />
                                <label htmlFor="faq5" className="collapse-title text-lg font-medium cursor-pointer">
                                    What is your return policy?
                                </label>
                                <div className="collapse-content">
                                    <p className="text-gray-700 mt-2">
                                        We have a customer-friendly return policy. If you're not satisfied with your purchase, you can return it within 30 days for a full refund. Please see our website for full details.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
