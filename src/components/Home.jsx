import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import bgImg from '../assets/background.jpg'

const Home = () => {
    return (
        <div id="home">
            <img
                className="w-full h-screen object-cover"
                src={bgImg}
                alt="Background"
            />
            <div className="w-full h-screen absolute top-0 left-0 bg-white/65">
                <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:item-start items-center">
                    <h1 className="sm:text-6xl text-4xl font-bold text-gray-800">
                        I'm Aakarsh Shreshth
                    </h1>
                    <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
                        I'm a
                        <TypeAnimation
                            sequence={[
                                "Developer",
                                1000,
                                "Programmer",
                                1000,
                                "Tech Enthusiast",
                                1000,
                            ]}
                            wrapper="span"
                            cursor={true}
                            speed={50}
                            style={{ fontSize: "1em", paddingLeft: "5px" }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className="flex justify-between pt-6 max-w-[250px] w-full">
                        <a
                            href="https://www.linkedin.com/in/aakarshshreshth/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin
                                className="cursor-pointer hover:scale-110"
                                size={30}
                            />
                        </a>
                        <a
                            href="https://github.com/AakarshShreshth"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub
                                className="cursor-pointer hover:scale-110"
                                size={30}
                            />
                        </a>
                        <a
                            href="https://twitter.com/AakarshShreshth"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTwitter
                                className="cursor-pointer hover:scale-110"
                                size={30}
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/aakarshshreshth/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram
                                className="cursor-pointer hover:scale-110"
                                size={30}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
