export type Method = 'get' | 'put' | 'post' | 'patch'

export default interface Http {
  route(method: Method, url: string, callback: any): Promise<any>;
  listen(port: number): Promise<void>
}

