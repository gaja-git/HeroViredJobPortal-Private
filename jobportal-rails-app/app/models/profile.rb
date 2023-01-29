class Profile < ApplicationRecord
    validates :firstname, presence: true, length: {minimum: 2, maximum: 80}
    validates :email, presence: true, length: {minimum: 2, maximum: 50}
    validates :contact, presence: true
    validates :address, presence: true, length: {minimum: 1, maximum: 300}
    validates :profilepic, presence: true
    validates :skills, presence: true, length: {minimum: 1, maximum: 500}
    validates :resumelink, presence: true
    validates :preferredlocation, presence: true, length: {minimum: 1, maximum: 50}

end
