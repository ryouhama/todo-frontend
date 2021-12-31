import { IWorkSpaceState } from './state'

export const initialState: IWorkSpaceState = {
  workSpace: {
    id: -1,
    name: '名称未設定',
  },
  dashboards: [],
  loading: {
    post: {
      createDashboard: false,
    },
  },
}
