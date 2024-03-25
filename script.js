let scr = document.getElementById("s"); //direct
document.getElementsByTagName; //collection
document.getElementsByClassName; //collection
document.querySelector; //direct
document.querySelectorAll; //nodelist
let ans = document.getElementById("ans");
let a = document.getElementsByClassName("x");
for (let i = 0; i < a.length; i++) {
  a[i].addEventListener("click", () => {
    console.log(scr.value.length);
    console.log(scr.value.slice(scr.value.length - 1));
    if (
      "+-/*%.".includes(a[i].innerHTML) &&
      a[i].innerHTML == scr.value.slice(scr.value.length - 1)
    ) {
      // console.log("correct".includes(""));
      // scr.value = scr.value + a[i].innerHTML;
      // ans.value = "";
      scr.value = scr.value;
    } else {
      console.log("correct".includes(""));
      scr.value = scr.value + a[i].innerHTML;
      ans.value = "";
    }
  });
}

let ac = document.getElementById("ac");
ac.addEventListener("click", () => {
  scr.value = "";
  ans.value = "";
});

let ce = document.getElementById("ce");
ce.addEventListener("click", () => {
  scr.value = scr.value.slice(0, scr.value.length - 1);
});

let eq = document.getElementById("eq");
eq.addEventListener("click", () => {
  // scr.value = eval(scr.value);
  ans.value = eval(scr.value);
});
