class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :name
      t.integer :number
      t.string :type
      t.string :insructions

      

      t.timestamps
    end
  end
end
