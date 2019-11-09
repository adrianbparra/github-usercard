/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/



function apiUserDataCreate(user){
  axios
    .get(user)
    .then(response =>{

      const userInfo = response.data;
      console.log(response.data)


      axios.get(`${user}/repos`)
      .then(repoResponse =>{
        console.log(repoResponse.data);

        const userCreate = createCard(userInfo, repoResponse.data);

       entryUser.appendChild(userCreate);

        return repoResponse
      })

      return response
    })
    .catch(error =>{
      console.log("data not returned",error);
      return error
    })
}



/*
data:
  avatar_url: "https://avatars2.githubusercontent.com/u/54050896?v=4"
  bio: "Develop website that everyone can enjoy. "
  blog: ""
  company: null
  created_at: "2019-08-13T02:58:07Z"
  email: null
  events_url: "https://api.github.com/users/adrianbparra/events{/privacy}"
  followers: 4
  followers_url: "https://api.github.com/users/adrianbparra/followers"
  following: 8
  following_url: "https://api.github.com/users/adrianbparra/following{/other_user}"
  gists_url: "https://api.github.com/users/adrianbparra/gists{/gist_id}"
  gravatar_id: ""
  hireable: null
  html_url: "https://github.com/adrianbparra"
  id: 54050896
  location: null
  login: "adrianbparra"
  name: "Adrian Parra"
  node_id: "MDQ6VXNlcjU0MDUwODk2"
  organizations_url: "https://api.github.com/users/adrianbparra/orgs"
  public_gists: 0
  public_repos: 20
  received_events_url: "https://api.github.com/users/adrianbparra/received_events"
  repos_url: "https://api.github.com/users/adrianbparra/repos"
  site_admin: false
  starred_url: "https://api.github.com/users/adrianbparra/starred{/owner}{/repo}"
  subscriptions_url: "https://api.github.com/users/adrianbparra/subscriptions"
  type: "User"
  updated_at: "2019-10-28T16:52:49Z"
  url: "https://api.gi

  The response for
      ////////////https://api.github.com/users/adrianbparra/repos//////////
  {
    "id": 214537109,
    "node_id": "MDEwOlJlcG9zaXRvcnkyMTQ1MzcxMDk=",
    "name": "BonzersVideoGame",
    "full_name": "adrianbparra/BonzersVideoGame",
    "private": false,
    "owner": {
      "login": "adrianbparra",
      "id": 54050896,
      "node_id": "MDQ6VXNlcjU0MDUwODk2",
      "avatar_url": "https://avatars2.githubusercontent.com/u/54050896?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/adrianbparra",
      "html_url": "https://github.com/adrianbparra",
      "followers_url": "https://api.github.com/users/adrianbparra/followers",
      "following_url": "https://api.github.com/users/adrianbparra/following{/other_user}",
      "gists_url": "https://api.github.com/users/adrianbparra/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/adrianbparra/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/adrianbparra/subscriptions",
      "organizations_url": "https://api.github.com/users/adrianbparra/orgs",
      "repos_url": "https://api.github.com/users/adrianbparra/repos",
      "events_url": "https://api.github.com/users/adrianbparra/events{/privacy}",
      "received_events_url": "https://api.github.com/users/adrianbparra/received_events",
      "type": "User",
      "site_admin": false
    },
    "html_url": "https://github.com/adrianbparra/BonzersVideoGame",
    "description": "The first video game I create.",
    "fork": false,
    "url": "https://api.github.com/repos/adrianbparra/BonzersVideoGame",
    "forks_url": "https://api.github.com/repos/adrianbparra/BonzersVideoGame/forks",
    "keys_url": "https://api.github.com/repos/adrianbparra/BonzersVideoGame/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/adrianbparra/BonzersVideoGame/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/adrianbparra/BonzersVideoGame/teams",
    "hooks_url": "https://api.github.com/repos/adrianbparra/BonzersVideoGame/hooks",
    "issue_events_url": "https://api.github.com/repos/adrianbparra/BonzersVideoGame/issues/events{/number}",
    "events_url": "https://api.github.com/repos/adrianbparra/BonzersVideoGame/events",
    "assignees_url": "https://api.github.com/repos/adrianbparra/BonzersVideoGame/assignees{/user}",
    "branches_url": "https://api.github.com/repos/adrianbparra/BonzersVideoGame/branches{/branch}",
    "tags_url": "https://api.github.com/repos/adrianbparra/BonzersVideoGame/tags",
    "blobs_url": "https://api.github.com/repos/adrianbparra/BonzersVideoGame/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/adrianbparra/BonzersVideoGame/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/adrianbparra/BonzersVideoGame/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/adrianbparra/BonzersVideoGame/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/adrianbparra/BonzersVideoGame/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/adrianbparra/BonzersVideoGame/languages",
    "stargazers_url": "https://api.github.com/repos/adrianbparra/BonzersVideoGame/stargazers",
    "contributors_url": "https://api.github.com/repos/adrianbparra/BonzersVideoGame/contributors",
    "subscribers_url": "https://api.github.com/repos/adrianbparra/BonzersVideoGame/subscribers",
    "subscription_url": "https://api.github.com/repos/adrianbparra/BonzersVideoGame/subscription",
    "commits_url": "https://api.github.com/repos/adrianbparra/BonzersVideoGame/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/adrianbparra/BonzersVideoGame/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/adrianbparra/BonzersVideoGame/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/adrianbparra/BonzersVideoGame/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/adrianbparra/BonzersVideoGame/contents/{+path}",
    "compare_url": "https://api.github.com/repos/adrianbparra/BonzersVideoGame/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/adrianbparra/BonzersVideoGame/merges",
    "archive_url": "https://api.github.com/repos/adrianbparra/BonzersVideoGame/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/adrianbparra/BonzersVideoGame/downloads",
    "issues_url": "https://api.github.com/repos/adrianbparra/BonzersVideoGame/issues{/number}",
    "pulls_url": "https://api.github.com/repos/adrianbparra/BonzersVideoGame/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/adrianbparra/BonzersVideoGame/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/adrianbparra/BonzersVideoGame/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/adrianbparra/BonzersVideoGame/labels{/name}",
    "releases_url": "https://api.github.com/repos/adrianbparra/BonzersVideoGame/releases{/id}",
    "deployments_url": "https://api.github.com/repos/adrianbparra/BonzersVideoGame/deployments",
    "created_at": "2019-10-11T22:15:43Z",
    "updated_at": "2019-10-15T04:20:54Z",
    "pushed_at": "2019-10-15T04:20:52Z",
    "git_url": "git://github.com/adrianbparra/BonzersVideoGame.git",
    "ssh_url": "git@github.com:adrianbparra/BonzersVideoGame.git",
    "clone_url": "https://github.com/adrianbparra/BonzersVideoGame.git",
    "svn_url": "https://github.com/adrianbparra/BonzersVideoGame",
    "homepage": null,
    "size": 3,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "CSS",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 0,
    "license": null,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master"
  }
*/


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
const entryUser = document.querySelector(".cards");

