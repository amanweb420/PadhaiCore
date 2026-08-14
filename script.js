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

    default:
      console.log("Section not found:", section);
  }

}
