{
  function getDefaultName() {
    return "shun";
  }

  let userName = "uhyo";
  userName ||= getDefaultName();
  console.log(userName);
  // >uhyo
}
