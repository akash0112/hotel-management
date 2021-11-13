import Stripe from "stripe";
import User from "../model/UserModel";
import queryString from 'query-string'
const stripe=Stripe(process.env.STRIPE_SECRET);
export const createConnectAccount=async (req,res)=>{
    const user=await User.findById(req.user._id).exec();
   if(!user.stripe_account_id)
   {
       var account=await stripe.accounts.create({
           type:"custom",
           requested_capabilities:['card_payments','transfers'],
           country:'US'
   })
   console.log(account.id)
       user.stripe_account_id=account.id;
       user.save();
   }
  accountLink=await stripe.accountLinks.create({
       account:user.stripe_account_id,
    type:"custom_account_verification",
    collect: 'eventually_due',
})
account=Object.assign({
    "stripe_user[email]":user.email
})

}