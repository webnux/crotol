class PostsController < ApplicationController
  #skip_before_filter :verify_authenticity_token
  before_action :authenticate_user!
  before_action :set_post, only: [:show, :edit, :update, :destroy]

  def index
    @posts = Post.all.order(:created_at => :desc)
    @post = Post.new

    respond_to do |format|
        format.html
        format.json { render json: @posts }
    end

  end

  def show
    redirect_to posts_path
  end

  def new
    @post = Post.new
  end

  def edit
    authorize! :update, @post
  end

  def create
    @user = current_user
    @post = @user.posts.build(post_params)

    respond_to do |format|
      
      if @post.save
        format.html   { redirect_to posts_path, notice: 'Post was successfully created.' }
        format.json   { render json: @post }
        format.js
      else
        format.html { render :new }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end

    end

  end

  def update
    respond_to do |format|
      if @post.update(post_params)
        format.html { redirect_to posts_path, notice: 'Post was successfully updated.' }
        format.json { render :show, status: :ok, location: @post }
        format.js
      else
        format.html { render :edit }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end

    
  end

  def destroy
    @post.destroy
    respond_to do |format|
      format.html { redirect_to posts_url, notice: 'Post was successfully destroyed.' }
      format.json { head :no_content }
      format.js
    end
  end




  private

    def set_post
      @post = Post.find(params[:id])
    end

    def post_params
      params.require(:post).permit(:title, :content)
    end
    
end




