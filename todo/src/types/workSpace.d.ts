import { IDashboard } from './card'
import { IUser } from './user'

export interface IWorkSpace {
  id: number
  name: string
}

// Request, Response Interface Interface
export interface GetWorkSpaceRequest {
  userId: number
}

export interface GetWorkSpaceResponse {
  workSpace: IWorkSpace
}

export interface CreateDashboardRequest {
  workSpaceId: number
  data: {
    tittle: string
    // その他の設定
    createUser: IUser
  }
}

export interface CreateDashboardResponse {
  dashboard: IDashboard
}
