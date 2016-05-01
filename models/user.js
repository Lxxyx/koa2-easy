import mongoose from 'mongoose'

let userSchema = mongoose.Schema({
  name: String,
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

userSchema.methods.isExist = async name => await this.find({name}).length === 0

const User = mongoose.model('user', userSchema)

export default User