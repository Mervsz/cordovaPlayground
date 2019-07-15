import { User } from '../model/user.interface';
const userList: User[] = [
  {
    name: "Paul George",
    company: "Yondu",
    location: "Lower Penthouse",
    bio: "I shoot ball from 3",
    avatar_url: "https://i.imgur.com/JRQPaJW.jpg",
    email: "paulgeorge@gmail.com"
  },
  {
    name: "Paul Holliday",
    company: "Amkor",
    location: "Upper Penthouse",
    bio: "I shoot ball from 2",
    avatar_url: "https://i.imgur.com/JRQPaJW.jpg",
    email: "paulholliday@gmail.com"
  },

]

export const USER_LIST = userList;