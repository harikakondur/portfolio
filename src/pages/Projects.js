import { useEffect, useState } from "react";
import getEntries from "../api";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  const fetchData = async () => {
    try {
      const response = await getEntries();
      setProjects(response);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-white flex flex-col justify-center items-center overflow-auto space-x-4">
      <div className="w-full space-y-6 px-6 mt-6">
        {projects.length === 0 ? (
          <p>Loading projects...</p>
        ) : (
          projects.map((project) => (
            <div key={project.sys.id} className="font-mono p-4 mb-6 flex flex-col md:flex-row w-full rounded-lg">
              
              {/* Project Info */}
              <div className="flex-[2] space-y-4 items-start mr-2 p-4">

                <div className="text-2xl font-bold">
                  {project.fields.projectName}
                  {project.fields.url && (
                      <a href={
                        project.fields.url.startsWith("http")
                          ? project.fields.url
                          : `https://${project.fields.url}`
                      } target="_blank" rel="noopener noreferrer" className="inline-block">
                        <ArrowUpRightIcon className="h-7 hover:text-lime-500 align-bottom -mb-1" />
                      </a>
                    
                  )} 
                </div>

                <div className="text-sm italic">{project.fields.date}</div>
                <div className="text-sm ">{project.fields.projectDescription}</div>
                
                
                {/* additional text for whichweight */}
                {project.fields.projectName === 'whichweight' && (
                  <div className="text-sm">
                    <div>- home screen redesign</div>
                    <div>- workout summaries & progression charts</div>
                    <div>- free trial experience (athlete assessment)</div>
                  </div>
                  
                )}

                {/* tech stack */}
                <div className="flex flex-wrap gap-2 pb-2">
                  {project.fields.techStack.map((tech) => (
                    <span className="text-xs p-1 px-2 bg-lime-100 rounded-full">{tech}</span>
                  ))}
                </div>
              </div>


              {/* conditional styling for each project */}

              <div className="flex-[3] items-center">
                {project.fields.projectName === "whichweight" && (
                  <div className="flex-1 h-full">
                    <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory object-cover">
                      {project.fields.images.map((image) => (
                        <div key={image.sys.id} className="flex-shrink-0 flex flex-col  overflow-hidden snap-center">
                          <img src={`https:${image.fields.file.url}`}    className="object-cover w-full h-[22rem] sm:h-[18rem] md:h-[22rem] border border-zinc-600 rounded-xl"/>
                          <div className="text-center py-2 text-[10px] text-zinc-500 italic">
                            {image.fields.title || "No description available"}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}


                {(project.fields.projectName === "detour" || project.fields.projectName === "asciimation" ) && (
                  <>
                    <video controls autoPlay muted loop className="w-full h-100 rounded-xl border border-zinc-600">
                      <source src={project.fields.images[0].fields.file.url} type="video/mp4" />
                    </video>
                  </>
                )}

                {(project.fields.projectName === "hyperdrive" ) && (
                    <div className="flex justify-center items-center h-72">
                      <img className="h-48 w-auto" src={project.fields.images[0].fields.file.url}/>
                    </div>
                )}

                {(project.fields.projectName === "halobyhar" ) && (
                  <div className="w-full">
                    <div className="flex flex-col md:flex-row gap-4">
                      {/* Desktop screenshot - full width on mobile, side-by-side on larger screens */}
                      <div className="flex-1 rounded-xl border border-zinc-600 overflow-hidden">
                        <img 
                          className="w-full h-auto object-contain"
                          src={project.fields.images[0].fields.file.url}
                          alt="Halobyhar desktop view"
                        />
                      </div>
                      
                      {/* Mobile screenshot - full width on mobile, side-by-side on larger screens */}
                      <div className="flex-1 rounded-xl overflow-hidden">
                        <div className="flex justify-center">
                          <img 
                            className="h-auto max-h-96 w-auto object-contain rounded-xl border border-zinc-600"
                            src={project.fields.images[1].fields.file.url}
                            alt="Halobyhar mobile view"
                          />
                        </div>
 
                      </div>
                    </div>
                  </div>
                )}

                {project.fields.projectName === "virtual reality projects" && (
                  <div className="flex-1">
                    <div className="flex gap-4 h-full">
                      {project.fields.images?.map((image) => (
                        <div key={image.sys.id} className="flex-1 flex flex-col overflow-hidden">
                          <video controls  autoPlay muted loop className="w-90 h-90 object-cover border border-zinc-600 rounded-xl ">
                            <source src={image.fields.file.url} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                          <div className="text-center py-2 text-[10px] text-zinc-500 italic">
                            {image.fields.title}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
