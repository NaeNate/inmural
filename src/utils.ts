export const domain =
  process.env.NODE_ENV === "production"
    ? "https://example.com"
    : "http://localhost:3000"
