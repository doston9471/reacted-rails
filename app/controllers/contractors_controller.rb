class ContractorsController < ApplicationController
  before_action :set_contractor, only: [:show]

  def index
    @contractors = Contractor.all
    render json: @contractors
  end

  def show
    @assignments = @contractor.assignments
    render json: { contractor: @contractor, assignments: @assignments }
  end

  private

  def set_contractor
    @contractor = Contractor.find(params[:id])
  end
end
