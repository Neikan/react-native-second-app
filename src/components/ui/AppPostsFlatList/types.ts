import { IPost } from '@/types'

export interface IAppPostsFlatListProps {
  data: IPost[]
  onOpen: (post: IPost) => void
}
