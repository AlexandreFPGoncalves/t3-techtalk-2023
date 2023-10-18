import { TableOfContents } from "@/components";

export default function About() {
  const tableOfContents = [{}];

  return (
    <div>
      <div className="h-full w-full">
        <h3>Docs</h3>
        <TableOfContents
          sections={[
            {
              title: "Teste 1",
              path: "#teste1",
              subsections: [
                {
                  title: "Teste 2",
                  path: "#teste2",
                },
                {
                  title: "Teste 3",
                  path: "#teste3",
                },
              ],
            },
            {
              title: "Teste 4",
              path: "#teste4",
              subsections: [
                {
                  title: "Teste 5",
                  path: "#teste5",
                },
                {
                  title: "Teste 6",
                  path: "#teste6",
                },
              ],
            },
          ]}
        />
        <h3 className="h-10">Docs</h3>
        <h3 className="h-10">Docs</h3>
        <h3 className="h-10">Docs</h3>
        <h3 className="h-10">Docs</h3>
        <h3 className="h-10">Docs</h3>
        <h3 className="h-96">Docs</h3>
        <h3 className="h-96">Docs</h3>
        <h3 className="h-96">Docs</h3>
        <h3 className="h-96">Docs</h3>
        <h3 className="h-96">Docs</h3>
      </div>
    </div>
  );
}
