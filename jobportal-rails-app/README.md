# Creating Rails app:
rails new jobportal-rails-app -d postgresql
# Configuring the below fields in database.yml for development and test: 
  * username: <your database user name>
  * password: <your database password>
  * host: localhost
  * port: 5432

To resolve the "missing gemfiles error " 
Execute - bundle install 
This will resolve the dependency error while executing in different systems

## Create Jobportal application:
 	 * Go to config/routes.rb and set the path in root for index API from Application Controller.
		root "application#index"
		
	* Creating controllers
		* rails generate controller name
	* For the user created controllers add the route as resources in routes.rb
		* resources :controllername
	* Creating model
		 * rails generate model Name
	 This will generate model.rb as well db migration file automatically.
	* Creating only db files
		* rails generate migration create_tablename
	* Db migration is performed to create tables
		 * rails db:migrate
	* CRUD operations can be performed inside the respective controllers.

## The following tables are migrated into database jobportalg2
 * useraccount - Vidhya
 * skills - Gaja
 * jobdetails - Gaja
 * profile - Vidhya  
 * candidateapplication - Gaja 
 
 ## The following controllers are created 
 * usseraccount - Vidhya
 * jobdetails - Gaja
 * login and logut - Vidhya
 * candidateapplications - Gaja
 * profile - Vidhya
 * skill - Gaja
 * eligiblejobs -Gaja
 * appliedjobs -Gaja
 * myapplication -Vidhya
 
### Details Rails project creation overview:
# Create Jobportal application landing routes:
	1. Go to config/routes.rb
		root "application#index"
	2. Go to app/controllers/application_controller.rb
		Add a function as below
			def index
				 render html: "JobPortal-Rails Application"
			end
			
# Create Table using migration
* rails generate migration create_skills
    added: t.string :skillName
    ran rails db:migrate
* rails generate migration create_jobdetails
    t.string :jobDescription
    t.string :companyName      
    t.string :location
    t.string :jobType
    t.bigint :salary      
    t.date :postedDate
    t.string :domain
    t.string :jobCode      
    t.string :skillsRequired
    t.string :applicationStatus
    ran rails db:migrate
* rails generate migration create_candidateapplication
add  t.integer :jobid
      t.integer :userid
      t.string :jobcode
      t.date :applieddate      
      t.string :candidateapplicationstatus
      t.string :location
      t.date :posteddate
rails db:migrate

* rails generate migration create_useraccounts
add   t.string :email
      t.string :password_digest
      t.string :usertype
rails db:migrate
* rails generate migration create_profiles
add  t.string :firstname
      t.string :lastname
      t.string :email
      t.string :contact
      t.string :address
      t.string :about
      t.string :profilepic
      t.string :currentcompany
      t.bigint :ctc
      t.bigint :experience
      t.string :currentrole
      t.string :skills
      t.string :resumelink
      t.bigint :expectedsalary
      t.string :preferredlocation

rails db:migrate

* to add missing column
rails generate migration jobdetails_missingtitle

* Inside the new file db/migrate/<timestamp>property_missingcontent
 add the following  to add the columns
	add_column :jobdetails, :jobtitle, :string

after this give 
rails db:migrate


# Creating the controllers
* rails generate controller jobdetails
	create jobdetail.rb model file
	inside /config/routes.rb
	resources :jobdetails

* rails generate controller candidateapplication
create candidateapplication.rb model file
in /config/routes.rb
resources :candidateapplication

* rails generate controller appliedjobs
	in /config/routes.rb
resources :appliedjobs
* rails generate controller eligiblejobs
in /config/routes.rb
resources :eligiblejobs
	
* rails generate controller login
	
	in /config/routes.rb
resources :login

* rails generate controller logout
	
	in /config/routes.rb
resources :logout

* rails generate controller profile
	create profile.rb model file
	in /config/routes.rb
resources :profile

* rails generate controller skills
	create skills.rb model file
	in /config/routes.rb
resources :skills

* rails generate controller useraccount
	create useraccount.rb model file
	in /config/routes.rb
resources :useraccount

* rails generate controller myapplication
	
	in /config/routes.rb
resources :useraccount

* Add the required CRUD operations in each of the controller
 
## For authentication:useraccount with hash password we use Bcrypt 
* For Bcyrpt 
	in Gemfile - "gem "bcrypt", "~> 3.1.7""  => uncomment line number 37
	run bundle install

	/app/controllers/login_controller.rb
	add require 'bcrypt'

* inside the post operation use the authenticate  function for password and

	uval.authenticate(params[:password]))

* set the session  

	session[:current_user_id] = uval.id

* /app/model/useraccount.rb
	add "has_secure_password"

* For authorization in each operation need use
 	current_user = Useraccount.find_by_id(session[:current_user_id])
        if(current_user.nil?)
		{//required code
		}

## For Database:We use postgresql, the AWS database provided by tutor
* connect using : psql -h rubydb.c733iovakuat.us-east-1.rds.amazonaws.com -U postgres
password:<given password>
* To create DB
	create database jobportalg2;
* To connect to db: \c jobportalg2
* To view the tables created by user:\dt
* To view all the tables including system created table :\z
* To view the enteries on the table :
	select * from <tablename>;
	
## To veiw the api through postman:	

Provide the along with api and select the respective operation:
 http://127.0.0.1:3001/login
 
 If its post operation provide the input inside the Section below url
 The output will be posted in bottom section

Screen shots explaining the entire postman for the project is in the document PostmanScreenshot inside the rails project

# Adding Swagger for testing 
 ### gemfile change for test 
	group :development, :test do
  	gem 'rspec-rails', '~> 3.5'
  	gem "rswag-specs"
	end
	gem 'rswag'
### change in database.yml
	in test section 
	all database name_test, usernamen, password , locathost
 ### run migration
	rails db:migrate RAILS_ENV=test
 ### genereate swagger 
	rails g rswag:specs:install
	rails g rswag:api:install
	rails g rswag:ui:install
	
 ### installion of helper file
	rails g rspec:install
 ### generate the swagger for controller
	rails generate rspec:swagger JobdetailsController
	rails generate rspec:swagger CandidateapplicationController
	rails generate rspec:swagger AppliedjobsController
	rails generate rspec:swagger EligiblejobsController
	rails generate rspec:swagger LoginController
	rails generate rspec:swagger LogoutController
	rails generate rspec:swagger ProfileController
	rails generate rspec:swagger SkillsController
	rails generate rspec:swagger UseraccountController
	rails generate rspec:swagger MyapplicationsController
  ### in /spec/swagger_helper.rb line 27 inorder to get http as default in swagger page
		remove https -> http
  ### rails rswag:specs:swaggerize


## Inorder to run the rails application
give the below command from terminal-
"rails s"
The above command runs the app in 3000 port on localhost
if you want to run in another port give
"rails s -p 3001"



# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
