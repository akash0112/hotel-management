import mongoose from "mongoose";
import bcrypt from "bcrypt";
const {Schema}=mongoose;
const userSchema =new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      require:true
    },
    password: {
      type: String,
    },
    stripe_account_id: "",
    stripe_seller: {},
    stripe_session: {},
  },
  {
    timestamps: true,
  }
);
userSchema.pre("save", function (next) {
  let user = this;
  if (user.isModified("password")) {
    return bcrypt.hash(user.password, 12, function (err, hash) {
      if (err) {
        console.log("Bcrypt Hash Err", err);
        return next(err);
      }
      user.password = hash;
      return next();
    });
  } else {
      return next();
  }
});
userSchema.methods.comparePassword=function(password,next){
  bcrypt.compare(password,this.password,function(err,match){
    if(err)
    {
      console.log("compare password err")
      return next(err,false)
    }
    console.log("match password",match)
  return next(null,match)
  })
}
export default mongoose.model("User", userSchema);
