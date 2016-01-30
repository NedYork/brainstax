class Api::SessionsController < ApplicationController
  def new
  end

  def show

    if current_user
      @user = current_user
      render "api/users/show"
    else
      render json: {}
    end
  end


  def create
    @user = User.find_by_credentials(
      params[:username],
      params[:password]
    )

    # user = User.find_by_credentials(
    #   params[:username],
    #   params[:password]
    # )

    if @user
      sign_in(@user)
      flash[:success] = "Welcome back!"
      render "api/users/show"
    else
      render json: ["Wrong email/password combo!"], status: 401
    end
  end

  def destroy
    sign_out
    flash[:success] = "Thank you, come again."
    # redirect_to new_session_url
    render "#"
  end
end
