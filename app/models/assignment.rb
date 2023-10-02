class Assignment < ApplicationRecord
  belongs_to :assignable, polymorphic: true
  belongs_to :project

  validates_uniqueness_of :assignable_id, scope: [:assignable_type, :project_id]

  before_save :calculate_total

  private

  def calculate_total
    self.total = (months * rnd_percentage) / 12.0
    # Updating total of assignable (Employee or Contractor)
    # self.assignable.total = self.assignable.assignments.sum(:total)
    # self.assignable.save!
  end
end
