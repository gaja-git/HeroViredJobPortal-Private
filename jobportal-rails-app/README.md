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

Create Jobportal application landing routes:

	1. Go to config/routes.rb
		root "application#index"
		
	2. Go to app/controllers/application_controller.rb
		Add a function as below
			def index
				 render html: "JobPortal-Rails Application"
			end

3.rails generate migration create_skills

  	after adding necessary fields to migration file, run below command
	
    rails db:migrate
    
4.rails generate migration create_jobdetails

    	after adding necessary fields to migration file , run below command
	
    ran rails db:migrate

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
