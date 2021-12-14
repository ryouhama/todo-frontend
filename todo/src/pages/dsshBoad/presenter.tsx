import { useState } from 'react'
import { PageLayout } from 'components/layout'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Card } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { createCardLstAsync } from 'features/dashboard/dashboardSlice'
import { CreateCardListForm, IDashboard } from 'types/card'
import { useAppDispatch } from 'app/hooks'

const CARD_LIST_WIDTH = 320

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

interface ICardList {
  tittle: string
  cards: ICard[]
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
      sx={{ minWidth: CARD_LIST_WIDTH, display: 'block' }}
    >
      <Card
        sx={{ m: 2, p: 2, backgroundColor: '#ffffff3d' }}
        onClick={openForm}
      >
        リストを追加
        {open && (
          <>
            <TextField
              margin="normal"
              placeholder="リストのタイトルを入力..."
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
  cards: ICard[]
}

const CardList: React.FC<CardListProps> = (props) => {
  const { name, cards } = props
  const [open, setOpen] = useState(false)
  const { register, reset, handleSubmit } = useForm<{ tittle: string }>()
  const onSubmit: SubmitHandler<{ tittle: string }> = (data) =>
    console.log(data)

  const toggleButton = () => {
    setOpen((prev) => !prev)
    reset()
  }

  return (
    <Box sx={{ minWidth: 270, display: 'block', width: CARD_LIST_WIDTH }}>
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
        <Typography>{name}</Typography>
        {cards.length >= 1 &&
          cards.map((card, index) => (
            <CardItem key={`card-${index}`} card={card} />
          ))}
        <Button sx={{ mt: 2 }} variant="outlined" onClick={toggleButton}>
          カードを追加
        </Button>
        {open && (
          <TextField
            margin="normal"
            label="タイトル"
            placeholder="タイトルを入力"
            fullWidth
            autoFocus
            {...register('tittle')}
          />
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
  return <Card sx={{ mt: 2, p: 2, width: '100%' }}>{card.tittle}</Card>
}

interface ICard {
  tittle: string
}
