Frontend CORS Project - Setup Instructions
## Overview
This project demonstrates a frontend application that interacts with a
backend server,
ensuring proper functionality across different origins through
Cross-Origin Resource Sharing (CORS).
## Prerequisites
- Node.js installed on your machine
- A backend server running (ensure it has CORS enabled)
## Instructions to Run the Project
### 1. Clone the Repository
```bash
git clone [<repository_url>](https://github.com/Driconaari/CPHPetalStudioFrontend.git)
cd <repository_folder>
```
### 2. Install HTTP Server
Ensure you have `http-server` installed globally. If not, install it with:
```bash
npm install -g http-server
```
### 3. Start the Backend Server
Make sure your backend server is running. Refer to the backend
repository or documentation for specific instructions.
### 4. Launch the Frontend with CORS
Start the frontend application using `http-server` with the `--cors` flag:
```bash
http-server -p 5500 --cors
```
This will serve the frontend application at `http://localhost:5500`.
### 5. Access the Application
Open a browser and navigate to:
```
http://localhost:5500
```
Ensure your backend is running on the expected port (e.g.,
`http://localhost:8080` or as configured).
## Notes
- The `--cors` flag allows the frontend to make requests to a backend
running on a different origin.
- If you encounter issues, verify that the backend has proper CORS
settings enabled to allow requests from `http://localhost:5500`.
## Troubleshooting
### Common Issues
1. **CORS Errors in the Browser Console**
 - Ensure the backend allows requests from the frontend's origin
(`http://localhost:5500`).
 - If using Express.js, add middleware like:
 ```javascript
 const cors = require('cors');
 app.use(cors());
 ```
2. **Port Conflict on `5500`**
 - If port `5500` is already in use, specify a different port:
 ```bash
 http-server -p 8080 --cors
 ```
 - Update your backend configuration to allow requests from the new
origin.
3. **Backend Not Running**
 - Ensure your backend is properly configured and running.
 - Verify the base URL in the frontend code matches the backend
server.
## License
This project is licensed under the MIT License.


Need help? 

Contact: asgervb@gmail.com
