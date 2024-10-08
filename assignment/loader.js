function loadContent(url, targetId) {
  fetch(url)
    .then(response => response.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const body = doc.body;
      const container = document.createElement('div');
      container.className = `${targetId}-container`;
      container.innerHTML = body.innerHTML;
      document.getElementById(targetId).appendChild(container);
    })
    .catch(error => console.error('Error loading content:', error));
}

document.addEventListener('DOMContentLoaded', function() {
  loadContent('semesters2.html', 'semesters2-content');
  loadContent('courses.html', 'courses-content');
  loadContent('endsection.html', 'endsection-content');
});
