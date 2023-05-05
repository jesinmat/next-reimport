"use client";

export default function ClientPart() {
  const change = () => {
    fetch("/api/change");
  };
  return (
    <main>
      <button onClick={change}>Change ID</button>
    </main>
  );
}
