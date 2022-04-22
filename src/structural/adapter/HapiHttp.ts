import Hapi, { Server } from '@hapi/hapi'
import Http, { Method } from './Http'

export default class HapiHttp implements Http{
  server: Server

  constructor () {
    this.server = Hapi.server({})
  }


  async route(method: Method, url: string, callback: any): Promise<any> {
    this.server.route({
      path: url,
      method: method,
      handler(request: any, h: any) {
        return callback(request.params, request.body)
      }
    })
  }

  async listen(port: number): Promise<void> {
    this.server.settings.port = port
    this.server.start()
  }
}