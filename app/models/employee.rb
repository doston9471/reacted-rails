class Employee < ApplicationRecord
  has_many :assignments, as: :assignable
end
