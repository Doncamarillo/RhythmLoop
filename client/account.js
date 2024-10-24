document.addEventListener('DOMContentLoaded', async () => {
    const accountDetailsContainer = document.getElementById('account-details');
    const editButton = document.getElementById('edit-button');
    const editForm = document.getElementById('edit-form');
    const accountForm = document.getElementById('account-form');
    const username = 'doncamarillo'; // Replace with logic to get the current username if needed

    // Fetch account details by username
    const getAccountDetails = async (username) => {
        try {
            console.log('Fetching account details for username:', username);
            const response = await axios.get(`http://localhost:3002/accounts?username=${username}`);
            console.log('Account details fetched:', response.data);
            return response.data[0]; // Assuming the response is an array and we're interested in the first match
        } catch (error) {
            console.error('Error fetching account details:', error);
            return null;
        }
    };

    // Display account details
    const displayAccountDetails = (account) => {
        console.log('Displaying account details:', account);
        if (!accountDetailsContainer) {
            console.error('No element with ID "account-details" found');
            return;
        }
        if (!account) {
            console.error('Account data is null or undefined');
            return;
        }
        const detailsHTML = `
            <h3>${account.name}</h3>
            <p>Username: ${account.username}</p>
            <p>Email: ${account.email}</p>
            <p>Phone Number: ${account.phoneNumber}</p>
            <p>Joined: ${new Date(account.createdAt).toDateString()}</p>
        `;
        accountDetailsContainer.innerHTML = detailsHTML;
    };

    // Show edit form with current details
    const showEditForm = (account) => {
        document.getElementById('username').value = account.username;
        document.getElementById('email').value = account.email;
        document.getElementById('phoneNumber').value = account.phoneNumber;
        editForm.style.display = 'block';
    };

    // Update account details
    const updateAccountDetails = async (account) => {
        try {
            console.log('Updating account details for ID:', account._id);
            await axios.put(`http://localhost:3002/accounts/${account._id}`, account);
            console.log('Account details updated successfully');
        } catch (error) {
            console.error('Error updating account details:', error);
        }
    };

    // Fetch and display account details on page load
    const account = await getAccountDetails(username);
    if (account) {
        displayAccountDetails(account);
    } else {
        console.error('No account details found for username:', username);
    }

    // Event listener for edit button
    editButton.addEventListener('click', () => {
        if (account) {
            showEditForm(account);
        }
    });

    // Event listener for save button
    accountForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const updatedAccount = {
            _id: account._id,
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            phoneNumber: document.getElementById('phoneNumber').value,
        };
        await updateAccountDetails(updatedAccount);
        displayAccountDetails(updatedAccount);
        editForm.style.display = 'none';
    });
});
