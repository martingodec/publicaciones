const indexController = {

    index: (req,res)=>{

        res.render('index');

    },

    datos1: (req, res) =>{

        console.log(req.body);
        res.send('Ok')

    }





};

module.exports = indexController;