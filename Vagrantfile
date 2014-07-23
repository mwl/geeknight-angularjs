# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "precise64"
  config.vm.box_url = "http://files.vagrantup.com/precise64.box"

  config.vm.provision :puppet, :module_path => "modules" do |puppet|
    puppet.manifests_path = "manifests"
    puppet.manifest_file = "site.pp"
  end

  config.vm.define :www do |config|
    config.vm.host_name = "www.mwl.dk"
    config.vm.network "private_network", ip: "192.168.33.10"
    config.vm.synced_folder "wwwroot", "/var/www"
  end
end
