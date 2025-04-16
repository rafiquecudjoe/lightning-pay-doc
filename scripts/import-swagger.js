#!/usr/bin/env node

/**
 * This script imports a Swagger/OpenAPI file from another project into the Docusaurus API docs
 *
 * Usage:
 *   node import-swagger.js /path/to/your/swagger.json [target-name]
 *
 * Example:
 *   node import-swagger.js ../my-api-project/swagger.json my-api-spec
 */

const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

// Get command line arguments
const sourcePath = process.argv[2];
const targetName = process.argv[3] || path.basename(sourcePath);

if (!sourcePath) {
  console.error("Error: Source path is required");
  console.log(
    "Usage: node import-swagger.js /path/to/swagger.json [target-name]"
  );
  process.exit(1);
}

// Resolve paths
const sourceAbsolutePath = path.resolve(sourcePath);
const targetDir = path.resolve(__dirname, "../openapi");
let targetPath = path.join(targetDir, targetName);

// Ensure target directory exists
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
  console.log(`Created directory: ${targetDir}`);
}

try {
  // Read the source file
  const fileContent = fs.readFileSync(sourceAbsolutePath, "utf8");
  let data;

  // Parse based on file extension
  if (sourcePath.endsWith(".json")) {
    data = JSON.parse(fileContent);

    // If target doesn't have an extension, add yaml extension
    if (
      !targetPath.endsWith(".json") &&
      !targetPath.endsWith(".yaml") &&
      !targetPath.endsWith(".yml")
    ) {
      targetPath += ".yaml";
    }

    // Convert JSON to YAML if target is yaml
    if (targetPath.endsWith(".yaml") || targetPath.endsWith(".yml")) {
      const yamlContent = yaml.dump(data, { lineWidth: 100 });
      fs.writeFileSync(targetPath, yamlContent, "utf8");
      console.log(`Converted JSON to YAML and saved to: ${targetPath}`);
    } else {
      // Keep as JSON
      fs.writeFileSync(targetPath, JSON.stringify(data, null, 2), "utf8");
      console.log(`Copied JSON file to: ${targetPath}`);
    }
  } else if (sourcePath.endsWith(".yaml") || sourcePath.endsWith(".yml")) {
    data = yaml.load(fileContent);

    // If target doesn't have an extension, add yaml extension
    if (
      !targetPath.endsWith(".json") &&
      !targetPath.endsWith(".yaml") &&
      !targetPath.endsWith(".yml")
    ) {
      targetPath += ".yaml";
    }

    // Convert YAML to JSON if target is json
    if (targetPath.endsWith(".json")) {
      fs.writeFileSync(targetPath, JSON.stringify(data, null, 2), "utf8");
      console.log(`Converted YAML to JSON and saved to: ${targetPath}`);
    } else {
      // Keep as YAML
      fs.writeFileSync(targetPath, fileContent, "utf8");
      console.log(`Copied YAML file to: ${targetPath}`);
    }
  } else {
    console.error(`Unsupported file format: ${sourcePath}`);
    process.exit(1);
  }

  // Output instructions for updating config
  console.log("\nImport successful! Now update your docusaurus.config.js:");
  console.log(`
  plugins: [
    [
      'docusaurus-theme-redoc',
      {
        specs: [
          // ...existing specs
          {
            id: '${path.basename(targetPath, path.extname(targetPath))}',
            spec: 'openapi/${path.basename(targetPath)}',
            route: '/api/${path.basename(
              targetPath,
              path.extname(targetPath)
            )}/',
          },
        ],
      }
    ],
  ],
  `);
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}
