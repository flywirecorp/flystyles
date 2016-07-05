# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'flystyles/version'

Gem::Specification.new do |spec|
  spec.name          = "flystyles"
  spec.version       = Flystyles::VERSION
  spec.authors       = ["Javi Arques"]
  spec.email         = ["javier.arques@flywire.com"]
  spec.summary       = %q{Flywire styles}
  spec.description   = %q{Flywire styles}
  spec.homepage      = ""
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0")
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ["lib"]

  spec.add_dependency "rails", "~> 4.2.5.2"
  spec.add_development_dependency "bundler", "~> 1.7"
  spec.add_development_dependency "rake", "~> 10.0"
end
