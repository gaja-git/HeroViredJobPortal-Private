class CreateUseraccounts < ActiveRecord::Migration[7.0]
  def change
    create_table :useraccounts do |t|
      t.string :email
      t.string :password_digest
      t.string :usertype


      t.timestamps
    end
  end
end
