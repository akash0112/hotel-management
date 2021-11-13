import User from "../model/UserModel";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name) return res.status(400).send("Name is Required");
  if (!password | (password.length < 6))
    return res.status(400).send("Password is Required");
  let userExist = await User.findOne({ email }).exec();
  console.log(userExist);
  if (userExist) {
    return res.status(400).send("Email is Taken");
  } else {
    const user = new User(req.body);
    try {
      await user.save();
      console.log("user created", user);
      return res.status(201).send(user);
    } catch (err) {
      return res.status(400).send("Error Try Again");
    }
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email }).exec();
    if (!user) {
      res.status(400).send("User not found");
    }
    user.comparePassword(password, (err, match) => {
      if (!match || err) {
        return res.status(400).send("wrong password");
      }
      let token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      res.json({
        token,
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          password: user.password,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
      });
    });
  } catch (err) {
    console.log(err);
    res.status(400).send("login in failed");
  }
};
