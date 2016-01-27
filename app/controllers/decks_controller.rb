class DecksController < ApplicationController
  def create
    @deck = Deck.new(deck_params)
    @deck.author_id = current_user.id
    if @deck.save
      redirect_to subject_url(@deck.subject_id)
    else
      flash.now[:errors] = @deck.errors.full_messages
      render :new
    end
  end

  def new
    @deck = Deck.new
  end

  def destroy
    deck = Deck.find(params[:id])
    deck.destroy
    redirect_to subject_url(deck.subject_id)
  end

  def index
  end

  def deck_params
    params.require(:deck).permit(:name, :subject_id, :author_id)
  end
end