apiUserDataCreate("https://api.github.com/users/adrianbparra");


/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ["https://api.github.com/users/tetondan", "https://api.github.com/users/JRodDvlpr", "https://api.github.com/users/aanderson9313", "https://api.github.com/users/banksleisha", "https://api.github.com/users/jeffreywhitaker"];


// followersArray.map(follower =>{
//   apiUserDataCreate(follower);
//   // entryUser.appendChild(createCard())
// })
/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

function createCard(data, repos){
  //declare variables
  const card = document.createElement("div");
  const imgCard = document.createElement("img");
  const infoCard = document.createElement("div");
  const nameCard = document.createElement("h3");
  const userNameCard = document.createElement("p");
  const locationCard = document.createElement("p");
  const profileCard = document.createElement("p");
  const profileLinkCard = document.createElement("a");
  const followersCard = document.createElement("p");
  const followingCard = document.createElement("p");
  const bioCard = document.createElement("p");

  //variables for the list of first 5 repos
  const reposCard = document.createElement("div");
  const reposexpand = document.createElement("h3");
  const repositories = document.createElement("div");
  const repoClose = document.createElement("h4");
 
  // repos

  //Assing class names
  card.classList.add("card");
  infoCard.classList.add("card-info");
  nameCard.classList.add("name");
  userNameCard.classList.add("username");
  //repos classes
  reposCard.classList.add("repos-card");
  repositories.classList.add("repos-container")

  //Event Listners
  reposexpand.addEventListener("click", ()=>{
    reposCard.classList.toggle("repos-expanded");

    if(reposexpand.style.display == "none"){
      reposexpand.style.display = "block";
    }else{
      reposexpand.style.display = "none"
    }

  })

    repoClose.addEventListener("click", () =>{
    reposCard.classList.toggle("repos-expanded");

    if(reposexpand.style.display == "none"){
      reposexpand.style.display = "block";
    }else{
      reposexpand.style.display = "none"
    }
    })

  //Append content
  card.appendChild(imgCard);
  card.appendChild(infoCard);
  infoCard.appendChild(nameCard);
  infoCard.appendChild(userNameCard);
  infoCard.appendChild(locationCard);
  infoCard.appendChild(profileCard);
  profileCard.appendChild(profileLinkCard);
  infoCard.appendChild(followersCard);
  infoCard.appendChild(followingCard);
  infoCard.appendChild(bioCard);
//Repos elements
  card.appendChild(reposCard);
  reposCard.appendChild(reposexpand);
  reposCard.appendChild(repositories);

  repos.sort((a,b) => {
    return  b.forks - a.forks
  });


  for(let i = 0; i < 5; i++){
    //declare variables
    const repoCard = document.createElement("div");
    const repoName = document.createElement("h3");
    const repoUrl = document.createElement("a");
    const repoForks = document.createElement("p");

    repoCard.appendChild(repoName);
    repoCard.appendChild(repoUrl);
    repoCard.appendChild(repoForks);

    repoCard.classList.add("repo-item");
    repoName.classList.add("title");

    repoName.textContent = repos[i].name;
    repoUrl.href = repos[i].html_url;
    repoUrl.textContent = repos[i].html_url;
    repoForks.textContent = `Forks: ${repos[i].forks}`;

    repositories.appendChild(repoCard);
    
  }

  repositories.appendChild(repoClose);


  //Assing Content
  imgCard.src = data.avatar_url;
  nameCard.textContent = data.name;
  userNameCard.textContent = data.login;
  locationCard.textContent = `Location: ${data.location}`;
  profileLinkCard.href = data.html_url;
  profileLinkCard.textContent = data.html_url;
  followersCard.textContent = `Followers: ${data.followers}`;
  followingCard.textContent = `Following: ${data.following}`;
  bioCard.textContent = data.bio;
  //repos content
  reposexpand.textContent = "Show Top Forked Repos";
  repoClose.textContent = "Close";

  return card;
};

