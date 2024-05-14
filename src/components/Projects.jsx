import projectImg from '/src/assets/project.jpg'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id="projects" className='max-w-[1040px] m-auto md:pl-28 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e] mb-10'>Projects</h1>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={projectImg} title='Portfolio' stack='ReactJs' gh='https://github.com/AakarshShreshth/Portfolio-React'/>
        <ProjectItem img={projectImg} title='Ticket Show' stack='Flask' gh='https://github.com/AakarshShreshth/Ticket-Show'/>
        <ProjectItem img={projectImg} title='Water Quality Prediction' stack='Scikit-Learn' gh='https://github.com/AakarshShreshth/Water-Quality-Prediction'/>
        <ProjectItem img={projectImg} title='Blog Lite' stack='Flask' gh='https://github.com/AakarshShreshth/Blog-Lite'/>
      </div>
    </div>
  )
}

export default Projects