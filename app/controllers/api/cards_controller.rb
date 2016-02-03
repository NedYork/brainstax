class Api::CardsController < ApplicationController

  def create
    @card = Card.new(card_params)
    @card.deck_id = params[:card][:deck_id]
    if @card.save
      flash[:notice] = "New card added to deck."
      # change render below
      render :show
    else
      render json: @card.errors.full_messages
    end
  end

  def show
    @card = Card.find(params[:id])
  end

  def mass_create
    file = params[:cards][:file]
    deck = Deck.find(params[:deck_id])

    cards = deck.create_cards_from_file(file)
    render json: cards
  end

  def destroy
    # card = Card.find()
  end

  private
  def card_params
    params.require(:card).permit(:front, :back)
  end
end
