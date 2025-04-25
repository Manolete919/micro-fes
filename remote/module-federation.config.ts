export const mfConfig = {
  name: "remote",
  exposes: {
    "./Counter": "./src/Counter.tsx",
  },
  shared: ["react", "react-dom"],
};
