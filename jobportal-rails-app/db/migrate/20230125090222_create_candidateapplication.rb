class CreateCandidateapplication < ActiveRecord::Migration[7.0]
  def change
    create_table :candidateapplications do |t|
      t.integer :jobid
      t.integer :userid
      t.string :jobcode
      t.date :applieddate      
      t.string :candidateapplicationstatus
      t.string :location
      t.date :posteddate
      t.timestamps
    end
  end
end
