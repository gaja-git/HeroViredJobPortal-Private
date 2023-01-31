# HeroViredJobPortalProject
Capstone Project for building a job portal -> implemented by Gaja and Vidhya.

* PLEASE USE BELOW CREDENTIALS : 
	* Username : siva@gmail.com
	* Password : siva123
	
  * All the functionalities are executed in extensive length for this user detail. 
 
  * The other tested details are uploaded in user_testdata.txt and jobdetails_testdata.txt.

# Flow of the Project:
* Start by running npm install in react app to start the server. Default port is 3000.
* Start Rails server by running command rails s -p 3001.
* The login page will be the starting point.
	* Username and password has to be entered for existing user.
	* On clicking the submit button, axios post request is sent to Login Controller in Rails to authenticate the user.
	* If the request is successful, the page will automatically navigate to Dashboard page.
* In case of new user:
	* Clicking the create account button will lead the user to create account page.
	* User has to enter the username and password.
	* On clicking the submit button, a axios post request is sent to Useraccount Controller in Rails and new useraccount is created.
	* On successful response, the user is navigated to profile page to create the profile.
* Profile creation for new user:
	* There are 15 required fields in profile creation.
	* 8 fields are made as mandatory fields marked in red.
	* When user clicks on submit button, an axios post request is sent to Profile controller.
	* Profile controller checks whether mandatory fields are entered. Only if it satisfies the criteria, response is given back.
	* After successful profile creation, user is navigated to Login Page.
* Dashboard Header:
	* Contains Hero vired logo.
	* Dashboard button on click will lead to dashboard page.
	* Application Profile button on click will lead to profile page.
	* Applied Jobs button on click will lead to applied jobs page.
	* Logout button on click will log the user out of current session id.
* Dashboard Snapshots:
	* All jobs button on click will lead to all jobs page with list of all jobs in jobdetails table.
	* An axios get request is sent to Jobdetails Controller to fetch the details.
	* Count of all jobs is also fetched from same controller and displayed.
	* Eligible jobs on click will lead to all eligible page with list of jobs for which user is Eligible.
	* An axios get request is sent to Eligiblejobs Controller to fetch the details.
	* Count of eligible jobs is also fetched from same controller and displayed.
	* Applied jobs on click will lead to all applied page with list of jobs for which user has applied.
	* An axios get request is sent to Appliedjobs Controller to fetch the details.
	* Count of applied jobs is also fetched from same controller and displayed.
* Dashboard My application:
	* Shortlisted button on click will lead to shortlisted jobs page with list of jobdetails in table.
	* An axios get request is sent to Myapplications Controller to fetch the details.
	* Count of shortlisted jobs is also fetched from same controller and displayed.
	* Interviewing link on click will lead to interviewing jobs page with list of jobdetails in table.
	* An axios get request is sent to Myapplications Controller to fetch the details.
	* Count of interviewing jobs is also fetched from same controller and displayed.
	* Rejected link on click will lead to rejected jobs page with list of jobdetails in table.
	* An axios get request is sent to Myapplications Controller to fetch the details.
	* Count of rejected jobs is also fetched from same controller and displayed.
	* Offer received link on click will lead to offer received jobs page with list of jobdetails in table.
	* An axios get request is sent to Myapplications Controller to fetch the details.
	* Count of offer received jobs is also fetched from same controller and displayed.
* Dashboard Searchbox:
	* Input box to search for job titles,location etc.
	* Search button on click will not display results as this is not required functionality.
	* Drop down boxed for All jobs, industry, location, job type and posted date is mentioned.
* Dashboard All jobs section:
	* This section also displays the list of all jobs fetched from backend same as all jobs page.

# Problem Statement:

## Create a Job portal website where:

* A candidate will:
	
	* Create account
		* Email
	  * Password
	* Login
	* Add details in profile like
	   * Phone number
		* Current company
		* Current CTC
		* Current role
		* About
		* Profile picture
		* Upload CV
		* Add skills
	* View the list of jobs
		* Refer Figma design for the information
	* Apply in those jobs
## Figma Design:
 https://www.figma.com/file/VhTa9EH1FxszIjiVr7xc8u/Jobs?nodeid=0%3A1&t=jYeEhjrdIXVKF4Ak-3
## Tech expectation:
* Frontend: React
* Backend: Ruby on Rails
* Database: PostgreSQL or MongoDB
