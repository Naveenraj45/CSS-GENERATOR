document.addEventListener("DOMContentLoaded", () => {
  const range = document.getElementById("range");
  const spam = document.getElementById("spam");
  const range_value = document.getElementById("range_value");
  const border_value = document.getElementById("border_value");
  const text = document.getElementById("text");
  const entire = document.querySelector(".outer");
  const copy = document.getElementById("btn");
  const border_style = document.getElementById("border_style");
  const color = document.getElementById("color");

  var defaultvalue = 10;
  var defaultText = "";
  var border = "solid";
  var border_size = 3;
  var default_color = "black";

  function valueUpdate() {
    defaultvalue = range.value;
    border_size = range_value.value;
    spam.innerHTML = defaultvalue + "px";
    border_value.innerHTML = border_size + "px";
    defaultText = `border-radius :${defaultvalue}px; border: ${border_size}px ${border} ${default_color} ;`;
    // default_color = color.value;
    text.value = defaultText;
    entire.style.cssText = defaultText;
  }

  range.addEventListener("mousemove", valueUpdate);
  range.addEventListener("change", valueUpdate);
  range_value.addEventListener("mousemove", valueUpdate);
  range_value.addEventListener("change", valueUpdate);

  copy.addEventListener("click", () => {
    document.querySelector("textarea").select();
    document.execCommand("copy");
    alert("code copied");
  });

  valueUpdate();
  border_style.addEventListener("change", function () {
    border = this.value;
    valueUpdate();
  });
  color.addEventListener("change", function () {
    default_color = this.value;
    valueUpdate();
  });
});
