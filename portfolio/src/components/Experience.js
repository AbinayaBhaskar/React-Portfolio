import { EXPERIENCE } from '../assets/constant.js'

function Experience() {
    return (
        <div id="experience" className="bg-light-secondary py-10">
            <h2 className="mb-10 text-center text-4xl">Experience</h2>
            <div>
                {EXPERIENCE.map((experience, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/4 text-center lg:text-left">
                            <p className="text-l  mx-3.5">{experience.year}</p>
                        </div>
                        <div className="w-full lg:w-3/4">
                            <h5 className="mb-2 font-semibold text-lg">{experience.role} - {" "}
                                <span className="text-sm text-dark-brown">{experience.company}</span>
                            </h5>
                            <p className="mb-4 text-black-400">{experience.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {experience.technologies.map((tech, index) => (
                                    <span key={index} className="mr-2 rounded bg-dark-brown px-2 py-1 text-sm font-medium text-light-secondary">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience;
