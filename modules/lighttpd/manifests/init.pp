class lighttpd() {
    file {"/etc/lighttpd":
        ensure => directory,
        owner => root,
        group => root
    }
    file {"/etc/lighttpd/lighttpd.conf":
        ensure => present,
        require => File["/etc/lighttpd"],
        source => "puppet:///modules/lighttpd/lighttpd.conf"
    }

    package {"lighttpd":
        ensure => installed,
        require => File["/etc/lighttpd/lighttpd.conf"]
    }

    service {"lighttpd":
        ensure => running,
        require => Package["lighttpd"],
        hasstatus => true,
        hasrestart => true,
    }
}