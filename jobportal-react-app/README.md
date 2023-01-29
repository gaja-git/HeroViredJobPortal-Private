# WORK SPLIT:
  * Login Page - Vidhya
  * Create account - Gaja
  * Profile page - Vidhya
  * Middle Section and Content in Jobcanvas - Gaja
  * Jobcanvas layout, Header and Searchbox - Vidhya
  * All jobs & Eligible jobs - Gaja
  * Applied jobs - Vidhya
  * Shortlisted & Rejected - Gaja
  * Interviewing & Offer received - Vidhya
  * Logout - Vidhya
  
# Creating new react app 
 * npx create-react-app jobportal-react-app

To resolve the "react-scripts is not recognized as an internal or external command" 
Execute - 
* npm install 
This will resolve the dependency error while executing in different systems

* npm install react-router-dom 
This command will install files required for routing purpose.

* npm install axios 
This command will install axios required for fetching API data from backend.

# Commands and instructions to create React compnents

Remove unwanted files and images before starting like Reportwebvitals,setuptests and remove the respective paths from Index.js

Make the following changes in below files
* Index.js:
	
	* Import Router and its components
 
        import { BrowserRouter as Router } from "react-router-dom";
	* Wrap App component inside Router
 
          <Router>
            <App />
          </Router>

* App.js: 

	 * import router
  
    import { Routes, Route } from "react-router-dom";

	 * Import all components created
  
    import Createaccount from './components/Welcome/Createaccount';

 	* Calling routes inside return function
  
             <Routes>
                <Route element={<Createaccount />} path="/createaccount" />
                 <Route element={<Login />} path="/" />
             </Routes>

      Similarly all the components used to route are called here.

* Images folder:

	 * Images folder is created inside public to store all the images needed for project and called from this path.
  
                <img src="/images/HV1.png" alt="HV_logo" height='40px' width='200px' />

* Creating components:

	* Right click on src and create new folder - components
Components is used to write JSX codes for our project work and then called in APP.js.
	* Mutiple folders and files are created inside components with respect to our usage.

* List of components created for Jobportal project:

	* Welcome folder:
		* Login.js and login.css for login page.
		* Createaccount.js and createacc.css for creating a new account.
		* Logout.js and logout.css for logging off page.
	* Profile folder:
		* Profile.js and profile.css for creating new profile
	* Dashboard folder:
		* Header folder: 
		* Midsection folder:
		* Searchbox folder:
		* Content folder:
		* Jobcanvas.js and jobcanvas.css -> contains page layout sections divided for all the above folders above. All the components are called within Jobcanvas.js
	* Jobs folder:
		* Alljobs folder:
		* Appliedjobs folder:
		* Eligiblejobs folder:
	* Myapplications folder:
		* Interviewing:
		* Shortlisted
		* Rejected
		* Offerreceived
  
* When a link needs to be used:
	*  Use this syntax
 
      <Link to="/rejected">
                Rejected
       </Link>
	* import { Link } from "react-router-dom"

* useNavigate:
	* import { useNavigate } from "react-router-dom";
	* inside function
 
		    const navigate = useNavigate();
	            navigate('/jobcanvas');

* Calling asynfunctions onClick:

	       * <button onClick={create_v}>Please Create Account </button>
 
 	     * <input type="submit" className="login_submit" onClick={sendLogin} />

	 * let [ldata, setLdata] = useState({});
 
    const navigate = useNavigate();

    function handleLogin(e) {
    
        setLdata({
            ...ldata,
            [e.target.name]: e.target.value
                });
          }
         console.log("ldata", ldata);

    async function sendLogin() {

        console.log(ldata);
        let res = await axios.post("/login", ldata)
        console.log(res, "res");
        navigate('/jobcanvas');
    }
    
    function create_v() {
    
               navigate("/createaccount");}


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
