# Docker -- !

## ✅ Docker Basics:

- **Installed Docker** and set up the environment.
- **Created a simple Node.js app** with an HTTP server.
- **Built a Dockerfile** to containerize the Node.js application.
- **Learned Docker commands:**
  - `docker build -t my-node-app .` to create a Docker image.
  - `docker run -p 3000:3000 myapp` to run the container.
  - `docker ps` to list running containers.
  - `docker stop [container_id]` to stop a running container.
  - `docker images` to list all Docker images.
  
## ✅ Docker Volumes:
- **Learned about Docker volumes to persist data and share files.**
- **Types of volumes:**
    - Named Volumes: Managed by Docker, easy to reference.
    - Bind Mounts: Directly mount host files/directories.
- **Volume Commands:**
    -  `docker volume create my-volume`  to create a named volume.
    -  `docker run -v my-volume:/path/in/container` to use a named volume.
    -  `docker run -v /host/path:/path/in/container` to use a bind mount.
    -  `docker volume ls` to list all volumes.
    -  `docker volume inspect my-volume` to inspect a volume.
    -  `docker volume rm my-volume` to remove a volume.

- **Practical Example:**
    - `docker run --name myapp -p 9000:9000 --rm -v myapp-data:/data myapp-image`


Excited to keep exploring Docker and making my applications more robust! 🚀🐳






