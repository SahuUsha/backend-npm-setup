#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prettierConfig = path.join(process.cwd(), ".prettierrc");
const gitignoreFile = path.join(process.cwd(), ".gitignore");
const serverFile = path.join(process.cwd(), "server.js");



if (!fs.existsSync(prettierConfig)) {
  fs.writeFileSync(
    prettierConfig,
    JSON.stringify(
      {
        semi: true,
        singleQuote: true,
        trailingComma: "es5",
        tabWidth: 2,
      },
      null,
      2
    )
  );
  console.log("✅ .prettierrc created!");
} else {
  console.log("⚠️ .prettierrc already exists, skipping...");
}


if (!fs.existsSync(gitignoreFile)) {
  fs.writeFileSync(
    gitignoreFile,
    `# Node modules
node_modules

# Env files
.env

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Build
dist
build`
  );
  console.log("✅ .gitignore created!");
} else {
  console.log("⚠️ .gitignore already exists, skipping...");
}



if(!fs.existsSync(serverFile)){
       fs.writeFileSync(
        serverFile,
 `import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// add you preffereable port 

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("🚀 Backend Starter is running!");
});

// Start server
app.listen(PORT, () => {
  console.log("✅ Server running on http://localhost:" + PORT);
});
`
)
console.log("☑️ server.js created! ");

}else {
  console.log("⚠️ server.js already exists, skipping...");
}




console.log("🚀 Backend starter kit is ready! 😉 all the best from us-kick-npm-package ");

