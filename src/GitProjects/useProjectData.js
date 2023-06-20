import { useState, useEffect } from "react";

export const useProjectData = () => {
  const projectApi = `https://api.github.com/users/OskarS99/repos`;
  const [statusApi, setStatusApi] = useState({
    status: "loading",
  });
  const [reposData, setReposData] = useState([]);
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(projectApi);
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const repos = await response.json();
        setReposData(repos);
        setStatusApi({
          status: "succes",
        });
      } catch {
        setStatusApi({
          status: "error",
        });
      }
    };
    setTimeout(fetchRepos, 1000);
  }, []);

  return reposData, statusApi;
};
