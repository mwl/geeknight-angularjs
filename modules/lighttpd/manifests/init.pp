class lighttpd() {
    package {
        "lighttpd":
            ensure => installed,
            require => File["/etc/lighttpd/lighttpd.conf"];
    } ->
    file {
        "/etc/lighttpd":
            ensure => directory;
        "/etc/lighttpd/lighttpd.conf":
           ensure => present,
            source => "puppet:///modules/lighttpd/lighttpd.conf";
    } ~>
    service {
        "lighttpd":
            ensure => running;
    }
}