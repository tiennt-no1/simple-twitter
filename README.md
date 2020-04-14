# README

## PREFIX

- install docker: https://docs.docker.com/get-docker/
- install docker-compose: https://docs.docker.com/compose/install/

You have to install docker and docker-compose first to install environment easier.
Other way, You can run native way to install ruby 2.5.5 and rails 6, normal config database by yourself.

## PURPOSE OF APP
This app is a simple version of twitter, without user. Just only some simple features are: tweet, retweet, delete tweet. The tweet is order by number of retweet and paging by scroll out event.

## HOW TO RUN APP

run `./build.sh`, may be you have run this command with sudo.

## TECHNICAL

This app wroten by ruby 2.5.5, rails 6.0 on back-end and react, redux on front-end.
The structure on this app contain many shards of database, each shard contains a master-slave. 
Here is an example of one shard:

```
mysql_master:
    image: mysql:5.7
    env_file:
      - ./master/mysql_master.env
    container_name: "mysql_master"
    restart: "no"
    volumes:
      - ./master/data:/var/lib/mysql
    networks:
      - overlay

  mysql_slave:
    image: mysql:5.7
    env_file:
      - ./slave/mysql_slave.env
    container_name: "mysql_slave"
    restart: "no"
    depends_on:
      - mysql_master
    volumes:
      - ./slave/data:/var/lib/mysql
    networks:
      - overlay
```
one shard contain a master-slave, because in heavy traffic, we should seperate writing and reading trasaction. because the most traffic from reading transaction. Others, we can scale by extend more master and more slave node, use load balancing between cluster if needed.

This app connect mutiple shards, we can seperate by local for example. this app choose shard base on region params

```
  around_action :switch_shard
  def switch_shard
    if params[:region] == "vietnam"
      ActiveRecord::Base.connected_to(
          database: { writing: :shard1, reading: :shard1_replica }
      ) do
        yield
      end
    else
      #default is primary and primary replica
      yield
    end
  end
```

If region is "vietnam", this app store database to shard1, other save on primary shard. In the future, we can scale by create more master, slave each node, create more shade if extend to another region, use load balancing between clusters.