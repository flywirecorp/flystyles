module Flystyles
  class Railtie < Rails::Railtie
    initializer "flystyles.view_helpers" do
      ActionView::Base.send :include, ViewHelpers
    end
  end
end
