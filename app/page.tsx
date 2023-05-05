import ClientPart from "lib/ClientPart";
import cache from "lib/cache";

export const dynamic = "force-dynamic";

export default async function Info() {
  const id = await cache.getId();

  return (
    <main>
      <h1>Info</h1>
      <p>Current ID: {id}</p>
      <ClientPart />
    </main>
  );
}
