class CreateAssignments < ActiveRecord::Migration[7.0]
  def change
    create_table :assignments do |t|
      t.integer :months
      t.integer :rnd_percentage
      t.decimal :total
      t.references :assignable, polymorphic: true, null: false
      t.references :project, null: false

      t.timestamps
    end
  end
end
