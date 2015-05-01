class Api::CitiesController < ApplicationController
  def index
    render json: City.all
  end
  def show
    render json: Speaker.find(params[:id])
  end
end
