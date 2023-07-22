type Repository = {
  id: number;
  name: string;
};

export async function getStaticProps() {
  const res = await fetch("https://api.github.com/users/manfrin92/repos");
  const repositories: Repository[] = await res.json();

  return { props: { repositories } };
}

export default function ServerSide({
  repositories,
}: {
  repositories: Repository[];
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <ul>
        {repositories.map((repository) => (
          <li className="text-slate-50" key={repository.id}>
            {repository.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
