---
title: "Docker"
slug: "docker"
hidden: false
createdAt: "2021-10-08T19:20:42.368Z"
updatedAt: "2021-10-08T20:04:06.351Z"
---
Docker builds of `bifrost` are available on [DockerHub](https://hub.docker.com/r/toplprotocol/bifrost/tags)

## Downloading the docker image

To get the latest release of `bifrost`, run:

 ```sh
 docker pull toplprotocol/bifrost:{{versionId}}
 ```

## Running the Docker container for `bifrost`

To get a list of the basic CLI arguments, use

```sh
docker run --rm toplprotocol/bifrost:{{versionId}} java -jar bifrost-1.8.0.jar --help
```

See [Running Bifrost](doc:running-bifrost) for full documentation of the CLI arguments.

Running a `bifrost` node requires a config file (you can either use one of the default configurations or provide your own).

1. Create your network config or use one of the default network configs provided

### If you choose to create your own network config, remember to add your network config onto the Docker host

```
mkdir $HOME/state-docker
```
### After creating this directory, create your config file within it (optional)
 1. Run the `bifrost` server :
```
docker run \
-p 9084:9084 -p 9085:9085 \
--volume $HOME/state-docker:/data \
--rm \
toplprotocol/bifrost \
 java -jar bifrost-1.8.0.jar \
-- config /data/my-config.conf \
-- seed "test"
-- apiKeyHash "e4d2a343f3dcf9330ad9035b3e8d168e6728904262f2c434a4f8f934ec7b676"
```

Explanation of the arguments:
* `-p 9084:9084 -p 9085:9085` - exposes the API server port from the container to the docker host as well as the JSON-RPC server port.

* `--volume $HOME/state-docker:/data` - mounts the
     `~/state-docker` directory on the Docker host to `/data` inside
     the container.

*  ```--config /data/my-config.conf``` - use the config within the data volume for your custom network configuration

3. Wait for the message `Listening on 0.0.0.0:9085` to be shown (it may take some small amount of time for Bifrost to create the necessary genesis blocks)

## Inspecting the contents of the Docker image
If you need to run a shell inside the Docker image, use the bash shell as the entrypoint:
```
docker run --rm -it --entrypoint bash toplprotocol/bifrost:{{latest-version-id}}
```