class Api::SubjectsController < ApplicationController

  def create
    @subject = Subject.new(subject_params)
    @subject.author_id = current_user.id
    # tommy's line below: isn't working.
    # @subject = current_user.subjects.new(subject_params)
    if @subject.save
      flash[:notice] = "You've created a new subject! Enjoy your accelerated learning experience."
      # redirect_to root_url
      render :show
      # user_url(current_user)
    else
      # flash.now[:errors] = @subject.errors.full_messages
      render json: @subject.errors.full_messages
    end
  end

  def new
    @subject = Subject.new
  end

  def show
    @subject = Subject.find(params[:id])
  end

  def index
    # @subjects = Subject
    # @subjects = current_user.subjects.includes(decks: [:cards])
    @subjects = current_user.subjects.includes(:decks)
  end

  private
  def subject_params
    params.require(:subject).permit(:title)
  end
end
