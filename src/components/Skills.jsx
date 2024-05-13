import skills from '../data/skills'

const Skills = () => {
    return (
        <div id="skills" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e] mb-10'>Skills</h1>
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-12'>
                {skills.map((item, idx) => (
                    <div key={idx} className='flex lg:w-48 lg:h-48 w-32 h-32 rounded-xl shadow-lg bg-gray-100 shadow-gray-400 m-auto p-4 cursor-pointer hover:scale-110 ease-in-out duration-200'>
                        <img src={item.src} alt={item.title} className='hover:scale-110 ease-in-out duration-300 m-auto md:w-28 w-24'/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills