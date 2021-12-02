import { useState } from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import { AppLayout, MainLayout } from 'components/layout'
import { HeaderBar, SideBar } from 'components/bar'


export const Presenter: React.FC = (props) => {
  const drawerWidth = 240
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)

  return (
    <AppLayout>
      <HeaderBar open={open} toggle={toggle} drawerWidth={drawerWidth}/>
      <SideBar open={open} toggle={toggle} drawerWidth={drawerWidth}>
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
      </SideBar>
      <MainLayout>
        hogehoge
      </MainLayout>
    </AppLayout>
  )
}