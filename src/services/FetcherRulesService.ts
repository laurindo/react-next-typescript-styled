export interface Result {
  json?(): object
  data: Object
  error: Object | null
}

export default abstract class IFetcherService {
  abstract post?(path: string, data: object): Promise<Result>
  abstract get(path: string): Promise<Result>
  abstract update?(): Promise<Result>
  abstract delete?(): Promise<Result>
}
