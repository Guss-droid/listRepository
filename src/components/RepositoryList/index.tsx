import { useEffect, useState } from "react";
import { RepositoryItem } from "../RepositoryItem";

import './styles.scss'

interface IRepository {
  id: string;
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {

  const [repositories, setRepositories] = useState<IRepository[]>([])

  useEffect(() => {
    fetch("https://api.github.com/users/Guss-droid/repos")
      .then(res => res.json())
      .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>

      <ul>
        {repositories.map(repository => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
      </ul>
    </section>
  );
}