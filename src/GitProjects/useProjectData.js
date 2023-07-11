import { useState, useEffect } from "react";

const projectApi = `https://api.github.com/users/OskarS99/repos`;

export const useProjectData = () => {
  const [reposData, setReposData] = useState(["loading"]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(projectApi);
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const repos = await response.json();

        setReposData(repos, "success");
      } catch {
        setReposData("error");
      }
    };
    setTimeout(fetchRepos, 1000);
  }, []);

  return [reposData];
};
