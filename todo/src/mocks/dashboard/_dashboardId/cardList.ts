import { MockMethods, MockResponse } from 'axios-mock-server'
import * as types from 'types/card'

const createCardList: MockMethods = {
  post: async (request): Promise<MockResponse> => {
    const response: types.CreateCardListResponse = {
      cardList: {
        id: 1,
        tittle: request.data.tittle,
        cards: [],
      },
    }
    return [200, response]
  },
}

export default createCardList
