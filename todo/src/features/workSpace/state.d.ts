import { IDashboard } from 'types/card'
import { IWorkSpace } from 'types/workSpace'

export interface IWorkSpaceState {
  workSpace: IWorkSpace
  dashboards: IDashboard[]
  loading: IWorkSpaceLoading
}

export interface IWorkSpaceLoading {
  post: {
    createDashboard: boolean
  }
}
