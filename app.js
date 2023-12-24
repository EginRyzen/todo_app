const express = require('express');
const db = new Map()

const app = express();
const port = 3000;

app.use(express.json())

app.get('/', (req, res) => {
    return res.send('Hello World!');
});

app.post('/todos', (req, res) => {

    db.set("123", req.body)

    return res.json({ "success create todo : ": req.body })
});

app.get('/todos', (req, res) => {
    const data = Array.from(db.values())

    return res.json({
        data
    })
})

app.get('/todos/:id', (req, res) => {
    const id = req.params.id
    const data = db.get(id)

    return res.json({
        data
    })
})

app.delete('/todos/:id', (req, res) => {
    const id = req.params.id
    const data = db.delete(id)

    return res.json({
        "mesege": "Success Delete Todo"
    })
})


app.put('/todos/:id', (req, res) => {
    const id = req.params.id

    db.set(id, req.body);

    return res.json({
        message: "Success Update gess"
    });
})

app.patch('/todos/:id', (req, res) => {
    const id = req.params.id

    const existingTodo = db.get(id);
    const updatedTodo = { title: req.body.title, deskripsi: existingTodo.deskripsi };
    db.set(id, updatedTodo);

    return res.json({
        message: "Success Update gess"
    });
})


app.listen(port, () => {
    console.log(`Example app listening on port: ${port}`);
});