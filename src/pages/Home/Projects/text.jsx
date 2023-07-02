<div className="w-64 md:w-1/2">
            <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 h-48 w-48">
              <img
                src="https://i.ibb.co/NpvYDpk/contact-removebg-preview.png"
                alt=""
                className="w-[150px] h-[150px] shadow-lg object-cover contact-image"
              />
            </div>
            <div className=" rounded-b-lg p-4 bg-[#252734] mt-3 w-3/5">
              <p className="flex items-center gap-2 text-lg font-medium text-white">
                <span className="text-pink-500">
                  <FaPhoneAlt />
                </span>
                +8801980789212
              </p>
              <p className="flex items-center gap-2 text-lg font-medium text-white">
                <span className="text-blue-500">
                  <FaEnvelope />
                </span>
                Email: sadikul14144@gmail.com
              </p>
            </div>
          </div>


          <div className="w-64 md:w-1/2">
            <form className="mt-8 md:mt-0"  ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="appearance-none bg-[#3D4151] rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:bg-[#272932] focus:border-[#3D4151]"
                  id="name"
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="appearance-none bg-[#3D4151] rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:bg-[#272932] focus:border-[#3D4151]"
                  id="email"
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="appearance-none bg-[#3D4151] rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:bg-[#272932] focus:border-[#3D4151] h-32 resize-none"
                  id="message"
                  name="message"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div>
                <button
                  className="bg-[#3D4151] hover:bg-[#272932] text-white font-bold py-2 px-4 rounded focus:outline-none"
                  type="button"
                >
                  <input type="submit" value="Send Message" />
                </button>
              </div>
            </form>
          </div>