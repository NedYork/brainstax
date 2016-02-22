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

  def sample
    deck = Deck.find(params[:id])
    @cards = []
    @cards << Card.create!(front: "Abhor", back: "To strongly dislike", deck_id: deck.id)
    @cards << Card.create!(front: "Bigot", back: "Prejudiced person", deck_id: deck.id)
    @cards << Card.create!(front: "Counterfeit", back: "False", deck_id: deck.id)
    @cards << Card.create!(front: "Enfranchise", back: "Give voting rights", deck_id: deck.id)
    @cards << Card.create!(front: "Hamper", back: "Hinder", deck_id: deck.id)
    @cards << Card.create!(front: "Kindle", back: "To start a fire", deck_id: deck.id)
    @cards << Card.create!(front: "Noxious", back: "Harmful", deck_id: deck.id)
    @cards << Card.create!(front: "Placid", back: "Calm", deck_id: deck.id)
    @cards << Card.create!(front: "Remuneration", back: "Payment for work done", deck_id: deck.id)
    @cards << Card.create!(front: "Talisman", back: "Lucky charm", deck_id: deck.id)
    render :index
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
