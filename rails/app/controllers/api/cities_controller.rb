class Api::CitiesController < ApplicationController
  def index
    render json: City.all
  end
  def show
    render json: City.find(params[:id])
  end
end
