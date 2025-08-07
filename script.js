function showContent(sectionId) {
  document.getElementById("header").style.display = "none";
  const sections = document.querySelectorAll('.content');
  sections.forEach(section => {
    section.style.display = 'none';
  });
  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.style.display = 'flex';
  }
}
