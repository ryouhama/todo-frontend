import { useAppDispatch, useAppSelector } from 'app/hooks'
import { Presenter } from './presenter'

export const Container: React.FC = () => {
  const dispatch = useAppDispatch()

  const user = useAppSelector((state) => state.auth.user)
  // dispatch(getWorkSpaceAsync({ userId: user.id }))

  const workSpace = useAppSelector((state) => state.workSpace.workSpace)
  const dashboards = useAppSelector((state) => state.workSpace.dashboards)

  return <Presenter user={user} workSpace={workSpace} dashboards={dashboards} />
}
