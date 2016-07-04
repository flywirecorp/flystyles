require "flystyles/version"
require "flystyles/engine"

module Flystyles
  class << self

    # Paths
    def gem_path
      @gem_path ||= File.expand_path '..', File.dirname(__FILE__)
    end

    def stylesheets_path
      File.join assets_path, 'scss'
    end

    def fonts_path
      File.join assets_path, 'fonts'
    end

    def javascripts_path
      File.join assets_path, 'js'
    end

    def components_path
      File.join assets_path, 'components'
    end

    def assets_path
      @assets_path ||= File.join gem_path, 'assets'
    end
  end
end
