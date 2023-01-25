# Creating Rails app:
rails new jobportal-rails-app -d postgresql
# Configuring the below fields in database.yml for development and test: 
  * database: 
  * username: 
  *  password: 
  * host: 
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
 
## To resolve CORS Policy error:  
* gem "rack-cors"
bundle install

Create cors.rb in
* config/initializers/cors.rb

Copy below code inside cors.rb
	1.Rails.application.config.middleware.insert_before 0, Rack::Cors do
    		allow do
   	   origins 'http://localhost:3000'
    	  resource '*', headers: :any, methods: [:get, :post, :update, :delete, :put]
   	 end
 	 end

## For authentication we need bcrypt
* Uncomment line 37 in gem file
* bundle install
* require 'bcrypt' -> used to import bcrypt in required files

## To connect to postgresql
* psql -U postgresql in command prompt
* Enter password:
* create database name;
* \c name -> will connect to our new database
* \dt -> to view tables after migration
* select * from tablename; -> display table with column names and values.


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
