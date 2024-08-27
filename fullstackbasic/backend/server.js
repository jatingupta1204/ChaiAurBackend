import express from "express"

const app = express();

app.get('/', (req, res) => {
    res.send("Server is ready");
});

app.get('/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A Joke',
            content: 'This is a Joke'
        },
        {
            id: 2,
            title: 'Another Joke',
            content: 'This is another Joke'
        },
        {
            id: 3,
            title: 'Third Joke',
            content: 'This is Third Joke'
        },
        {
            id: 4,
            title: 'Fourth Joke',
            content: 'This is Fourth Joke'
        },
        {
            id: 5,
            title: 'Fifth Joke',
            content: 'This is Fifth Joke'
        }
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});