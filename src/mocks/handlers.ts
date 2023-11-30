import {rest} from 'msw'
import { API_URL } from '../app/constants'
import { citaPersonaje, citaRandom } from './dataMocks';

/**
 * Mock API handlers for testing purposes.
 * @type {Array<import('msw').RestHandler>}
 */
export const handlers = [
   /**
   * Mock handler for handling GET requests to the API_URL endpoint.
   * @param {import('msw').RestRequest} req - The request object.
   * @param {import('msw').ResponseResolver<any>} res - The response resolver.
   * @param {import('msw').Context} ctx - The request context.
   * @returns {import('msw').Response}
   */
  rest.get(API_URL, (req, res, ctx) => {
    // Determine whether to use citaPersonaje or citaRandom based on the 'character' query parameter.
     const data = req.url.searchParams.get('character') ? citaPersonaje : citaRandom
     console.log('Ejecutando desde msw', data)       
     
    // Return a mocked response with a status of 200 and JSON data.
      return res(
          ctx.status(200),
          ctx.json(data)
      )
  })
]