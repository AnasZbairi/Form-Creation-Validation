document.addEventListener('DOMContentLoaded', function () {
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        const dataContainer = document.getElementById('api-data');

        try {
            // Fetch data from the API
            const response = await fetch(apiUrl);
            const users = await response.json();

            // Clear the loading message
            dataContainer.innerHTML = '';

            // Create a <ul> element
            const userList = document.createElement('ul');

            // Append each user's name as a <li> element
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });

            // Append the <ul> to the data container
            dataContainer.appendChild(userList);
        } catch (error) {
            // Handle errors
            dataContainer.innerHTML = 'Failed to load user data.';
            console.error('Error fetching user data:', error);
        }
    }

    // Invoke the function to fetch user data
    fetchUserData();
});
