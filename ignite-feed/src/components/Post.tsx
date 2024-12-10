type PostProps = {
  name: string;
  body: string;
};

export default function Post({ name, body }: PostProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{body}</p>
    </div>
  );
}
