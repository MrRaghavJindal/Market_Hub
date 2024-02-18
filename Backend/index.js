const express = require("express");
const cors = require("cors");
require("./DB/config");
const user = require("./DB/User");
const product = require("./DB/Product")

const app = express();

app.use(cors());
app.use(express.json());

app.post("/register", async (req, res) => {
  let result = new user(req.body);
  let data = await result.save();
//   data = data.toObject();
//   delete data.password;
  console.log(req.body);
  res.send(data);
});

app.post("/login", async (req, res) => {
    if (req.body.email && req.body.password) 
    {
            let result = await user.findOne(req.body);
            if(result) 
            {
            res.send(result);
            } 
            else 
            {
            res.send({ result: "NO USER FIND" });
            }
    } 
    else 
    {
            res.send({ result: "NO USER FIND" });
    }
});
app.post('/add-product',async(req,res)=>{
        let result = new product(req.body);
        let data = await result.save();
        res.send(data);
})

app.get('/products',async(req,res)=>{
        let result = await product.find();
        if(result.length>0)
        {
        res.send(result);
        }
        else
        {
                res.send({result:"no Product Found"})
        }
})

app.get('/profile/:id', async(req,res)=>{
        let result = await user.find({_id : req.params.id});
        if(result.length>0)
        {
        res.send(result);
        }
        else
        {
                res.send({result:"no Product Found"})
        }
})

app.get('/myproducts/:id', async(req,res)=>{
        let result = await product.find({userId : req.params.id});
        
        if(result.length>0)
        {
        res.send(result);
        }
        else
        {
                res.send({result:"no Product Found"})
        }
})

app.delete('/delete/:id', async(req,res)=>{
        let result =  await product.deleteOne({_id : req.params.id})
        res.send(result);
})



app.put('/update/:id', async(req,res)=>{
        let result = await product.updateOne(
                {_id:req.params.id},
                {$set:req.body}
        )
        if(result)
        {
                res.send(result)
        }
        else
        {
                res.send({result:"not found"});
        }
})
app.listen(5000);
