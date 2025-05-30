import { HttpsProxyAgent } from "https-proxy-agent"
import fetch from "node-fetch"
import {
  compositionFileSchema,
  compositionIndexSchema,
  processEnvSchema,
} from "./schema"

const env = processEnvSchema.parse(process.env)

const agent = env.HTTPS_PROXY ? new HttpsProxyAgent(env.HTTPS_PROXY) : undefined

export async function fetchCompositions() {
  const res = await fetch(`${env.REGISTRY_URL}/compositions/index.json`, {
    agent,
  })
  const json = await res.json()
  return compositionIndexSchema.parse(json)
}

export async function fetchComposition(id: string) {
  try {
    const res = await fetch(`${env.REGISTRY_URL}/compositions/${id}.json`, {
      agent,
    })
    const json = await res.json()
    return compositionFileSchema.parse(json)
  } catch (error) {
    throw new Error(
      `Failed to fetch snippet "${id}". Make sure the id is correct or run @sh3yk0-ui/cli snippet list to see available snippets.`,
    )
  }
}
