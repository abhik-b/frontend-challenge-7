const emaiInput = document.querySelector("input");
const emailChecker = /\S+@\S+\.\S+/;

document.querySelector("button").addEventListener("click", () => {
  if (!emailChecker.test(emaiInput.value)) {
    emaiInput.classList.add("error");

    document.querySelector(".error-message").style.display = `block`;
    setTimeout(() => {
      document.querySelector(".error-message").style.transform = `scale(1)`;
    }, 100);
  } else {
    if (emaiInput.classList.contains("error")) {
      emaiInput.classList.remove("error");
      document.querySelector(".error-message").style.transform = `scale(0)`;
      setTimeout(() => {
        document.querySelector(".error-message").style.display = `none`;
      }, 300);
    }
  }
});
