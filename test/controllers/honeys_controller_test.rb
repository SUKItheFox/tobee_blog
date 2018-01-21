require 'test_helper'

class HoneysControllerTest < ActionDispatch::IntegrationTest
  setup do
    @honey = honeys(:one)
  end

  test "should get index" do
    get honeys_url
    assert_response :success
  end

  test "should get new" do
    get new_honey_url
    assert_response :success
  end

  test "should create honey" do
    assert_difference('Honey.count') do
      post honeys_url, params: { honey: {  } }
    end

    assert_redirected_to honey_url(Honey.last)
  end

  test "should show honey" do
    get honey_url(@honey)
    assert_response :success
  end

  test "should get edit" do
    get edit_honey_url(@honey)
    assert_response :success
  end

  test "should update honey" do
    patch honey_url(@honey), params: { honey: {  } }
    assert_redirected_to honey_url(@honey)
  end

  test "should destroy honey" do
    assert_difference('Honey.count', -1) do
      delete honey_url(@honey)
    end

    assert_redirected_to honeys_url
  end
end
