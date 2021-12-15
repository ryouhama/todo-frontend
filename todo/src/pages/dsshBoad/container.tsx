import { useAppSelector } from 'app/hooks'
import { Presenter } from './presenter'

export const Container: React.FC = () => {
  const dashboard = useAppSelector((state) => state.dashboard.dashboard)

  return <Presenter dashboard={dashboard} />
}
