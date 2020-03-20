function generateHTML(data) {
  return `<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
      <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
      <title>Document</title>
      <style>
      .BL {
        margin-top: 25px;
        padding-left: 15px;
        border-left: 1px solid grey;
        }
      </style>
    </head>
    <body>
    <div class="container">
        <h1 style='color:${data.color};'>${data.name}</h1>
        <hr>
        <div class="BL">
            <img src='${data.avatar_url}' alt='Photo of ${data.name}'/>
            <p>Bio: ${data.bio}</p>
            <p>Company: ${data.company}</p>
            <p>Repo URL: <a href='${data.html_url}'>${data.name}'s Repo</a></p>
            <p>Public Repos: ${data.public_repos}</p>
            <p>Followers: ${data.followers}</p>
            <p>Following: ${data.following}</p>
            <p>Location: ${data.location}</p>
        </div>
    </div>
    </body>
</html>`
}

module.exports = generateHTML;
  