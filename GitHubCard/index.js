/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/



function apiUserDataCreate(user){
  axios
    .get(user)
    .then(response =>{

      console.log(response.data);

      const userCreate = createCard(response.data);

      entryUser.appendChild(userCreate);
      
      return response
    })
    .catch(error =>{
      console.log("data not returned",error);
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

// apiUserDataCreate();


/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ["https://api.github.com/users/tetondan", "https://api.github.com/users/JRodDvlpr", "https://api.github.com/users/aanderson9313", "https://api.github.com/users/banksleisha", "https://api.github.com/users/jeffreywhitaker"];


followersArray.map(follower =>{
  apiUserDataCreate(follower);
  // entryUser.appendChild(createCard())
})
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

function createCard(data){
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

  //Assing class names
  card.classList.add("card");
  infoCard.classList.add("card-info");
  nameCard.classList.add("name");
  userNameCard.classList.add("username");

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

  return card;
};


// console.log(createCard("name"));