import { IUser } from './user'

// Interface
export interface ICard {
  id: number
  tittle: string
}

export interface ICardList {
  id: number
  tittle: string
  cards: ICard[]
}

export interface IDashboard {
  id: number
  tittle: string
  cardLists: ICardList[]
}

// From Interface
export interface CreateCardListForm {
  tittle: string
}

// Request, Response Interface Interface
export interface CreateDashboardRequest {
  data: {
    tittle: string
  }
  createUser: IUser
}

export interface CreateDashboardResponse {
  dashboard: IDashboard
}

export interface CreateCardListRequest {
  dashboardId: number
  data: {
    tittle: string
  }
}

export interface CreateCardListResponse {
  cardList: ICardList
}