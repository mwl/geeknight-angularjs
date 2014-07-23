class lighttpd() {
    package {
        "lighttpd":
            ensure => installed;
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