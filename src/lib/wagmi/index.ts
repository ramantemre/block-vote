// export * from "./config";
// export * from "./Connect";
// export * from "./Connected";

// The above code gives the error
// Error: It's currently unsupported to use "export *" in a client boundary. Please use named exports instead.
// Import trace for requested module:
// ./node_modules/wagmi/dist/chains.js
// ./src/lib/wagmi/config.ts
// ./src/lib/wagmi/index.ts
// ./src/app/page.tsx

import { config } from "./config";
import { Connect } from "./Connect";
import { Connected } from "./Connected";

export { config, Connect, Connected };
