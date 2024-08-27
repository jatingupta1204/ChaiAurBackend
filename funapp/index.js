require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData = {
    "login": "jatingupta1204",
    "id": 135752049,
    "node_id": "U_kgDOCBdpcQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/135752049?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/jatingupta1204",
    "html_url": "https://github.com/jatingupta1204",
    "followers_url": "https://api.github.com/users/jatingupta1204/followers",
    "following_url": "https://api.github.com/users/jatingupta1204/following{/other_user}",
    "gists_url": "https://api.github.com/users/jatingupta1204/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/jatingupta1204/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/jatingupta1204/subscriptions",
    "organizations_url": "https://api.github.com/users/jatingupta1204/orgs",
    "repos_url": "https://api.github.com/users/jatingupta1204/repos",
    "events_url": "https://api.github.com/users/jatingupta1204/events{/privacy}",
    "received_events_url": "https://api.github.com/users/jatingupta1204/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Jatin Gupta",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 3,
    "public_gists": 0,
    "followers": 2,
    "following": 2,
    "created_at": "2023-06-06T18:48:13Z",
    "updated_at": "2024-05-16T07:28:11Z"
  }

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('hiteshdotcom')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at chai aur code</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Chai aur Code</h2>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);
})
