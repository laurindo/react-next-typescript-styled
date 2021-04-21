import FetcherRulesService, { Result } from './FetcherRulesService'

export default class FetchService implements FetcherRulesService {
  URL: String = process.env.SERVER_API

  async get(path: string): Promise<Result> {
    if (!path) throw new Error('path.required')
    const response = await fetch(`${URL}${path}`)

    return {
      data: await response.json(),
      error: null
    }
  }

  async getExternalAPI(path: string): Promise<Result> {
    if (!path) throw new Error('path.required')
    const response = await fetch(
      `https://my-json-server.typicode.com/typicode/demo/${path}`
    )
    return {
      data: await response.json(),
      error: null
    }
  }
}
