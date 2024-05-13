import { FaGraduationCap } from 'react-icons/fa'

const EduItem = ({title, name, grade, duration}) => {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
        <li className='mb-10 ml-10'>
            <div className='flex justify-center items-center absolute w-10 h-10 bg-stone-200 rounded-full mt-5 -left-5 border-white'>
            <FaGraduationCap size={20}/>
            </div>
            <p className='flex flex-wrap gap-1 flex-col items-start justify-start text-xs md:text-sm'>
                <span className='text-3xl font-semibold text-[#001b5e]'>{name}</span>
                <span className='text-xl font-bold text-gray-500'>{title}</span>
                <span className='font-semibold'>{grade}</span>
                <span className='text-base font-normal leading-none text-stone-500'>{duration}</span>
            </p>
        </li>
    </ol>
  )
}

export default EduItem
