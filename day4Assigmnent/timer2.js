
console.log("OTP Sent Successfully");

let time = 10;

const timer = setInterval(() => {
  console.log("Resend OTP in:", time, "seconds");
  time--;

  if (time < 0) {
    clearInterval(timer);
    console.log("You can now resend OTP");
  }
}, 1000);