const fakedata = {
  name : "Adrian Parra",
  login : "adrianbparra",
  location : "Location: Phoenix",
  html_url: "https://github.com/adrianbparra",
  avatar_url: "https://avatars2.githubusercontent.com/u/54050896?v=4",
  followers: 4,
  following: 109,
}

const fake5repos = [
  {
    name : "Bonezers Game",
    html_url: "https://github.com/adrianbparra/BonzersVideoGame",
    language: "CSS",
    forks: 12,
  },
  {
    name : "Bon Game",
    html_url: "https://github.com/adrianbparra/BonzersVideoGame",
    language: "CSS",
    forks: 7,
  },
  {
    name : "Bofghsg sdf",
    html_url: "https://github.com/adrianbparra/BonzersVideoGame",
    language: "CSS",
    forks: 5,
  },
  {
    name : "dsfasd Gamasdfe",
    html_url: "https://github.com/adrianbparra/BonzersVideoGame",
    language: "CSS",
    forks: 2,
  },
  {
    name : "asdasfd asdf",
    html_url: "https://github.com/adrianbparra/BonzersVasdfideoGame",
    language: "CSS",
    forks: 1,
  },
  {
    name : "asdasfd asdf",
    html_url: "https://github.com/adrianbparra/BonzersVasdfideoGame",
    language: "CSS",
    forks: 1,
  },
  {
    name : "asdasfd asdf",
    html_url: "https://github.com/adrianbparra/BonzersVasdfideoGame",
    language: "CSS",
    forks: 1,
  },
  {
    name : "asdasfd asdf",
    html_url: "https://github.com/adrianbparra/BonzersVasdfideoGame",
    language: "CSS",
    forks: 1,
  },

]

// console.log(createCard("name"));
// entryUser.appendChild(createCard(fakedata, fake5repos));


