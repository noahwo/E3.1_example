## Docker CICD test - express app
> Excercise 3.1 of DevOps with Docker

### How this process works
Any pushed commits would be detected by GitHub Actions and build-push to here. Local running watchtower (https://github.com/containrrr/watchtower) monitores the changes made to DockerHub and then automatically pulls and replaces & reloads that corresponding local container with newer version.


See the container in DockerHub https://hub.docker.com/repository/docker/noahwu/e3.1_example/general

### Start
The docker application accesses with browser http://localhost:8080.
