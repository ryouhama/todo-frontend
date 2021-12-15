import { store } from 'app/store'
import { MockMethods, MockResponse } from 'axios-mock-server'
import * as types from 'types/card'

const createCardList: MockMethods = {
  post: async (request): Promise<MockResponse> => {
    const cardLists = store.getState().dashboard.dashboard.cardLists

    // cardListsの中でIDの最大値のリストを作成し、さらにその中から最大値を取得する
    const maxId =
      cardLists.length >= 1
        ? Math.max(
            ...cardLists.map((cardList) => {
              return cardList.cards.length >= 1
                ? Math.max(...cardList.cards.map((it) => it.id))
                : 0
            })
          )
        : 0

    const response: types.CreateCardResponse = {
      card: {
        id: maxId + 1,
        tittle: request.data.tittle,
      },
    }
    return [200, response]
  },
}

export default createCardList
