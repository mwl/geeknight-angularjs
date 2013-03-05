class data($riak_host = "localhost:8098") {
    file {"/tmp/data":
        source => "puppet:///modules/data/data",
        recurse => true,
    }

    package {"curl":
        ensure => installed
    }

    exec {"put json":
        cwd => "/tmp/data/json",
        command => "sleep 3; find * -type f -exec curl -XPUT -H'Content-Type: application/json' --data-binary @{} http://${riak_host}/riak/{} \\;",
        require => [File["/tmp/data"], Package["curl"], Class["riak"]]
    }
}