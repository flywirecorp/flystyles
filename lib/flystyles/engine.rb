module Flystyles
  module Rails
    class Engine < ::Rails::Engine
      initializer 'flystyles.assets.precompile' do |app|
        %w(components fonts icons js scss).each do |sub|
          app.config.assets.paths << root.join('assets', sub).to_s
        end
      end
    end
  end
end
