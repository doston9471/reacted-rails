class EmployeesController < ApplicationController
  before_action :set_employee

  def index
    @employees = Employee.all
    render json: @employees
  end

  def show
    render json: @employee
  end

  private

  def set_employee
    @employee = Employee.find(params[:id])
  end
end
