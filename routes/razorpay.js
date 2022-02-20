const express = require ('express')
const router = express.Router()
const Razorpay = require('razorpay')


//creating an order
//below instance created {furthur we will use this}
const instance= new Razorpay({
    key_id:'rzp_test_riqj502n7f1BBn',
    key_secret:'9tHSy3bphEv1FdeJ0jzMSGqI'
});



router.get('/',(req,res)=>{
     //generating an order through options
     let options={
         amount:100*100,
         currency:'INR',
     };
     instance.orders.create(options,(err,order)=>{
         if(err){
             console.log(error)
         }
         else{
             console.log(order)
             res.render('checkout',{amount:order.amount,order_id:order.id})
         } 
     })
})
router.post('/pay-verify',(req,res) => {
    console.log(req.body);
    body=req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id;
    var crypto = require("crypto");
    var expectedSignature = crypto.createHmac('sha256', 'rzp_test_riqj502n7f1BBn')
                                    .update(body.toString())
                                    .digest('hex');
                                    console.log("sig"+req.body.razorpay_signature);
                                    console.log("sig"+expectedSignature);
    
    if(expectedSignature === req.body.razorpay_signature){
      console.log("Payment Success");
    }else{
      console.log("Payment Fail");
    }
  })




module.exports= router

