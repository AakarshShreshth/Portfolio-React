import { BsSend } from "react-icons/bs";

// !TODO: Use a EmailJs or SmtpJs
const Contact = () => {
    return (
        <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-10">
                Contact
            </h1>
            <form
                action="https://getform.io/f/jawxewob"
                method="POST"
                encType="multipart/form-data"
            >
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                        type="text"
                        name="name"
                    />
                </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">E-Mail</label>
                    <input
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                        type="email"
                        name="email"
                    />
                </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Message</label>
                    <textarea
                        className="border-2 rounded-lg p-3 border-gray-300"
                        rows="10"
                        name="message"
                    />
                </div>
                <button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg font-semibold flex gap-2 justify-center items-center">
                    <BsSend size={20}/>
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
