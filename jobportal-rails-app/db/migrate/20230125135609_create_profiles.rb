class CreateProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :profiles do |t|
      t.string :firstname
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



      t.timestamps
    end
  end
end
