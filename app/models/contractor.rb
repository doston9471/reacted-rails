class Contractor < ApplicationRecord
  has_many :assignments, as: :assignable

  def total
    self.total = assignments.sum(:total)
    save
  end
end
