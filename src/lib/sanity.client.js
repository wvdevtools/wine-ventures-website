// ./src/lib/sanity.client.ts

import { createClient } from "next-sanity";

export const projectId = "bnltpysf";
export const dataset = "production";
export const apiVersion = "2023-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
