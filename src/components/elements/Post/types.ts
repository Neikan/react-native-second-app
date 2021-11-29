import { IPost } from '@/types'

export interface IPostProps {
  post: IPost
  onOpen: (post: IPost) => void
}
