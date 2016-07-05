module Flystyles
  class Railtie < Rails::Railtie
    initializer 'flystyles.add_view_paths', :after => :add_view_paths do |app|
      ActiveSupport.on_load(:action_controller) do
        prepend_view_path app.root.join('/home/vagrant/code/flystyles/src/components').to_s
      end
    end
  end
end
