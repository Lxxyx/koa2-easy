import mongoose from 'mongoose'
import { randomString } from './../helper'

let userSchema = mongoose.Schema({
  username: String,
  password: String,
  name: {
    type: String,
    default: `NCUHR_${randomString(5)}`
  },
  subject: {
    type: String,
    default: "南昌大学人力资源管理"
  },
  year: {
    type: Number,
    default: 2014
  },
  studentId: Number
})


const User = mongoose.model('user', userSchema)

export default User
