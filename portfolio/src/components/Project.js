import { PROJECTS } from '../assets/constant.js'
import Project from '../assets/project.png';

function Projects() {
    return (
        <div id="project" className='pb-7'>
            <h2 className='mb-10 text-center text-4xl pt-10'>Project</h2>
            <div>{PROJECTS.map((project, index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <div className='w-full lg:w-1/4'>
                        <img src={Project} alt={project.title} width={280} height={250} className="mb-6 rounded" />
                    </div>
                    <div className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'>{project.title}</h6>
                        <p className='mb-4 text-neutral-400'>{project.description}</p>
                        <a className="text-blue-500" href="https://github.com/AbinayaBhaskar/React-Portfolio">Github</a>
                        <div className="mt-4">
                            {project.technologies.map((tech, index) => (
                                <span className='mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-white' key={index}>{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}</div>
        </div>
    )
}

export default Projects
