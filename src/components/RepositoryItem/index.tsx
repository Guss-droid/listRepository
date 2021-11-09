
interface IProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

export function RepositoryItem(props: IProps) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository?.description || 'Nenhuma descrição encontrada'}</p>

      <a href={props.repository.html_url}>
        Acessar Repositorio
      </a>
    </li>
  );
}