class JobdetailsMissingtitle < ActiveRecord::Migration[7.0]
  def change
    add_column :jobdetails, :jobtitle, :string
  end
end
