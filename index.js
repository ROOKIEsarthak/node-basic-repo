

import express from 'express'
import 'dotenv/config'

const port = 4000;

const app = express();

const gitHubData = 
{
"login": "ROOKIEsarthak",
"id": 98842340,
"node_id": "U_kgDOBeQ25A",
"avatar_url": "https://avatars.githubusercontent.com/u/98842340?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/ROOKIEsarthak",
"html_url": "https://github.com/ROOKIEsarthak",
"followers_url": "https://api.github.com/users/ROOKIEsarthak/followers",
"following_url": "https://api.github.com/users/ROOKIEsarthak/following{/other_user}",
"gists_url": "https://api.github.com/users/ROOKIEsarthak/gists{/gist_id}",
"starred_url": "https://api.github.com/users/ROOKIEsarthak/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/ROOKIEsarthak/subscriptions",
"organizations_url": "https://api.github.com/users/ROOKIEsarthak/orgs",
"repos_url": "https://api.github.com/users/ROOKIEsarthak/repos",
"events_url": "https://api.github.com/users/ROOKIEsarthak/events{/privacy}",
"received_events_url": "https://api.github.com/users/ROOKIEsarthak/received_events",
"type": "User",
"site_admin": false,
"name": "Sarthak Kashyap",
"company": null,
"blog": "https://meek-bienenstitch-7e0486.netlify.app/",
"location": "Lucknow",
"email": null,
"hireable": null,
"bio": "Software Developer  Django-Python and\r\nMERN Stack .",
"twitter_username": null,
"public_repos": 25,
"public_gists": 0,
"followers": 1,
"following": 3,
"created_at": "2022-02-01T18:23:20Z",
"updated_at": "2024-01-14T02:04:22Z"
}




app.get('/',(req,res)=>{
    res.status(200).send('Hello World!!')
})

app.get('/twitter' , (req,res)=>{
    res.status(200).send('Ambivert_1')
})

app.get('/login',(req,res)=>{
    res.status(200).send('<h1> Please Login at Chai aur Code </h1>')
})

app.get('/youtube',(req,res)=>{
    res.status(200).send('<h2> chai aur Code </h2>')
})

app.get('/github',(req,res)=>{
    res.status(200).json(gitHubData)
})

app.listen(port,()=>{
    console.log(`Server running on port : ${port}`);
})

