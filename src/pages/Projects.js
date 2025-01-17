import { useEffect, useState } from "react";

import getEntries from "../api"

export default function Projects(){

    const [projects, setProjects] = useState([]);

    const fetchData = async () => {
        try {
          const response = await getEntries();
          setProjects(response.items);
        } catch (error) {
          console.error("Error fetching projects:", error);
        }
      };

      useEffect(() => {
        fetchData();
      }, []);

    return(
        <div>Projects</div>

    )
}