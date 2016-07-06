module Flystyles
  module ViewHelpers
    def render_component(component, properties={})
      components_dir = File.join(File.dirname(__FILE__), '..', '..', 'src', 'components')
      component_dir = File.join(components_dir, component)
      component_template = File.expand_path(File.join(component_dir, "#{component}.html.erb"))
      render(file: component_template, locals: properties)
    end
  end
end
