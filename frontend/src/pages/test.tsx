interface TestProps {
  artists: { id: string; attributes: { Name: string } }[];
}

export default function Test({ artists }: TestProps) {
  if (!artists?.length) {
    return <p>No hay artistas</p>;
  }

  return (
    <ul>
      {artists.map((artist) => {
        return <li key={artist.id}>{artist.attributes.Name}</li>;
      })}
    </ul>
  );
}

export async function getStaticProps() {
  console.log(`${process.env.API_BASE_URL}/artists`);
  const artistsJson = await fetch(`${process.env.API_BASE_URL}/artists`);

  if (artistsJson.status === 200) {
    const artists = await artistsJson.json();

    return {
      props: {
        artists: artists.data,
      },
    };
  }

  return {
    props: {},
  };
}
