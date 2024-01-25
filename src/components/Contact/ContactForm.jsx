import  {  useState } from "react";
import './ContactForm.css'
import Navbar from "../Navbar/Navbar";
const ContactForm = () => {
  const [formData, setFormData] = useState({});
  const cityNames = [
    "Dhaka",
    "Chittagong",
    "Khulna",
    "Rajshahi",
    "Sylhet",
    "Barisal",
    "Rangpur",
  ];

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log("Form Data:", formData);
    fetch("https://dhaka-bus-ticket-server.vercel.app/contact-form", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        event.target.reset();
        
      });
  };

  return (
    <section>
      <div className='backgroun h-[500px] md:h-[800px] relative'>
        <Navbar></Navbar>
                <div className="relative top-24 flex flex-col items-center justify-center">
                <div className='text-white h-[240px] md:h-[400px]  flex flex-col items-center justify-center lg:w-[1440px]  bg-opacity-50 bg-slate-700'>
                    <h1 className='md:text-7xl text-4xl font-bold '>CONTACT US</h1><br />
                    <p className='text-xl text-center'>Contacting Made Easy – We`re Just a Message Away!!!</p>
                </div>
                </div>

            </div>
      <div className="max-w-[1200px] mx-auto px-3 sm:px-3 md:px-0 lg:px-0 mt-28">
        <div className="md:space-y-6 text-center space-y-3">
          <h1 className="md:text-5xl text-3xl text-cyan-500  font-bold">
            Contact us
          </h1>
          <p className="md:text-2xl text-lg  font-normal">
            Thank you for reaching us! We are always happy to hear from you
          </p>
        </div>

        <form
          onSubmit={handleFormSubmit}
          className="border-2 md:my-5 my-4 lg:my-7 shadow-lg p-10"
        >
          

          <div className="lg:grid grid-cols-2 gap-5">
            <div className="grid">
              <label className="text-start my-2 px-1 text-gray-500">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                onChange={handleFormChange}
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter name"
                required
              />
            </div>

            <div className="grid">
              <label className="text-start my-2 px-1">Your City</label>
              <select
                name="city"
                onChange={handleFormChange}
                className="h-full w-full rounded-md border bg-transparent py-2 px-2 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                required
              >
                {cityNames.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="lg:grid grid-cols-2 gap-5">
            <div className="grid">
              <label className="text-start my-2 px-1 text-gray-500">
                Your Mobile Number
              </label>
              <input
                type="text"
                name="number"
                onChange={handleFormChange}
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter number"
                required
              />
            </div>

            <div className="grid">
              <label className="text-start my-2 px-1 text-gray-500">
                Your Email
              </label>
              <input
                type="text"
                name="email"
                onChange={handleFormChange}
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter email"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block  px-1 text-start my-2 text-gray-600 dark:text-gray-400"
            >
              Your Message
            </label>

            <textarea
              rows="4"
              name="message"
              onChange={handleFormChange}
              placeholder="Your Message"
              className="w-full h-28 px-3 py-2 bg-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              required
            ></textarea>
          </div>

          <div className=" p-3">
            <input
              type="submit"
              className="flex items-center btn btn-block text-[20px] font-normal justify-center hover:bg-cyan-800  bg-cyan-500 text-white rounded-full"
              value="Send"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
