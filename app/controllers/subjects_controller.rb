class SubjectsController < ApplicationController

  def create
    @subject = Subject.new(subject_params)
    @subject.author_id = current_user.id
    if @subject.save
      flash[:notice] = "You've created a new subject! Enjoy your accelerated learning experience."
      redirect_to user_url(current_user)
    else
      flash.now[:errors] = @subject.errors.full_messages
      render :new
    end
  end

  def new
    @subject = Subject.new
  end

  def show
    @subject = Subject.find(params[:id])
  end

  private
  def subject_params
    params.require(:subject).permit(:title, :author_id)
  end
end
