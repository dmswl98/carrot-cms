export default function generator(plop) {
  plop.setGenerator("Create component template files", {
    description: "Create templates",
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
        choices: ["src/api", "src/services/{query-name}/api"],
      },
    ],
    actions: (data) => {
      const selectedFolder = data?.folder || "";
      const isDomainsFolder = selectedFolder.includes("services");
      const folderPath = isDomainsFolder
        ? "src/services/{{query-name}}/api"
        : "{{folder}}/{{query-name}}";

      const actions = [
        {
          type: "add",
          path: `${folderPath}/types.ts`,
          templateFile: "src/templates/query/types.hbs",
        },
        {
          type: "add",
          path: `${folderPath}/query/queryKey.ts`,
          templateFile: "src/templates/query/query-key.hbs",
        },
        {
          type: "add",
          path: `${folderPath}/query/mutations.ts`,
          templateFile: "src/templates/query/mutations.hbs",
        },
        {
          type: "add",
          path: `${folderPath}/query/queries.ts`,
          templateFile: "src/templates/query/queries.hbs",
        },
      ];

      return actions;
    },
  });
}
