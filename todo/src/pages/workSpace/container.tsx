import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { getWorkSpaceAsync } from 'features/workSpace/workSpaceSlice'
import { Presenter } from './presenter'
import { useParams } from 'react-router'

export const Container: React.FC = () => {
  const dispatch = useAppDispatch()

  const { workSpaceId } = useParams()
  const user = useAppSelector((state) => state.auth.user)

  useEffect(() => {
    if (workSpaceId)
      dispatch(getWorkSpaceAsync({ workSpaceId: Number(workSpaceId) }))
  }, [dispatch, workSpaceId])

  const workSpace = useAppSelector((state) => state.workSpace.workSpace)
  const dashboards = useAppSelector((state) => state.workSpace.dashboards)

  return <Presenter user={user} workSpace={workSpace} dashboards={dashboards} />
}
