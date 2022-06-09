const navigation = document.getElementById("navbar");
const menu = document.getElementById("menu");
console.log(navigation)
menu.addEventListener("click", () => {

  // navigation.style.setProperty("--childenNumber", navigation.children.length);
  navigation.classList.add("active");
  menu.classList.add("active");
});