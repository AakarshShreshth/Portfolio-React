import data from '/src/data/data'
import EduItem from './EduItem'

const Education = () => {
  return (
    <div id="edu" className='max-w-[1040px] m-auto md:pl-28 p-8 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e] mb-10'>Education</h1>
      {data.map((item, idx) => (
        <EduItem
        key={idx}
        title={item.title}
        name={item.name}
        grade={item.grade}
        duration={item.duration}
        />
      ))}
    </div>
  )
}

export default Education
