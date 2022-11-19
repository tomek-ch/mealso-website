module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      borderRadius: {
        "4xl": "30px",
      },
      boxShadow: {
        md: "0px 4px 20px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
