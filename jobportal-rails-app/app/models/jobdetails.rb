class Jobdetails < ApplicationRecord 

    validates :jobtitle, :companyname, :jobcode, presence: true
   
end