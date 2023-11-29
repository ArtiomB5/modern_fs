module.exports = {
    main: {
        input: "./src/5_shared/api/schema.yaml",
        output: {
            target: "./src/5_shared/api/generated.ts",
            prettier: true,
            override: {
                mutator: {
                    path: "./src/5_shared/api/api-instance.ts",
                    name: "createInstance"
                }
            }
        }
    }
}