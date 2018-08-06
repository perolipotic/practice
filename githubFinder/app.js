//init github

const github = new GitHub();
const ui = new UI();

//search input
const SearchUser = document.getElementById("searchUser");

//search input listener
SearchUser.addEventListener("keyup", e => {
  //get Input test
  const userText = e.target.value;

  if (userText !== 0) {
    //make http call
    github.getUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    ui.clearProfile();
  }
});
