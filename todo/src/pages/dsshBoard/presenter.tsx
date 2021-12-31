import { useState } from 'react'
import { PageLayout } from 'components/layout'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Card } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import CloseIcon from '@mui/icons-material/Close'
import {
  createCardLstAsync,
  createCardAsync,
} from 'features/dashboard/dashboardSlice'
import { CreateCardListForm, ICard, ICardList, IDashboard } from 'types/card'
import { useAppDispatch } from 'app/hooks'

const CARD_LIST_WIDTH = 360

type PresenterProps = {
  dashboard: IDashboard
}

export const Presenter: React.FC<PresenterProps> = (props) => {
  const { dashboard } = props

  return (
    <PageLayout>
      <Dashboard cardLists={dashboard.cardLists} />
    </PageLayout>
  )
}

type DashboardProps = {
  cardLists: ICardList[]
}

const Dashboard: React.FC<DashboardProps> = (props) => {
  const { cardLists } = props

  return (
    <Box
      overflow="auto"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        m: 4,
        height: 640,
      }}
    >
      {cardLists.map((cardList, index) => (
        <CardList
          key={`cardList-${index}`}
          name={cardList.tittle}
          cardListId={cardList.id}
          cards={cardList.cards}
        />
      ))}
      <AddCardList />
    </Box>
  )
}

const AddCardList: React.VFC = (props) => {
  const { register, reset, handleSubmit } = useForm<{ tittle: string }>()
  const [open, setOpen] = useState(false)
  const openForm = () => {
    // 上位のDOMでcloseのonClockが反応してしまうため、ifで判定
    if (!open) setOpen(true)
  }
  const closeForm = () => {
    setOpen(false)
    reset()
  }
  const dispatch = useAppDispatch()
  const onSubmit: SubmitHandler<CreateCardListForm> = (data) => {
    dispatch(createCardLstAsync({ dashboardId: 1, data: data }))
    setOpen(false)
    reset()
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: 'block' }}
    >
      <Card
        sx={{
          minWidth: CARD_LIST_WIDTH,
          m: 2,
          p: 2,
          backgroundColor: '#ffffff3d',
        }}
        onClick={openForm}
      >
        リストを追加
        {open && (
          <>
            <TextField
              margin="normal"
              placeholder="リストのタイトルを入力..."
              sx={{ maxWidth: 320 }}
              fullWidth
              autoFocus
              {...register('tittle')}
            />
            <IconButton onClick={closeForm}>
              <CloseIcon />
            </IconButton>
          </>
        )}
      </Card>
    </Box>
  )
}

type CardListProps = {
  name: string
  cardListId: number
  cards: ICard[]
}

const CardList: React.FC<CardListProps> = (props) => {
  const { name, cardListId, cards } = props

  // メニュー
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const openEditMenu = Boolean(anchorEl)
  const handleOpenEditMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleCloseEditMenu = () => {
    setAnchorEl(null)
  }

  // カード追加
  const [openAddCard, setOpenAddCard] = useState(false)
  const handleOpenAddCard = () => {
    if (openEditMenu) handleCloseEditMenu()
    // HACK: useStateが非同期処理で、autoFocusが効かないため
    setTimeout(() => setOpenAddCard(true))
  }
  const handleCloseAddCard = () => {
    setOpenAddCard(false)
    reset()
  }

  const { register, reset, handleSubmit } = useForm<{ tittle: string }>()

  const dispatch = useAppDispatch()
  const onSubmit: SubmitHandler<{ tittle: string }> = (data) => {
    dispatch(
      createCardAsync({ dashboardId: 1, cardListId: cardListId, data: data })
    )
    handleCloseAddCard()
  }

  const editName = () => {
    console.log('TODO: edit Name')
  }
  const deleteCardList = () => {
    console.log('TODO: delete')
  }

  return (
    <Box
      sx={{
        minWidth: CARD_LIST_WIDTH,
        display: 'block',
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          backgroundColor: '#ebecf0',
          p: 2,
          m: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Typography
            sx={{
              width: 240,
              overflowWrap: 'break-word',
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            {name}
          </Typography>
          <IconButton sx={{ height: 40, ml: 2 }} onClick={handleOpenEditMenu}>
            <EditIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openEditMenu}
            onClose={handleCloseEditMenu}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={editName}>編集</MenuItem>
            <MenuItem onClick={handleOpenAddCard}>カードを追加</MenuItem>
            <MenuItem onClick={deleteCardList}>削除</MenuItem>
          </Menu>
        </Box>
        {cards.length >= 1 &&
          cards.map((card, index) => (
            <CardItem key={`card-${index}`} card={card} />
          ))}
        {openAddCard ? (
          <>
            <TextField
              margin="normal"
              placeholder="タイトルを入力..."
              fullWidth
              autoFocus
              {...register('tittle')}
            />
            <IconButton onClick={handleCloseAddCard}>
              <CloseIcon />
            </IconButton>
          </>
        ) : (
          <Button sx={{ mt: 2 }} variant="outlined" onClick={handleOpenAddCard}>
            カードを追加
          </Button>
        )}
      </Box>
    </Box>
  )
}

type CardItemProps = {
  card: ICard
}

const CardItem: React.FC<CardItemProps> = (props) => {
  const { card } = props
  return (
    <Card
      sx={{
        mt: 2,
        p: 2,
        display: 'block',
        width: 296, // HACK: 100%指定できないから、固定値で指定
        fontSize: 16,
        fontWeight: 600,
        overflowWrap: 'break-word',
      }}
    >
      {card.tittle}
    </Card>
  )
}
