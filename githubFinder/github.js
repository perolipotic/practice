class GitHub {
  constructor() {
    this.client_id = "78e42a46def585234560";
    this.client_secret = "0ef18028f2ec8370ddb7cff7eae52250f04f96d5";
    this.repos_count = 5;
    this.repos_sort = "created:asc";
  }
  async getUser(user) {
    const profileResponese = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const reposResponese = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${
        this.repos_count
      }&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${
        this.client_secret
      }`
    );

    const profile = await profileResponese.json();
    const repos = await reposResponese.json();
    return {
      profile: profile,
      repos: repos
    };
  }
}
