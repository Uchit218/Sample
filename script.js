// ===== Sidebar Toggle =====
const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menuToggle');
const sidebarOverlay = document.getElementById('sidebarOverlay');

function openSidebar() {
  sidebar.classList.add('open');
  sidebarOverlay.classList.add('active');
}

function closeSidebar() {
  sidebar.classList.remove('open');
  sidebarOverlay.classList.remove('active');
}

menuToggle.addEventListener('click', openSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

// ===== Theme Toggle =====
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
});

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

// ===== Revenue Chart =====
const revenueCtx = document.getElementById('revenueChart').getContext('2d');
const revenueChart = new Chart(revenueCtx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Revenue',
        data: [4200, 5800, 4900, 6200, 7100, 6800, 7400, 8100, 7600, 8500, 9200, 9800],
        borderColor: '#6366f1',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#6366f1',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6
      },
      {
        label: 'Expenses',
        data: [3100, 3400, 3200, 3800, 4100, 3900, 4200, 4500, 4300, 4700, 5100, 5400],
        borderColor: '#94a3b8',
        backgroundColor: 'rgba(148, 163, 184, 0.05)',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#94a3b8',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
          font: { size: 12, weight: '500' }
        }
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { font: { size: 12 }, color: '#94a3b8' }
      },
      y: {
        grid: { color: 'rgba(148, 163, 184, 0.1)' },
        ticks: {
          font: { size: 12 },
          color: '#94a3b8',
          callback: (val) => '$' + (val / 1000).toFixed(0) + 'k'
        }
      }
    },
    interaction: {
      intersect: false,
      mode: 'index'
    }
  }
});

// ===== Traffic Doughnut Chart =====
const trafficCtx = document.getElementById('trafficChart').getContext('2d');
const trafficChart = new Chart(trafficCtx, {
  type: 'doughnut',
  data: {
    labels: ['Direct', 'Organic', 'Referral', 'Social'],
    datasets: [{
      data: [35, 30, 20, 15],
      backgroundColor: ['#6366f1', '#06b6d4', '#f59e0b', '#ef4444'],
      borderWidth: 0,
      hoverOffset: 8
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
          font: { size: 12, weight: '500' }
        }
      }
    }
  }
});

// ===== Active Nav Item =====
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', function (e) {
    if (this.closest('.sidebar-footer')) return;
    e.preventDefault();
    document.querySelectorAll('.sidebar-nav .nav-item').forEach(i => i.classList.remove('active'));
    this.classList.add('active');
    if (window.innerWidth < 768) closeSidebar();
  });
});