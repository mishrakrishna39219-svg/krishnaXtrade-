// ================================
// KrishnaXTrade | Correlation Chart
// ================================

// Fake demo data (structure real quant jaisa)
// Future me API se replace hoga

const labels = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const btcData = [12, 18, 15, 22, 28, 35, 30, 38, 42, 39, 45, 50];
const goldData = [20, 19, 21, 22, 23, 24, 25, 26, 27, 26, 28, 29];
const dxyData = [90, 92, 91, 93, 94, 95, 96, 97, 96, 98, 99, 100];

const ctx = document.getElementById("correlationChart").getContext("2d");

const correlationChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: labels,
    datasets: [
      {
        label: "Bitcoin (BTC)",
        data: btcData,
        borderWidth: 2,
        borderColor: "#f7931a",
        tension: 0.3
      },
      {
        label: "Gold",
        data: goldData,
        borderWidth: 2,
        borderColor: "#ffd700",
        tension: 0.3
      },
      {
        label: "US Dollar Index (DXY)",
        data: dxyData,
        borderWidth: 2,
        borderColor: "#58a6ff",
        tension: 0.3
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#e6edf3"
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: "#8b949e"
        },
        grid: {
          color: "#21262d"
        }
      },
      y: {
        ticks: {
          color: "#8b949e"
        },
        grid: {
          color: "#21262d"
        }
      }
    }
  }
});

// ================================
// Auto-refresh feel (simulation)
// ================================
setInterval(() => {
  btcData.push(btcData[btcData.length - 1] + (Math.random() * 4 - 2));
  goldData.push(goldData[goldData.length - 1] + (Math.random() * 1 - 0.5));
  dxyData.push(dxyData[dxyData.length - 1] + (Math.random() * 1 - 0.5));

  btcData.shift();
  goldData.shift();
  dxyData.shift();

  correlationChart.update();
}, 4000);
