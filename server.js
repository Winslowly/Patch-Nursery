const express = require('express');
const mongoose = require('mongoose');
const inv = require('./models/nursery.js');
const Trees = require('./models/schema.js');
const app = express();
app.use(express.urlencoded({extended:true}));


// app.get('/', (req, res)=>{
// 	res.render('index.ejs')
// });

// app.get('/seed', (req, res)=>{
//     Trees.create(inv)
//     res.redirect('/')
// });


app.get('/', (req, res)=>{
    Trees.find({}, (err, allTrees)=>{
        res.render('index.ejs', {
            trees: allTrees
        })
    })
})

// SHOW

app.get('/show/:id', (req, res)=>{
    Trees.findById(req.params.id, (err, showTree)=> {
        console.log(showTree) 
        res.render('show.ejs', {
            trees: showTree
        })
    })
})

// EDIT

app.get('/:id/edit', (req, res)=>{
    Trees.findById(req.params.id, (err, editTree)=> {
        // console.log(editTree) 
        res.render('edit.ejs', {
            trees: editTree
        })
    })
})

// DELETE

app.delete('/:id', (req, res)=>{
    Trees.findByIdAndDelete(req.params.id, (err, data)=>{
        res.redirect('/')
    })
})


mongoose.connect('mongodb://localhost:27017/Patch', () => {
    console.log('The connection with mongod is established')
})

app.listen(3000, ()=> {
	console.log('listening...');
});
