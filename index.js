function checkEligibility() {
  let name = document.getElementById("name").value;
  let  age = parseInt(document.getElementById("age").value);
  let bloodGroup = document.getElementById("bloodGroup").value;

  if (age < 18) {
    document.getElementById(
      "result"
    ).value = `${name}, you are not eligible to donate blood (Age must be 18 or older).`;
    return;
  } else if (age > 65) {
    document.getElementById(
      "result"
    ).value = `${name}, you are not eligible to donate blood (Age must be less than 65 or younger).`;
return;
  }

  let eligibility = {
    "A+": ["A+", "AB+"],
    "A-": ["A+", "A-", "AB+", "AB-"],
    "B+": ["B+", "AB+"],
    "B-": ["B+", "B-", "AB+", "AB-"],
    "AB+": ["AB+"],
    "AB-": ["AB+", "AB-"],
    "O+": ["O+", "A+", "B+", "AB+"],
    "O-": ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"],
  };

  if (bloodGroup in eligibility) {
    document.getElementById("result").value = `${name}, you can donate blood to: ${eligibility[bloodGroup].join(", "
    )}.`;
  } else {
    document.getElementById("result").value = `${name}, please select a 
    valid blood group.`;
  }
}
