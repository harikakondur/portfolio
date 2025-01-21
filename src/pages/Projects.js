import { useEffect, useState } from "react";
import getEntries from "../api";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  const fetchData = async () => {
    try {
      const response = await getEntries();
      setProjects(response);
      console.log(response);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-white flex flex-col justify-center items-center overflow-auto">
      <div className="w-full space-y-6 px-6 mt-6">
        {projects.length === 0 ? (
          <p>Loading projects...</p>
        ) : (
          projects.map((project) => (
            <div
              key={project.sys.id}
              className="font-mono p-4 mb-6 flex flex-col md:flex-row w-full rounded-lg"
            >
              {/*  Project Info */}
              <div className="flex-[2] space-y-4 items-start mr-2">

                <div className="text-2xl font-bold">
                {project.fields.projectName}
                {project.fields.url && (
                    <a href={project.fields.url}  target="_blank" rel="noopener noreferrer" className="inline-block mt-2">
                      <ArrowUpRightIcon className="h-6" />
                    </a>
                  
                )} 

                </div>
                <div className="text-sm italic">{project.fields.date}</div>
                <div className="text-sm">{project.fields.projectDescription}</div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.fields.techStack.map((tech) => (
                    <span className="text-xs p-1 px-2 bg-pink-300 rounded-full">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="flex-[3] items-center">
              {/* {project.fields.projectName === "whichweight" && (
                <div className="flex-1">
                  <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    navigation
                    pagination={{ clickable: true }}
                    className="rounded-lg"
                    style={{ height: "300px", 
width: "100%" 
                    }}
                  >
                    {project.fields.images.map((image) => (
                      <SwiperSlide key={image.sys.id}>
                        <img
                          src={`https:${image.fields.file.url}`}
                          alt={image.fields.title}
                          className="rounded-md object-contain w-full"
                        />
                        <p className="text-xs text-center mt-2">{image.fields.title}</p>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )} */}


              {(project.fields.projectName === "detour" || project.fields.projectName === "asciimation" ) && (
                <>
                  <video controls autoplay muted loop className="w-full h-100 rounded-xl">
                    <source src={project.fields.images[0].fields.file.url} type="video/mp4" />
                  </video>
                </>
              )}

              {(project.fields.projectName === "hyperdrive" ) && (
                  <img className="h-50 border rounded-xl border-zinc-400" src={project.fields.images[0].fields.file.url}  />
              )}

              {(project.fields.projectName === "halobyhar" ) && (
                  <img className="h-160 border rounded-xl border-zinc-400" src={project.fields.images[0].fields.file.url}  />
              )}


              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
