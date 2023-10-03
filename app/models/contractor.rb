class Contractor < ApplicationRecord
  has_many :assignments, as: :assignable
end
