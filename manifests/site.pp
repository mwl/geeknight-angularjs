Exec["apt-get-update"] -> Package <| |>

Exec {
    path => "/usr/bin:/usr/sbin:/bin"
}

exec { "apt-get-update" :
    command => "/usr/bin/apt-get update"
}

group { "puppet": ensure => "present" }

node www {
	class {'haproxy':
	}
    class {'riak':
        riakhost => $ipaddress_eth1,
    }
    class {'lighttpd':
    }

    class{'data':
    }
}
