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
    @cards << Card.create!(front: "What planet is Luke from?", back: "Tatooine", deck_id: deck.id)
    @cards << Card.create!(front: "Who was Obi Wan's Master?", back: "Qui Gon Jin", deck_id: deck.id)
    @cards << Card.create!(front: "Who was Leia's adopted father?", back: "Bail Organa", deck_id: deck.id)
    @cards << Card.create!(front: "Who built C3PO?", back: "Anakin Skywalker", deck_id: deck.id)
    @cards << Card.create!(front: "What ship was the spiritual predecessor to the X-Wing", back: "Z95-headhunter", deck_id: deck.id)
    @cards << Card.create!(front: "Who did Han Solo get the Millenium Falcon from?", back: "Lando Calrissian", deck_id: deck.id)
    @cards << Card.create!(front: "Who was Lando Calrissian co-pilot in the Battle of Endor?", back: "Nien Numb", deck_id: deck.id)
    @cards << Card.create!(front: "What cackling minion is Jabba the Hutt's court jester?", back: "Sallacious Crumb", deck_id: deck.id)
    @cards << Card.create!(front: "What space parasites does Han Solo encounter in an asteroid field?", back: "Mynocks", deck_id: deck.id)
    @cards << Card.create!(front: "What Cell Block is Princess Leia held in 'A New Hope'", back: "Cell Block 1138", deck_id: deck.id)
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
