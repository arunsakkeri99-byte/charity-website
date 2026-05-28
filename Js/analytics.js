document.addEventListener('DOMContentLoaded', function() {
    const donationsChartCtx = document.getElementById('donationsChart').getContext('2d');
    const volunteerHoursChartCtx = document.getElementById('volunteerHoursChart').getContext('2d');
    const adoptionRateChartCtx = document.getElementById('adoptionRateChart').getContext('2d');
    const fundraisingChartCtx = document.getElementById('fundraisingChart').getContext('2d');

    const donations = JSON.parse(localStorage.getItem('donations')) || [];

    const donationsData = {
        labels: donations.map(donation => new Date(donation.id).toLocaleDateString()),
        datasets: [{
            label: 'Donations',
            data: donations.map(donation => donation.amount),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    const volunteerHoursData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
            label: 'Volunteer Hours',
            data: [50, 70, 60, 80],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }]
    };

    const adoptionRateData = {
        labels: ['Cats', 'Dogs', 'Birds', 'Others'],
        datasets: [{
            label: 'Adoption Rate',
            data: [30, 45, 10, 15],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    };

    const fundraisingData = {
        labels: ['Event 1', 'Event 2', 'Event 3', 'Event 4'],
        datasets: [{
            label: 'Fundraising',
            data: [5000, 7000, 3000, 9000],
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1
        }]
    };

    new Chart(donationsChartCtx, {
        type: 'line',
        data: donationsData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    new Chart(volunteerHoursChartCtx, {
        type: 'bar',
        data: volunteerHoursData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    new Chart(adoptionRateChartCtx, {
        type: 'pie',
        data: adoptionRateData,
        options: {
            responsive: true
        }
    });

    new Chart(fundraisingChartCtx, {
        type: 'bar',
        data: fundraisingData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
