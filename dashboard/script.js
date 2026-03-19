// Sidebar toggle
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

document.addEventListener('click', (e) => {
  if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
    sidebar.classList.remove('open');
  }
});

// Tab switching
document.querySelectorAll('.tab-group').forEach(group => {
  group.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      group.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
});

// Sidebar nav active state
document.querySelectorAll('.sidebar__nav li').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.sidebar__nav li').forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});

// Revenue Chart
const revenueCtx = document.getElementById('revenueChart').getContext('2d');
new Chart(revenueCtx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Revenue',
        data: [320000, 410000, 390000, 480000, 520000, 610000, 580000, 640000, 700000, 680000, 750000, 820000],
        backgroundColor: 'rgba(199, 70, 52, 0.85)',
        borderRadius: 6,
        borderSkipped: false,
        barPercentage: 0.6,
      },
      {
        label: 'Target',
        data: [400000, 430000, 450000, 500000, 550000, 590000, 620000, 660000, 690000, 720000, 740000, 800000],
        type: 'line',
        borderColor: '#4A90D9',
        backgroundColor: 'transparent',
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: '#4A90D9',
        tension: 0.4,
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: { font: { size: 12 }, usePointStyle: true, boxWidth: 8 }
      },
      tooltip: {
        callbacks: {
          label: ctx => ` $${(ctx.raw / 1000).toFixed(0)}k`
        }
      }
    },
    scales: {
      x: { grid: { display: false }, ticks: { font: { size: 12 } } },
      y: {
        grid: { color: '#F0F0F0' },
        ticks: {
          font: { size: 12 },
          callback: v => `$${v / 1000}k`
        }
      }
    }
  }
});

// Doughnut Chart
const doughnutCtx = document.getElementById('doughnutChart').getContext('2d');
new Chart(doughnutCtx, {
  type: 'doughnut',
  data: {
    labels: ['Enterprise', 'Professional', 'Starter', 'Free'],
    datasets: [{
      data: [38, 29, 20, 13],
      backgroundColor: ['#C74634', '#4A90D9', '#5BB974', '#F5A623'],
      borderWidth: 0,
      hoverOffset: 6,
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '68%',
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: ctx => ` ${ctx.label}: ${ctx.raw}%`
        }
      }
    }
  }
});
