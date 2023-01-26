class jobdetails < ApplicationRecord 

    validates :jobtitle, :companyname, :jobcode, presence: true
   
end