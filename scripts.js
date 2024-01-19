// Toggle mobile navigation
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
  navigation.classList.toggle('show');
});

// Highlight active link in navigation
const currentLocation = location.href;
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(function (link) {
  if (link.href === currentLocation) {
    link.classList.add('active');
  }
});

// Dynamic search functionality for subjects
const searchInput = document.getElementById('searchInput');
const subjectsList = document.getElementById('subjectsList');
const subjects = subjectsList.getElementsByTagName('li');

searchInput.addEventListener('keyup', function (event) {
  const searchText = event.target.value.toLowerCase();
  Array.from(subjects).forEach(function (subject) {
    const subjectName = subject.textContent.toLowerCase();
    if (subjectName.includes(searchText)) {
      subject.style.display = 'block';
    } else {
      subject.style.display = 'none';
    }
  });
});

// Subject link event listeners
const subjectLinks = document.querySelectorAll('.subject-link');

subjectLinks.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    const subject = link.getAttribute('data-subject');
    openSubjectPapers(subject);
  });
});

// Function to open subject papers in a new tab
function openSubjectPapers(subject) {
  const oddSemesterLink = `https://yourwebsite.com/${subject}/odd_semester_papers`;
  const evenSemesterLink = `https://yourwebsite.com/${subject}/even_semester_papers`;

  window.open(oddSemesterLink, '_blank');
  window.open(evenSemesterLink, '_blank');
}
// Toggle mobile navigation
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
  navigation.classList.toggle('show');
});

// Highlight active link in navigation
const currentLocation = location.href;
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(function (link) {
  if (link.href === currentLocation) {
    link.classList.add('active');
  }
});

// Dynamic search functionality for subjects
const searchInput = document.getElementById('searchInput');
const subjectsList = document.getElementById('subjectsList');
const subjects = subjectsList.getElementsByTagName('li');

searchInput.addEventListener('keyup', function (event) {
  const searchText = event.target.value.toLowerCase();
  Array.from(subjects).forEach(function (subject) {
    const subjectName = subject.textContent.toLowerCase();
    if (subjectName.includes(searchText)) {
      subject.style.display = 'block';
    } else {
      subject.style.display = 'none';
    }
  });
});

// Subject link event listeners
const subjectLinks = document.querySelectorAll('.subject-link');

subjectLinks.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    const subject = link.getAttribute('data-subject');
    openSubjectPapers(subject);
  });
});

// Function to open subject papers in a new tab
function openSubjectPapers(subject) {
  const oddSemesterLink = `https://yourwebsite.com/${subject}/odd_semester_papers`;
  const evenSemesterLink = `https://yourwebsite.com/${subject}/even_semester_papers`;

  window.open(oddSemesterLink, '_blank');
  window.open(evenSemesterLink, '_blank');
}
