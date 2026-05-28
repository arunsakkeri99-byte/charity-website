document.addEventListener('DOMContentLoaded', function() {
    const donateForm = document.getElementById('donateForm');
    const donations = JSON.parse(localStorage.getItem('donations')) || [];

    if (donateForm) {
        donateForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const name = document.getElementById('donorName').value;
            const amount = document.getElementById('donationAmount').value;
            const message = document.getElementById('donationMessage').value;
            
            if (name && amount) {
                donations.push({ id: Date.now(), name, amount: Number(amount), message });
                localStorage.setItem('donations', JSON.stringify(donations));
                alert(`Thank you for your donation, ${name}!`);
                donateForm.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }

    function renderDonations() {
        const list = document.getElementById('list');
        if (list) {
            list.innerHTML = '';
            donations.forEach(donation => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <input type="checkbox" class="donation-checkbox" data-id="${donation.id}">
                    ${donation.name} donated $${donation.amount} 
                `;
                list.appendChild(li);
            });
        }
    }

    window.editSelected = function() {
        const selectedCheckboxes = document.querySelectorAll('.donation-checkbox:checked');
        if (selectedCheckboxes.length !== 1) {
            alert('Please select exactly one donation to edit.');
            return;
        }

        const id = selectedCheckboxes[0].getAttribute('data-id');
        const donation = donations.find(d => d.id == id);
        if (donation) {
            const newName = prompt("Enter new name:", donation.name);
            const newAmount = prompt("Enter new amount:", donation.amount);
            const newMessage = prompt("Enter new message:", donation.message);
            if (newName && newAmount) {
                donation.name = newName;
                donation.amount = Number(newAmount);
                donation.message = newMessage;
                localStorage.setItem('donations', JSON.stringify(donations));
                renderDonations();
            }
        }
    };

    window.deleteSelected = function() {
        const selectedCheckboxes = document.querySelectorAll('.donation-checkbox:checked');
        if (selectedCheckboxes.length !== 1) {
            alert('Please select any donations to delete.');
            return;
        }
        selectedCheckboxes.forEach(checkbox => {
            const id = checkbox.getAttribute('data-id');
            const index = donations.findIndex(d => d.id == id);
            if (index !== -1) {
                donations.splice(index, 1);
            }
        });
        localStorage.setItem('donations', JSON.stringify(donations));
        renderDonations();
    };

    renderDonations();


});

