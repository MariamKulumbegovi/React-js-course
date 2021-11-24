import { UserModel } from "../models/userModel"



export const formatUser=(user)=> `${user.firstName} ${user.lastName}`

export const user = new UserModel("gal","gadot")
user.age=19
user.bio="this is bio"

export const again = new UserModel("harry","potter")