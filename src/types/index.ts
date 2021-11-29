export interface IPost {
  id: string
  img: string
  text: string
  date: string
  booked: boolean
}

export interface IPostToDB {
  img: string
  text: string
  date: string
  booked: boolean
}

export interface AppIconProps {
  [key: string]: any
}
