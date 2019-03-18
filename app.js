const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const Block = require('./Block');
const Blockchain = require('./BlockChain');

const myBlockchain = new Blockchain.Blockchain();

app.use(bodyParser.json({ extended: false }));


app.get('/block/:height', (req, res) => {
    const height = req.params.height;

    if (isNaN(height)) {
        res.status(404).send('You can get a block using its height');

    }

    else if (height < 0) {
        res.status(404).send('Blocks numbers are positive integers');
    }
    else {
        myBlockchain.getBlockHeight()
            .then(currentBlockHeight => {

                if (currentBlockHeight < height) {
                    res.status(404).send('The block you are looking for does not exist. ' +
                        'Current block height is ' + currentBlockHeight);
                }
                else {
                    myBlockchain.getBlock(height)
                        .then(foundBlock => {
                            res.status(200).send(foundBlock);
                        })
                        .catch(err => console.log(err));
                }
            })
            .catch(err => console.log(err));
    }
});



app.post('/block', (req, res) => {
    const blockBody = req.body.body;
    if (!blockBody) {
        res.status(400).send('You should send the block body along with your request');
    }
    else {
        let newBlock = new Block.Block(req.body.body);
    myBlockchain.addBlock(newBlock)
        .then(createdBlock => {
            res.status(200).send(createdBlock);
        })
        .catch(err => console.log(err));
    }
    
})
console.log('Server started on port 8000');
app.listen(8000);

