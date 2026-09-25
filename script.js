// PadhaiCore - Main Navigation

function openSection(section) {

  switch (section) {

    case "board":
      window.location.href = "board.html";
      break;

    case "class11":
      window.location.href = "class11.html";
      break;

    case "class12":
      window.location.href = "class12.html";
      break;

    case "jee":
      window.location.href = "jee.html";
      break;

    case "editing":
      window.location.href = "editing.html";
      break;
      
    case "profile":
      window.location.href = "profile.html";
      break;
    default:
      console.log("Section not found:", section);
  }

}
// ==============================
// STUDENT PROFILE
// ==============================
function saveProfile() {

  const profile = {
    name: document.getElementById("profileName").value,
    className: document.getElementById("profileClass").value,
    stream: document.getElementById("profileStream").value,
    board: document.getElementById("profileBoard").value,
    school: document.getElementById("profileSchool").value,
    goal: document.getElementById("profileGoal").value
  };

  localStorage.setItem("studentProfile", JSON.stringify(profile));

  alert("✅ Profile Saved Successfully!");
}
function saveRoutine() {

  const routine = {
    time: document.getElementById("routineTime").value,
    subject: document.getElementById("routineSubject").value,
    task: document.getElementById("routineTask").value
  };

  localStorage.setItem("dailyRoutine", JSON.stringify(routine));

  alert("✅ Daily Routine Saved Successfully!");
}
