import express, { Request, Response, Express } from 'express'
import Http, { Method } from './Http'

export default class ExpressHttp implements Http {
  app: Express

  constructor () {
    this.app = express()
  }

  async route(method: Method, url: string, callback: any): Promise<any> {
    this.app[method](url, async (request: Request, response: Response) => {
      const result = await callback(request.params, request.body)
      return response.status(200).send(result)
    })
  }

  async listen(port: number): Promise<void> {
    this.app.listen(port) 
  }
}
