const express = require('express');
const app = express();

const usuarios =[
    {id:1, nombre:'Jorge'},
    {id:2, nombre:'Rodolfo'},
    {id:3, nombre: 'Yiyo'}
];

app.get('/', (req,res)=>{
    res.send('Hola mundo desde express');
});

app.get('/api/usuarios', (req,res)=>{
    res.send(['Jorge','Rodolfo','Luis']);
});

app.get('/api/usuarios/:id', (req,res)=>{

    let usuario = usuarios.find(usuario => usuario.id === parseInt(req.params.id));

    if(!usuario){
        res.status(404).send('El usuario no existe');
    }else{
        res.send(usuario);
    }

});

const port = process.env.PORT || 3000;
app.listen(3000, ()=>{
    console.log(`Escuchando desde el puerto ${port}`);
});