const http=require('http');
const express=require('express');
const app=express();
const port=3000;
app.get('/',(req,res)=>{
    res.send('Hello');

});
app.get('/user/profile',(req,res)=>{
    res.send('User route');
})
app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const foundUser = userInfo.find(u => u.id === id);

    if (foundUser) {
        res.json(foundUser);
    } else {
        res.status(404).send('User not found');
    }
});

app.listen(port,()=>{
    console.log('Server is running');
});



