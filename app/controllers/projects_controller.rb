class ProjectsController < ApplicationController
  before_action :set_project

  def index
    @projects = Project.all
    render json: @projects
  end

  def show
    render json: @project
  end

  private

  def set_project
    @project = Project.find(params[:id])
  end
end
