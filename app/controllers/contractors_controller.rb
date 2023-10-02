class ContractorsController < ApplicationController
  before_action :set_contractor

  def index
    @contractors = Contractor.all
    render json: @contractors
  end

  def show
    render json: @contractor
  end

  private

  def set_contractor
    @contractor = Contractor.find(params[:id])
  end
end
