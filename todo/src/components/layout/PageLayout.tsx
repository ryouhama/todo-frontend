import { useState } from 'react'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PeopleIcon from '@mui/icons-material/People'
import SettingsIcon from '@mui/icons-material/Settings'
import { AppLayout, MainLayout } from 'components/layout'
import { HeaderBar, SideBar } from 'components/bar'
import { useAppSelector } from 'app/hooks'

export const PageLayout: React.FC = (props) => {
  const { children } = props
  const dashboard = useAppSelector((state) => state.dashboard.dashboard)
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen((prev) => !prev)

  const dashboardTittle = dashboard.tittle ? dashboard.tittle : '名称未設定'

  return (
    <AppLayout>
      <HeaderBar open={open} toggle={toggle} boardName={dashboardTittle} />
      <SideBar open={open} toggle={toggle}>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Members" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </SideBar>
      <MainLayout>{children}</MainLayout>
    </AppLayout>
  )
}
