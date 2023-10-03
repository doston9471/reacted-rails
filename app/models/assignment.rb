class Assignment < ApplicationRecord
  belongs_to :assignable, polymorphic: true
  belongs_to :project

  validates_uniqueness_of :assignable_id, scope: [:assignable_type, :project_id]

  before_save :calculate_total
  after_save :update_assignable_total # Update Employee or Contractor total
  after_destroy :update_assignable_total

  private

  def calculate_total
    self.total = (months * rnd_percentage) / 12.0
  end

  def update_assignable_total
    self.assignable.update!(total: self.assignable.assignments.sum(:total))
  end
end
