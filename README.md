## Docker CICD test - express app
> Excercise 3.1 of DevOps with Docker

### How this process works
Any pushed commits would be detected by GitHub Actions and build-push to here. Local running watchtower (https://github.com/containrrr/watchtower) monitores the changes made to DockerHub and then automatically pulls and replaces & reloads that corresponding local container with newer version.

The web page would show a greeting message and also the current time.


See the container in DockerHub https://hub.docker.com/repository/docker/noahwu/e3.1_example/general

### Start
The docker application accesses with browser http://localhost:8080.

You run the Watchtower container and the target container at the same time. The target container should have the label for flagging to be monitored by watchtower, e,g, in Dockerfile: `LABEL com.centurylinklabs.watchtower.enable="false"
`. More info see [the documentation here](https://containrrr.dev/watchtower/container-selection/). 

Everytime you submit commits to the repo, new changes should automatically go through editing machine -> GitHub -> DockerHub -> local Wtachtower -> the target container (perhaps also local).


### Watchtower

The `docker-compose.yml` file for watchtower contains the following configs:

```yml
version: "3.8"

services:
  watchtower:
    image: containrrr/watchtower
    environment:
      -  WATCHTOWER_POLL_INTERVAL=60 # Poll every 60 seconds
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    container_name: watchtower
```
