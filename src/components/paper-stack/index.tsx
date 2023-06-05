// Modules
import { ReactNode } from 'react';
import { Paper, Stack, Typography, Skeleton } from '@mui/material';

// Style
import PaperStackStyle from './style';

type Props = {
  title?:string;
  children?:ReactNode;
  actionButtons?:ReactNode;
  isLoading?:boolean;
}

export default function PaperStack (props:Props) {
  const { isLoading = false } = props;
  return (
    <Paper sx={PaperStackStyle.MainContainer}>
      <Stack sx={PaperStackStyle.MainPaddingContainer}>
        <Stack rowGap={2}>
          {isLoading ? <TableSkeleton {...props}/> : <PaperStackContent {...props}/> }
        </Stack>
      </Stack>
    </Paper>
  )
}

export function PaperStackContent (props:Props) {
  const { children, title, actionButtons } = props;
  return (
    <>
      <Stack>
        <Typography variant='subtitle2' textTransform='uppercase'>{title}</Typography>
        {actionButtons}
      </Stack>
      {children}
    </>
  )
}

function TableSkeleton (props:Props) {
  return (
    <Stack rowGap={2}>
      <Typography variant='subtitle2' textTransform='uppercase'>{props.title}</Typography>
      <Stack rowGap={2}>
        <Skeleton width='90%' variant='rounded' height={30} animation="wave"/>
        <Skeleton width={30} variant='circular' height={30} animation="wave"/>
        <Skeleton width='100%' variant='rounded' height={30} animation="wave"/>
      </Stack>
    </Stack>
  )
}