import { IWorkSpace } from 'types/workSpace'

export interface IWorkSpaceState {
  workSpaces: IWorkSpace[]
  loading: IWorkSpaceLoading
}

export interface IWorkSpaceLoading {}
