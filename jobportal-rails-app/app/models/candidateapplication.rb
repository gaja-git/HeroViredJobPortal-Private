class Candidateapplication < ApplicationRecord 

    validates :userid, :jobid, :jobcode, presence: true
end