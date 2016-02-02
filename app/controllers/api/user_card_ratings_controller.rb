class Api::UserCardRatingsController < ApplicationController
  def update
    user_id = current_user.id
    card_id = params[:cardId]
    rating = params[:rating]
    rating = UserCardRating.where(user_id: user_id, card_id: card_id).first
    unless rating
      rating = UserCardRating.create(user_id: user_id, card_id: card_id)
    end
    rating.update(ef: 4 )

    render json: rating
  end
end
