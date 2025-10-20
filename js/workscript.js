(function () {
  // 1) Get filter from URL
  const params = new URLSearchParams(window.location.search);
  let filter = (params.get('filter') || 'all').toLowerCase();

  const validFilters = ['all', 'software', 'design', 'graphic', 'illustration'];
  if (!validFilters.includes(filter)) {
    filter = 'all'; // fallback
  }

  // 2) Remove "active" from ALL filter buttons first
  document.querySelectorAll('input[name="shuffle-filter"]').forEach(input => {
    input.checked = false;
  });
  document.querySelectorAll('.btn-group .btn').forEach(btn => {
    btn.classList.remove('active');
  });

  // 3) Now activate ONLY the one that matches the URL filter
  const current = document.querySelector(`input[name="shuffle-filter"][value="${filter}"]`);
  if (current) {
    current.checked = true;
    current.closest('label')?.classList.add('active');
    current.dispatchEvent(new Event('change', { bubbles: true }));
  }
})();