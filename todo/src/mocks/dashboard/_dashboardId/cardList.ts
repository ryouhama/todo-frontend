import { store } from 'app/store'
import { MockMethods, MockResponse } from 'axios-mock-server'
import * as types from 'types/card'

const createCardList: MockMethods = {
  post: async (request): Promise<MockResponse> => {
    const cardLists = store.getState().dashboard.dashboard.cardLists
    const maxId =
      cardLists.length >= 1 ? Math.max(...cardLists.map((it) => it.id)) : 0
    const response: types.CreateCardListResponse = {
      cardList: {
        id: maxId + 1,
        tittle: request.data.tittle,
        cards: [],
      },
    }
    return [200, response]
  },
}

export default createCardList
