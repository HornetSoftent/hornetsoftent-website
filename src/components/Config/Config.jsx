import "dotenv/config";

const dev = process.env.NODE_ENV != "production";
export const URL = dev ? "http://localhost:3050" : "https://www.hornetsoftent.com";

