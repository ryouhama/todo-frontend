import { PageLayout } from 'components/layout'
import { createDashboardAsync } from 'features/workSpace/workSpaceSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { IDashboard } from 'types/card'
import { IUser } from 'types/user'
import { IWorkSpace } from 'types/workSpace'

type Props = {
  user: IUser
  workSpace: IWorkSpace
  dashboards: IDashboard[]
}

export const Presenter: React.FC<Props> = (props) => {
  const { user, workSpace, dashboards } = props
  const dispatch = useDispatch()

  const onClick = () => {
    dispatch(
      createDashboardAsync({
        workSpaceId: workSpace.id,
        data: { tittle: 'hogehoge', createUser: user },
      })
    )
  }

  return (
    <PageLayout>
      ボード一覧
      <div>
        {dashboards.map((dashboard) => (
          <Link key={`${dashboard.id}`} to={`dashboards/${dashboard.id}`}>
            {dashboard.tittle}
          </Link>
        ))}
        <div onClick={onClick}>新規作成</div>
      </div>
    </PageLayout>
  )
}
