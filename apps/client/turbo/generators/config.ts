import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("query", {
    description: "Adds a new query templates",
    prompts: [
      {
        type: "input",
        name: "query-name",
        message: "What is the name of the query",
      },
      {
        type: "list",
        name: "folder",
        message: "Which folder do you want to create?",
        choices: ["src/api", "src/domains/{query-name}/api"],
      },
    ],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    actions: (data: any) => {
      const selectedFolder = data?.folder || "";
      const isDomainsFolder = selectedFolder.includes("domains");
      const folderPath = isDomainsFolder
        ? "src/domains/{{query-name}}/api"
        : "{{folder}}/{{query-name}}";

      const actions = [
        {
          type: "add",
          path: `${folderPath}/types.ts`,
          templateFile: "templates/query/types.hbs",
        },
        {
          type: "add",
          path: `${folderPath}/query/queryKey.ts`,
          templateFile: "templates/query/query-key.hbs",
        },
        {
          type: "add",
          path: `${folderPath}/query/mutations.ts`,
          templateFile: "templates/query/mutations.hbs",
        },
        {
          type: "add",
          path: `${folderPath}/query/queries.ts`,
          templateFile: "templates/query/queries.hbs",
        },
      ];

      return actions;
    },
  });
}
