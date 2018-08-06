const http = new easyHTTP();
/* http.get("https://jsonplaceholder.typicode.com/posts", function(err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
}); */

//create data
const data = {
  title: "custom Post",
  body: "this is a custom post"
};

/* http.post("https://jsonplaceholder.typicode.com/posts", data, function(
  err,
  response
) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
}); */

//updated post

/* http.put("https://jsonplaceholder.typicode.com/posts/1", data, function(
  err,
  response
) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
}); */

http.delete("https://jsonplaceholder.typicode.com/posts/1", function(
  err,
  response
) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
