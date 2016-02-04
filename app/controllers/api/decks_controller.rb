class Api::DecksController < ApplicationController
  def create
    @deck = Deck.new(deck_params)
    @deck.author_id = current_user.id
    @deck.subject_id = params[:subject_id]

    if @deck.save
      render :show
    else
      flash.now[:errors] = @deck.errors.full_messages
      debugger
      render :show
    end
  end

  def new
    @deck = Deck.new
  end

  def show
    @deck = Deck.find(params[:id])
  end

  def destroy
    @deck = Deck.find(params[:id])
    @deck.destroy
    render :show
  end

  def index
  end

  def deck_params
    params.require(:deck).permit(:name, :subject_id, :author_id)
  end
end
