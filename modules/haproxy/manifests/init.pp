class haproxy() {
	package {
		"haproxy":
			ensure => installed,
	} ->
	file {
		"/etc/default/haproxy":
			ensure => present,
			content => "ENABLED=1";
		"/etc/haproxy/haproxy.cfg":
			ensure => present,
			source => "puppet:///modules/haproxy/haproxy.cfg";
	} ~>
	service {
		"haproxy":
			ensure => running,
	}
			
}
