class EmployeesController < ApplicationController
  before_action :set_employee, only: [:show]

  def index
    @employees = Employee.all
    render json: @employees
  end

  def show
    @assignments = @employee.assignments
    render json: { employee: @employee, assignments: @assignments }
  end

  private

  def set_employee
    @employee = Employee.find(params[:id])
  end
end
