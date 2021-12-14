import { useState } from 'react'
import { PageLayout } from 'components/layout'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Card } from '@mui/material'

export const Presenter: React.FC = (props) => {
  return (
    <PageLayout>
      <Dashboard cardList={[]} />
    </PageLayout>
  )
}

interface ICardList {
  tittle: string
  cards: ICard[]
}

type DashboardProps = {
  cardList: ICardList[]
}

const Dashboard: React.FC<DashboardProps> = (props) => {
  const { cardList } = props

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
      {cardList.length === 0 && <AddCardList />}
      {cardList.map((cardList, index) => (
        <CardList
          key={`cardList-${index}`}
          name={cardList.tittle}
          cards={cardList.cards}
        />
      ))}
    </Box>
  )
}

const AddCardList: React.FC = () => {
  const { register, reset, handleSubmit } = useForm<{ tittle: string }>()
  const [open, setOpen] = useState(false)
  const toggleForm = () => {
    setOpen((prev) => !prev)
    reset()
  }

  const onSubmit: SubmitHandler<{ tittle: string }> = (data) =>
    console.log(data)

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ minWidth: 270, display: 'block' }}
    >
      <Card
        sx={{ m: 2, p: 2, backgroundColor: '#ffffff3d' }}
        onClick={toggleForm}
      >
        リストを追加
        {open && (
          <TextField
            margin="normal"
            label="リストのタイトル"
            placeholder="リストのタイトルを入力"
            fullWidth
            autoFocus
            {...register('tittle')}
          />
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
    <Box sx={{ minWidth: 270, display: 'block' }}>
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
