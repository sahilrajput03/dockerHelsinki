***Don't delte the gist coz all below content is copied from gist@https://gist.github.com/sahilrajput03/1d8116364ac51810b3c54a9a6788be65 and the image data are linked to that gist only and will be lost on deletion of that gist.***

## Can i put `dockerignore`and `ockerfile` itself in `dockerignore` file?

Yes, Source: [Click here](https://stackoverflow.com/a/47580591/10012446).

#### Limiting hardware usages by contaniers:

https://docs.docker.com/config/containers/resource_constraints/

#### Final links

- https://docs.docker.com/engine/swarm/
- [diff b/w swarm and swarm mode](https://stackoverflow.com/questions/40039031/what-is-the-difference-between-docker-swarm-and-swarm-mode)
- https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/
- https://k3s.io/
- https://github.com/rancher/k3d
- Amazing -> https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/
- Kubernetes Glossary - [Link](https://kubernetes.io/docs/reference/glossary/?fundamental=true)
- Kubernets Diagrams - [Link](https://tsuyoshiushio.medium.com/kubernetes-in-three-diagrams-6aba8432541c)

#### Import variables from a .env file via command:

```bash
source .env
# or equivalent command.
. ./conf/prac1
```

[src](https://stackoverflow.com/a/19331521)

#### chown a folder to a user

```bash
chown -R app /app
#here, /app directory will be owned ny app user. Use $USER variable if current user is not know before hand in scripts.
```

[src for chown](https://askubuntu.com/questions/6723/change-folder-permissions-and-ownership)

#### Using -k for unsecured things via curl

[stackoverflow answer](https://stackoverflow.com/a/24618403)

#### Docker-engine release page

https://docs.docker.com/engine/release-notes/

#### Alpine pks here

https://pkgs.alpinelinux.org/packages



```bash
# Hello World Program in Bash Shell

export DOCKER_HOST=tcp://192.168.137.164:2376

echo ${DOCKER_HOST%?????} #removing last 5 chars.

echo ${DOCKER_HOST:6} #Removing first 6 chars.

echo clear
export a=${DOCKER_HOST%?????}
export b=${a:6}
echo $b
#output:
Hello World!
tcp://192.168.137.164
192.168.137.164:2376
clear
192.168.137.164


###########solution below
export DOCKER_HOST=tcp://192.168.137.164:2376

echo ${DOCKER_HOST:6:15}

#Output:
192.168.137.164
```

[src - substring bash](https://stackabuse.com/substrings-in-bash/)

Run a single service:

```bash
$ docker-compose run youtube-dl https://imgur.com/JY5tHqr
```



- **Pre build images** in circleci , image for minimum ubuntu.
- https://circleci.com/docs/2.0/circleci-images/ 
- **Running docker commands**:(Must read for you!!){got the missing piece from here.., i.e., `setup_remote_docker}
  - https://circleci.com/docs/2.0/building-docker-images/ (add to docker course)
  - Suppor issue that opened the eyes. [>>Link here](https://support.circleci.com/hc/en-us/articles/115015849028-Docker-Daemon-Not-Available#:~:text=If%20you%20receive%20the%20following,%2Frun%2Fdocker.sock.&text=This%20typically%20indicates%20that%20you,command%20without%20using%20remote%20docker.).
- Docker references:

  - https://circleci.com/developer/orbs/orb/circleci/docker
- Well post @ [medium](https://medium.com/nexton/deploying-docker-images-to-heroku-with-circleci-713c764e248d#:~:text=CircleCI%20is%20a%20CI%2FCD,will%20detect%20your%20GitHub%20projects.). (add to devops material) What not to look at ?([circleci/heroku@1.2.4 ORB that didn't work for me though](https://circleci.com/developer/orbs/orb/circleci/heroku#jobs-push-docker-image))
- https://circleci.com/docs/2.0/sample-config/ - Sample configs from docker.

```yml
image: cimg/base:2020.01
#source is the same above link.
```



```bash
sudo curl https://cli-assets.heroku.com/install.sh | sh
HEROKU_API_KEY=${HEROKU_TOKEN} heroku container:login
HEROKU_API_KEY=${HEROKU_TOKEN} heroku container:push -a python-django-starter web
HEROKU_API_KEY=${HEROKU_TOKEN} heroku container:release -a python-django-starter web
#I don't need env for each line ,, though bad practise.!!
```

```yml
# First .circle/config.yml successful(src: devopsdocker, yikes)
version: 2.1
orbs:
  docker: circleci/docker@1.0.0
workflows:
  deploy:
    jobs:
      - docker/publish:
          image: $DOCKER_LOGIN/$CIRCLE_PROJECT_REPONAME
          tag: 'latest'
```



#### Tip for using bash and some online script

- `sudo curl https://cli-assets.heroku.com/install.sh | sh`

#### What do you need to setup @ app.circleci.com

- Click on Projects and click on the desired project's **Set Up Project** link.
- Then choose **Use existing config** and then setup this.

#### Little git tip

- If you would have specified

  ```
  git push origin master:my_work
  ```

  then you would have pushed your local `master` to `origin/my_work`. If you don't use the `:my_work` part, then the destination defaults to the same branch as given as source.

#### Heroku deployment with circleci links with-

- [Link1](https://circleci.com/docs/2.0/deployment-integrations/#heroku),

- [Link2](https://circleci.com/developer/orbs/orb/circleci/heroku)

- FYI: You can't run a bash file by direclty specifying in start script of package.json file in heroku dyanos. :( But you can surely login with bash to see your files and edit them, yikes with command : `heroku run bash --app circleci-heroku1`

- You can get logs from any path via command: `heroku logs --app=circleci-heroku1`.

- Add remote to existing app: `heroku git:remote -a my-app-name`

- For circle ci config.yml to work, set environment variable from **Project setttings**, 

  HEROKU_API_KEY=??

  HEROKU_APP_NAME=??

- Logout from heroku cli- `heroku logout`

- `heroku apps` gives you list of current apps.

- `heroku open --app=appName` will open your app in browser.

#### My `.circle/config.yml`file contents:

```yml
version: 2.1
orbs:
  docker: circleci/docker@1.0.0
workflows:
  deploy:
    jobs:
      - docker/publish:
          image: $DOCKER_LOGIN/$CIRCLE_PROJECT_REPONAME
          tag: 'latest'
```

Docker orbs - [@Docs](https://circleci.com/developer/orbs/orb/circleci/docker)

```
passwd: mypasssword
login: mylogin
```

 

```bash
$ docker run -it ubuntu bash
#Testing if docker is installed correctly.
$ docker run hello-world
```

Installing docker on ubuntu [easiest way from Docker docs](https://docs.docker.com/engine/install/ubuntu/#install-from-a-package)!

[Change redis db location](https://stackoverflow.com/questions/43012964/change-redis-db-location#:~:text=You%20can%20do%20it%20by,will%20use%20the%20new%20path.)

[Copy command in Dockerfile](https://docs.docker.com/engine/reference/builder/#copy)

#### Manipulation with environment variable

- [docker-compose.yml Docs Reference(Environment variables in Compose)](https://docs.docker.com/compose/environment-variables/)
- [Dockerfile - Docs Reference - Environment replacement](https://docs.docker.com/engine/reference/builder/#environment-replacement)
- [ENV in Dockerfile - Docs Reference](https://docs.docker.com/engine/reference/builder/#env)

#### Learning bash

[src](https://stackoverflow.com/questions/5750450/how-can-i-print-each-command-before-executing)

```bash
$ bash -x myscript.sh #They its done for subshell.

#::BEST::Else directly specify in subshell/or main shell with below commands
$ set -x #In some Dockerfile, we use `set -ex`, where -e is for exiting when some error occurs(src: `help set` command)

#You can test -e flag easily, try below command in in ubuntu/vm-machine/else linux (not in window's fish shell or conemu or etc)
$ set -e
$ iamBadCommand
#you'll notice the shell session is exited now.

# Also, you can learn about -u option in `set`
#  -u  Treat unset variables as an error when substituting.
```

- Using permission in linux: [Good tutorial](https://phoenixnap.com/kb/linux-file-permissions)

Use cli tools(for cloudns): 
`$ clear-dns-cache`

•`docker network ls` #shows you the networks docker vm is attched to.

You seems confusing though. Visit: [Link @ docs](https://docs.docker.com/network/network-tutorial-standalone/)

Amazing docs for hyperv driver for docker-machine: https://docs.docker.com/machine/drivers/hyper-v/

[Command - `docker compose restart`](https://docs.docker.com/compose/reference/restart/) 

Learn about [`restart`](https://docs.docker.com/compose/compose-file/compose-file-v3/#restart) in dockercompose.yml file. Yike!!!

[`Docker-compose down`](https://docs.docker.com/compose/reference/down/)

`free -h` tells you memory usage in your docker-vm.

*LEARN: You can set environment variable via cmd prompt(admin only) via simple set commands, yikes!!

* Tip: You can use `docker-mahcine stop manager1` and then manually editing vm's (from hyperv's os's settings) memory Dynamic memory option to enable.(Beware docker stop and docker start changed docker-vm's ip address) {Haven't tested the dynamic memory thing though, but it should work! (test it via `free -h` command to get memory info in linux)}

```bash
#Fix new ip's shit..!!
$ docker-machine regenerate-certs manager1
$ docker-machine env manager1#Execute those commands to set the user env direclty, yikes!!(You need to copy, paste and execute those commands(in admin cmd only) to set environment for e.g., DOCKER_HOST).
#MASTERS TIP: Use `setx variableName value` to set a variable for a user, yikes!! works in conemu too, yikes!!
#for e.g., (set doens't set for user variable but for current session only in cmdprompt, but setx does it for user variables yikes!!)
$ SETX DOCKER_HOST tcp://192.168.137.106:2376
```



Done with private dns software : Dns's [link1](http://www.thekelleys.org.uk/dnsmasq/doc.html), [link2](https://github.com/coredns/coredns).

#### `docker-compose`

```bash
#familiarizing with -d in docker-compose too
$ docker-compose up -d # to run it in background and later use below for logging.
$ docker-compose logs -f # or 

# To stop containers and removes containers, networks, volumes, and images created by `docker-compose up`, use below command -
$ docker-compose down

#Build individual service's container.
$ docker-compose build --no-cache service1 # Will build a single service(container).
$ docker-compose up -d --no-deps --build <service_name>
#	--no-deps - Don't start linked services.
#	--build - Build images before starting containers.

$ docker-compose up <service-name> #To start single container.

$ docker exec -it redis_6.2-rc2 bash #To get into the service/container
```



#### Docker and windows 8.1

The interesting thing in windows 8.1 is its speed and reliability, and the amazing tool kit I have. Speed is very important factor and especially is you have used windows 10, I bet the only thing you want is speed. So?

Using docker on windows has made me a little psycho, I mean I am trying hard to fix the simple problem with docker in windows 8.1 i.e., anything port mapped i.e., `docker run -p 8000:3000 ..` `localhost:8000` is the url where we're gonna find the app, but not with windows 8.1, so what ?

The shit begins here ..,  what shit ?

- So, in frontend react apps if you are using backend server like `http://localhost:400/someApi`  you must replace it with `http://${window.location.hostname}:5000/someBackendApi`so that when you try to browse the site in your machine, it won't show request error 400 coz of localhost shit. RESULT: Using {window.location.hostname} will work for every case, yikes!

- GENERIC SOLUTION: Use direct ip address of docker-vm: You can simply use docker-vm's ip addres(fetch it via `echo $DOCKER_HOST`  (echo %DOCKER_HOST% for cmd) if you have docker working first hand, else set it first via  fetching from`docker-machine ls` command).

- BEST SOLUTION: What if you wanna be more cool about solution, then set the host entry in you windows `hosts` file like, 

  ```bash
  #Whenever you save the hosts file on desktop, and copy-paste it to /etc folder, remember you need to press yes twice for confirmation windows, tip just for you!
  # 192.168.137.66 IS THE IP OF DOCKER-VM.
  192.168.137.66 localtest.me
  #Note to make any subdomain point to docker-vm ip, you must add each subdomain here separately.
  
  #Below entry doens't work at all, wildcards are not allowed in hosts file. 
  192.168.137.66 *.localtest.me
  
  #Correctly dding subdomains individually like:
  #Browsing below domains will only work if you have set rev-proxy via nginx to handle these domains or via hello.*, world.* and compute.* pattern for VIRTUAL_HOST env variable for such services/containers, yikes!
  192.168.137.66 hello.localtest.me
  192.168.137.66 world.localtest.me
  192.168.137.66 compute.localtest.me
  
  #And most important learning: that localhost is not managed by hosts file. :(
  #So, below statment simply doens't work!
  192.168.137.66 localhost
  
  # But below works, fine!
  192.168.137.66 onhost
  ```
# or any text, browse it via `http://onhst` in browser.
  ```
  
  The **good thing about above three solutions** is that all of them preserve the actual behaviour of the apps even if the apps are run outside the container directly, yikes!!

#### Other cool things:

- You **must give container_name** to each service in docker-compose.yml file otherwise docker-compose will allocate some unusual names to their respecive docker containers, yikes!!

- [faq's of docker-compose.yml @ docs](https://docs.docker.com/compose/faq/). yikes!

- Postgres @ [dockerhub, also has well docs](https://hub.docker.com/_/postgres), postgres login stackoverflow links for GK: [Link1](https://stackoverflow.com/questions/7695962/postgresql-password-authentication-failed-for-user-postgres), [Link2](https://serverfault.com/questions/110154/whats-the-default-superuser-username-password-for-postgres-after-a-new-install).

- `docker volume create`: [Link - Amazing @ docker docs](https://docs.docker.com/engine/reference/commandline/volume_create/)

- `docker diff CONTAINER`: List the changed files and directories in a container᾿s filesystem since the container was created. Three different types of change are tracked: 

  **A**	A file or directory was **added**
  **D**	A file or directory was **deleted**
  **C**	A file or directory was **changed**

- **.env** file for docker-compose: [Reference in docs](https://docs.docker.com/compose/env-file/), The prefix can be overridden with `COMPOSE_PROJECT_NAME` environment variable if needed. Yikes(Added file with such variable, yikes!!)

- [VOLUME](https://docs.docker.com/engine/reference/builder/#volume) in Dockerfile reference.

- The prefix can be overridden with `COMPOSE_PROJECT_NAME` environment variable if needed.

- `docker volume ls `: There may be more volumes on your machine. If you want to get rid of them you can use **`docker volume prune`**. Let’s put the whole “application” down now with **`docker-compose down`**. Then, this time let’s create a separate volume for the data. **FSO**

- Let’s put the whole “application” down now with `docker-compose down`. 

#### cool things you don't know 

- **[Redmine (@dockerhub)](https://hub.docker.com/_/redmine)** is a flexible project management web application written using Ruby on Rails framework.
- **[Sentry](https://hub.docker.com/_/sentry/)** - Sentry is a realtime, platform-agnostic error logging and aggregation platform
- **[Adminer](https://hub.docker.com/_/adminer)** - Replace **phpMyAdmin** with **Adminer** and you will get a tidier user interface, better support for MySQL features, higher performance and more security. [Official site](https://www.adminer.org/).

#### Amazing knowledge hub of interconnecting tips/tricks

[Link - src: FSO](https://devopswithdocker.com/exercise_tricks)

#### A record for apex domain i.e., (http://dustychalk.ml) doesn't change immediately(if I change through cloudns.net) to point to my updated ip address(some dns side issue though), Here comes the solution -

It is taking too much time to change it, but the wild card entry(A record) is changed almost **instantly** i.e., ***.dustychalk.ml => my ip address**. So, I'm setting up with **pointing my top level domain to www.dustychalk.ml (via Web Redirect{301 Permanenet Redirect} to http://www.dustychalk.ml , yikes!)** so my complete dns settings is updated with only **single change of *.dustychalk.ml A record when updating with my machine's new public ip address**. Yikes!!



## Local server testing thing:

- colasloth.com, localtest.me, lvh.me, vcap.me (complete support with subdomains).
- The vulnerability with specifying `compute.*` (wildcard) in `VIRTUAL_HOST` is that if somebody point his domain to my machine's ip address then it'll create problem

#### nginx-proxy

[Official Repo - Nice Docs](https://github.com/nginx-proxy/nginx-proxy). nginx-proxy sets up a container running nginx and [docker-gen](https://github.com/jwilder/docker-gen). docker-gen generates reverse proxy configs for nginx and reloads nginx when containers are started and stopped. See [Automated Nginx Reverse Proxy for Docker](http://jasonwilder.com/blog/2014/03/25/automated-nginx-reverse-proxy-for-docker/) for why you might want to use this.

--

Then start any containers you want proxied with an env var `VIRTUAL_HOST=subdomain.youdomain.com`

The containers being proxied must [expose](https://docs.docker.com/engine/reference/run/#expose-incoming-ports) the port to be proxied, either by using the `EXPOSE` directive in their `Dockerfile` or by using the `--expose` flag to `docker run` or `docker create` and be in the same network. By default, if you don't pass the --net flag when your nginx-proxy container is created, it will only be attached to the default bridge network. This means that it will not be able to connect to containers on networks other than bridge.

Provided your DNS is setup to forward foo.bar.com to the host running nginx-proxy, the request will be routed to a container with the VIRTUAL_HOST env var set.

--

From FSO:

It’s “working”, but the nginx just doesn’t know which service we want. The `nginx-proxy` works with two environment variables: `VIRTUAL_HOST` and `VIRTUAL_PORT`. `VIRTUAL_PORT` is not needed if the service has `EXPOSE` in it’s docker image. We can see that `jwilder/whoami` sets it: https://github.com/jwilder/whoami/blob/master/Dockerfile#L9



#### Hosts file proxy worked amazing for me, i.e.,

​```bash
#comment, wildcard hosts config like *.localtest.me doens't work.
192.168.137.166 compute.localtest.me
  ```




- 

  - [Link1](https://docs.microsoft.com/en-us/powershell/module/netnat/get-netnat?view=win10-ps#examples)

  - [Link2](https://myitworld.azurewebsites.net/2017/02/09/configure-hyper-v-nat-virtual-switch-nat-forwarding/)

  - [Add-NetNatStaticMapping - Docs](https://docs.microsoft.com/en-us/powershell/module/netnat/add-netnatstaticmapping?view=win10-ps),  A good [Article @ microsoft about nat windows swtiches](https://techcommunity.microsoft.com/t5/virtualization/windows-nat-winnat-capabilities-and-limitations/ba-p/382303)

  - ```
     Add-NetNatStaticMapping -ExternalIPAddress "0.0.0.0/24" -ExternalPort 3000 -Protocol TCP -InternalIPAddress "192.168.137.90" -InternalPort 3000 -NatName MyWifiSwitch
    ```

    

- Setting [virtual box for portforwarding](https://github.com/docker/for-win/issues/204#issuecomment-303461340), yikes!

- Use `docker-machine ssh manager1` to get into your vm machine, yikes!!

- I installed nginx in windows and added it to path, so i can use nginx cli from any terminal or cmd, yikes!!

```bash
#`curl 127.0.0.1` is working pretty fine in both environments, show nginx default error as expected.

#`curl localtest.me` is working as well
#`ping compute.localtest.me`
#`ping localhost.me`, `ping compute.localhost.me`

#`curl `
```



- Using `docker-compose up -d --scale SERVICE=NUM`, syntax. [Src](https://docs.docker.com/compose/reference/up/)

***

- `docker inspect 403a0dc3440e` gives you inside details of a docker container, yikes!!
- `docker-compose up -d --scale whoami=3`general used command to scale with nginx.



```bash
#Below test works(in docker-vm only) exactly like loadbalancing, yikes!!
#loadbalancing is exactly like give every request to next container if there is!! Yikes!!
$ docker-compose up -d --scale whoami=3 
$ curl whoami.colasloth.com 
  I'm f6f85f4848a8 
$ curl whoami.colasloth.com 
  I'm 740dc0de1954 
```



- Amazing new style dockerfile with multiple FROM commands, yikes!! @ [Link, src: FSO](https://github.com/jwilder/whoami/blob/master/Dockerfile#L9)

### commands

```bash
$ docker-compose port --index 1 whoami 8000
```



#### `command help`

```bash
$ docker-compose port
Print the public port for a port binding.

Usage: port [options] SERVICE PRIVATE_PORT

Options:
    --protocol=proto  tcp or udp [default: tcp]
    --index=index     index of the container if there are multiple
                      instances of a service [default: 1]
```



# Use `$dockernotes` command to update to gist, Yikes!

#### Tip(update)

ctrl+c kills the containers in `docker-compose` command.

#### Tip: What if docker-compose, docker image build is taking too much time?

If `npm i` has been the last command(in the STEPS) then, probably docker is making up the cache ready for future ready for you, yikes!! yo!

#### What is image in docker-compose.yml file ?

It defines the name of image to be used, or (if `build` property is there in `docker-compose.yml` then ) the name will be assigned to the image created from the context. Yikes!

#### Do docker-compose uses `Dockerfile` ?

`docker-compose ...` only uses the `Dockerfile` in current folder if you specify the build command in your `docker-compose.yml` file.

#### Help @ `docker-compse run --hep`

```bash
# docker-compse run --hep
-d, --detach          Detached mode: Run container in the background, print
                          new container name.
-p, --publish=[]      Publish a container\'s port(s) to the host
--rm                  Remove container after run. Ignored in detached mode.
-T                    Disable pseudo-tty allocation. By default `docker-compose run`
                          allocates a TTY.
--name NAME           Assign a name to the container
--entrypoint CMD      Override the entrypoint of the image.
-u, --user=""         Run as specified username or uid
-e KEY=VAL            Set an environment variable (can be used multiple times)
--no-deps             Don\'t start linked services.
--rm                  Remove container after run. Ignored in detached mode.
-v, --volume=[]       Bind mount a volume (default [])
-w, --workdir=""      Working directory inside the container
```

#### Help @ `docker run --help`

```bash
# docker run --help
-P, --publish-all                    Publish all exposed ports to
                                       random ports
-p, --publish list                   Publish a container's port(s) to
                                       the host
```

#### When using below command, container_name will no be picked up from docker-compose, Huh..!!

`$ docker-compose run youtube-dl-ubuntu https://imgur.com/JY5tHqr`

So better use, `docker-compose up` command to run the `docker-compose.yml` file.

## build and push with docker-compose: 

```
$ docker-compose build
$ docker-compose push
```

## See setting up docker with wifi, yikes!!(at bottom of page #pic)

- Pulling image from docker hub.
`$ docker pull <image-name>`.

- Pushing to hub.docker.com

	```bash
	$ docker image tag youtube-dl <username>/<repositoryname>
	$ docker image push <username>/<repositoryname>
	```
	```bash
	$ docker login #To login via cli to docker hub.
	```

- Inline commenting is **NOT** allowed in dockerfile For e.g., `WORKDIR /mydir #Create a app directory.`

- CMD and ENTRYPOINT for any node image(sourced from [official repos](https://hub.docker.com/_/node))

	```dockerfile
	ENTRYPOINT ["docker-entrypoint.sh"]
	CMD [ "node" ]
	```

- Amazing expanation for existence of `ENTRYPOINT` in docker @ [stackoverflow answer](https://stackoverflow.com/a/21564990).

- Here’s another best practice adjustment: Copy your package.json and package-lock.json before you copy your code into the container. Docker will cache installed node_modules as a separate layer, then, if you change your app code and execute the build command, the node_modules will not be installed again if you did not change package.json. Generally speaking, even if you forget to add those line, you will not encounter a lot of problems. Usually, you will need to run a docker build only when your package.json was changed, which leads you to install from scratch anyway. In other cases, you don’t run docker build too often after your initial build in the development environment.

- You can bind mount multiple files/directories too, like in this case

	`docker run -d --name webserver -p 80:80 -v ~/www/:/home/site/www/ -v ~/docker/share/apache_logs/:/home/site/logs -v ~/.gitconfig:/home/site/.gitconfig ...`

Here `-p 80:80` means `-p host_port:container_port`.

- If you want to make a [read only](https://docs.docker.com/storage/bind-mounts/#use-a-read-only-bind-mount) bind mount, you can use 

	`docker run -d -it --name devtest -v "$(pwd)"/target:/app:ro nginx:latest`

	, the `:ro` specifies read only thing and container will not be give write permission to the mount file/directory.

- Below command functions same as `-v` but it'll not create the target directory as `-v` does, so it throws error that the `source` in host doesn't exists so you must create it first to bind it with the container's file/folder. Also see how docs say that if we bind non empty directory how data from host would obscures the data on target directory on container.

	`docker run --mount type=bind,source=(pwd)/logs.txt,target=/usr/app/logs.txt -it --rm --name ex1.8 ex1.8`

### Use `docker run -itd --name resulting_container_name` every fucking time you run an imgae.

[docker run -p or -P reference in docs](https://docs.docker.com/engine/reference/run/#expose-incoming-ports).
Also, note -P does port binding to random ports on host machine, so it isn't much helpful to me atleast. Yo!!

**(also --rm  is also suggested if you are testing the start behaviour of container only).**

[`docker exec` reference](https://docs.docker.com/engine/reference/commandline/exec/)

- Using `exit` command stops any process you just created with `docker exec <container-id> myProcess(possibly 'bash')`. So, its cool to use `exit` command when using `docker exec` command.

- `docker exec` will fail if the container is in stopped state. Ctrl+c neither sends signal to docker conatainer nor our present terminal, you can say ctrl+c get jammed with `docker exec` command. You need to explicitly use exit command to terminate the process you just started with `docker exec`.

- You can use `ctrl+p ctrl+q` to keep the process running when connected with `docker exec -it looper bash` and it'll keep running in the container detaching just your terminal from it.

  EASY _PAZY: 

  - `docker exec -it <your-container-name> bash`

  EASY _PAZY2(if above doesn't work):

  - `docker exec -it <your-container-name> sh`

- You can attach directly to the process started via `docker exec` via something like `docker attach` coz its not designed to do so, a good practise is to keep the terminal open as suggested here [stackoverlflow's answer](https://stackoverflow.com/a/39455009/13994126).

### - Fix windows drive/folder sharing (bind mount) with docker. [`#Gist`](https://gist.github.com/sahilrajput03/c833c7243cd6ef6fc4f0444ff21cc6d3). 


	This `#Gist` is good to be kept in handy coz everytie `manager1` is stopped or restarted the vm removes all earlier added packages and files, so this three line command will actually fix the whole package and mount thing for you.

- [`docker run` reference](https://docs.docker.com/engine/reference/run/#cmd-default-command-or-options).

- Defining path for ubuntu/dockervm : https://stackoverflow.com/questions/37676849/where-is-path-variable-set-in-ubuntu

Also(mapping `c` to clear command in docker/anyother linux): In docker vm : Added file `c` with contents "#!/bin/bash \n clear" to `/bin/c` file, yikes does the work now to use c to clear terminal !

-Finished reading [docker cp](https://docs.docker.com/engine/reference/commandline/cp/) amazing read, also [stackoverflow[(https://stackoverflow.com/a/31971697/13994126).

- In hyperv's docker, to be root user , just use commadn `sudo -i`. Yikes!!!
Also, if you need to get back to user `docker`, you can simply use exit command to exit root.

- Use `lsblk` insdie the docker vm machine to know the attached devices.

- Use `export VAR=VALUE` to set varaiables in environemnt in ubuntu.

- Use `exit` command to stop the container from inside the container or use ctrl+p ctrl+q to leave the conatiner and keep it running in background.

- [Dockerfile Reference](https://docs.docker.com/engine/reference/builder/), also read about [#CMD in Dockerfile](https://docs.docker.com/engine/reference/builder/#cmd).

- Creating new image from the conatiner state: `docker commit accf myfirst-pluschanges` where the `accf` represents the container id or we could have given the container name via `--name` and used that for making image too(imo, not tested though).

- Fish gripped text: 
`_docker run --help | grep "\-\-name"` # Note grep expects a string i.e., "something", and inside it we must escape special characters. YIkes!!
Output: 
   `--name string                    Assign a name to the container`. Also, this works too ==>> `_docker run --help | grep \\-\\-name`.

PERMISSION WARNING FROM DOCKER: 
```bash
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
```

- `docker diff container-id` TO GET THE DIFFERENCES BETWEEN THE CONTAINER AND IMAGE FROM IT IS CREATED. The character in front of the file name indicates the type of the change in the container’s filesystem: A = added, D = deleted, C = changed.

- `docker image` command can be used to a copy of image with different name via `docker tag image-id-here <my-new-image-name-here>`
- `docker image` command can be used to a copy of image with different tag as well. ![image](https://user-images.githubusercontent.com/31458531/158404713-6ab8fbb8-e4bf-43c2-8285-ba0b82209518.png)


- SET NAME OF IMAGE AT build time of image i.e, `docker build -t <myImageName> .`.

- `read` - bash command to read user input to a variable. [Read more at here](https://tldp.org/LDP/Bash-Beginners-Guide/html/sect_08_02.html).

## Fixed docker daemon with `winpty docker` using alias in fish config file(fish's alternate for bash's .bashrc file), Yikes!!! NOW `docker attach` and `docker exec` commands out of the box (i.e., without prefixing with winpty each time).

***
- `docker run -d -it --name devops1 ubuntu:16.04 sh -c 'apt update -y; apt upgrade -y; apt install curl -y; read ENTER_KEY; echo "Input website:"; read website; echo "Searching.."; sleep 1; curl http://$website;'`
LEARN: With above command when the script ends the container is stopped. You need to start the container again like `docker start devops1`.

- Using apt in ubuntu 16.
```
apt update #Check if this supports -y flag too. ?
apt upgrade #Check if this supports -y flag too. ?
apt install curl -y
```
- `docker rm loop` won't work as you must provide the complete name of the container i.e, `docker rm looper`.

- Okay a container is connected to a root process as stated here => [docker run -d detached option](https://docs.docker.com/engine/reference/run/#detached--d).

- Now let’s attach to the container and hit control+p, control+q to detach us from the STDOUT.

```
$ winpty docker attach looper-it 

  Mon Jan 15 19:50:42 UTC 2018 
  Mon Jan 15 19:50:43 UTC 2018 
  ^P^Qread escape sequence
```

- Our looper won’t stop for a SIGTERM signal sent by a stop command. To terminate the process, stop follows the SIGTERM with a SIGKILL after a grace period. In this case, it’s simply faster to use kill.

```
$ docker kill looper 
$ docker rm looper 
```

Running the previous two commands is basically equivalent to running docker rm --force looper

***

- Docker Attach [Docs](https://docs.docker.com/engine/reference/commandline/attach/)

To enter a container, we can start a new process in it.

- `winpty docker exec -it looper bash`. Also, you can see the processes in the container via `ps aux`.

- Use `winpty docker attach looper --no-stdin` to be able to use ctrl+c to just get rid of stdout of container. (not actually stopping container). ALWAYS PREFER => `docker run -itd ... ` for making container, as `-t` allows us sending signals to like ctrl+c for terminating when we later attach via `winpty docker attach` command. Yikes!!

- Also, you can use `winpty docker attach looper` simply and can let container without exiting via ctrl+p ctrl+q ctrl+c will keep it in detached state freeing up the console.[THOUGHT ITS SIMPLE TO USE --no-stdin to be able to simply use ctrl+c as its more accustomed to memory than ctrl+p ctrl+q]

***

- Docker exec - For running command inside a container. [Link in docs](https://docs.docker.com/engine/reference/commandline/exec/)

- `docker run -itd --name looper ubuntu:16.04 sh -c 'while true; do date; sleep 1; done' `

- `winpty docker attach looper` (Using ctrl+c will send KILL container, use `docker start looper` to start container again), `docker logs -f looper`. Magic commands.

- `docker attach --sig-proxy=false looper` to attach in a way making sure we don’t close it from the other terminal we can disable signal proxying.

- ### Executing bash scripts inline from cli

![](https://i.imgur.com/GYM4Myi.png).

- ### Using `docker tag` command

![](https://i.imgur.com/cIFl0T2.png "Re tagging an image locally.")

- Official images @ docker [Link @ docs](https://docs.docker.com/docker-hub/official_images/).

- Using ENV in dockerfile - [ENV in docs](https://docs.docker.com/engine/reference/builder/#env), [environment replacement in docs](https://docs.docker.com/engine/reference/builder/#environment-replacement).

	- If an environment variable is only needed during build, and not in the final image, consider setting a value for a single command instead:

```js
RUN DEBIAN_FRONTEND=noninteractive apt-get update && apt-get install -y ...
```

-	 Or using ARG, which is not persisted in the final image:

```js
ARG DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install -y ... 
```

Alternative syntax is also supported i.e., without using `=` operator, see it in official docs link above.

***

- ARG in dockerfile, [link in docs](https://docs.docker.com/engine/reference/builder/#arg), [stackoverflow answer](https://stackoverflow.com/a/34600106/13994126).

- What is bashbrew ? [Ans](https://github.com/docker-library/faq#what-is-bashbrew-where-can-i-download-it).

- Faq's of docker library - [here](https://github.com/docker-library/faq#what-is-bashbrew-where-can-i-download-it).

- [minimal ubuntu base image by ***](https://github.com/phusion/baseimage-docker).

- Nice informative article - [@phusion.nl](https://blog.phusion.nl/2015/01/20/docker-and-the-pid-1-zombie-reaping-problem/#:~:text=They%20are%20processes%20that%20have,reap%20their%20child%20processes%20correctly.), using init init process by using a `--init` flag explicitly.

- Amazing file descriptors -> actually `1>` is for stdout(can also be simply written `>` alone ) and `2>` is for stderr.

![](https://i.imgur.com/tiO2bBr.png "So they are file descriptors.")

![](https://i.imgur.com/smauilG.png "So it depends on individual programs for defining outputs as either `stdout` or `stderr`")

- [Zombie Process/defunct process @ wikipedia](https://en.wikipedia.org/wiki/Zombie_process) : On Unix and Unix-like computer operating systems, a zombie process or defunct process is a process that has completed execution (via the exit system call) but still has an entry in the process table: it is a process in the "Terminated state". This occurs for the child processes, where the entry is still needed to allow the parent process to read its child's exit status: once the exit status is read via the wait system call, the zombie's entry is removed from the process table and it is said to be "reaped". 

- [Murphy's Law - Murphy's law is an adage or epigram that is typically stated as: "Anything that can go wrong will go wrong". ](https://en.wikipedia.org/wiki/Murphy%27s_law)

- 

### docker run `options ?`

- `-i`            : Keep STDIN open even if not attached

- `-t`              : Allocate a pseudo-tty

- what is foreground mode ? : [Read amazing docs](https://docs.docker.com/engine/reference/run/#foreground)

- Do not pass a service `x` start command to a detached container. For example, this command attempts to start the nginx service.

`$ docker run -d -p 80:80 my_image service nginx start` [src](https://docs.docker.com/engine/reference/run/#detached--d) [src: direct reference (better read)](https://docs.docker.com/engine/reference/run/#clean-up---rm)



### What is `init`?

In Unix-based computer operating systems, init (short for initialization) is the first process started during booting of the computer system. Init is a daemon process that continues running until the system is shut down. It is the direct or indirect ancestor of all other processes and automatically adopts all orphaned processes. Init is started by the kernel during the booting process; a kernel panic will occur if the kernel is unable to start it. Init is typically assigned process identifier 1. 
  ~ Wikipedia.





## fso

`script -a Exercise_1.1 -c "docker ps -a"` [Link](https://linux.die.net/man/1/script)

Also, `-q` flag can be used to make the program work quietly.


Dynamically `killing/stopping/removing` all `container/images` via scrips. Yikes [SOURCE](https://blog.baudson.de/blog/stop-and-remove-all-docker-containers-and-images).

`docker images` => Lists earlier downloaded images.

`docker rmi hello-world` => Remove image.(Doesn't delete if currently referenced to any running container).

`docker stop <container id or name>` => Stops docker container.(After executing this command you can safely remove any container).

Tip: You may use d_container_stopAll and then use d_container_removeAll simply to do the shit work for you.

- `docker rm --force <container id or name>` => This is super command, as it'll forcefully remove the container( *even if its running).

- `docker stop` vs. `docker kill` 

[docer stop @ docs](https://docs.docker.com/engine/reference/commandline/stop/)

[docer kill @ docs](https://docs.docker.com/engine/reference/commandline/kill/)

![](https://i.imgur.com/nkG9u0y.png "Difference b/w `docker kill` and `docker stop`").
________________________________

docker kill @ Docs @ https://docs.docker.com/engine/reference/commandline/container_kill/

`docker build . -t hello-world`

`docker run -p 8888:3000 hello-world`

Here `-p 8888:3000` means `-p host_port:container_port`.

`docker ps` #ps stands for "Process Status" #Returns the currently running containers.

^^ is equivalent to `docker container ls`.

`docker ps -a` #Returns all containers (currently running + stopped).

^^ is equivalent to `docker container ls -a`.

`docker ps -q` or `docker ps -aq` #Here, `-q` flags will tell to return only "container ids" for each command.

• Also, You should definitely set `DOCKER_HOST` in `Environment Variables`  as `192.168.18.22:2376`, to know exactly what address to set you must see it from `docker-machine ls` command that at what address the vm machine is running.

• LEARNED FROM ==>  set `DOCKER_HOST` = `tcp://192.168.18.22:2376` @ https://github.com/docker/for-win/issues/2596#issuecomment-531354157

• Also, do see when have bugs @ https://github.com/docker/for-win/issues/2596

Helpful docker-machine Commands:

`docker-machine ls` **ALWAYS USE ADMIN COMMAND PROMPT FOR THIS, OTHERWISE IT'LL NOW SHOW THE DOCKER MACHINES.**

`docker-machine stop manager1`

`docker-machine rm --force manager1` => Completely removes `manager1`.

[if above doesn't work then foloow here(though deleting manager1 from hyperv did work greatly!! )](https://github.com/docker/machine/issues/3001).

`docker-machine start manager1`

[ Know more about binary locations: `where docker-machine`, 
`type docker-machine` ]

Originall DOCKER_CERT_PATH=C:\Users\chetan\.docker\machine\machines\default

My new(from issue on docker/for-win repository) => DOCKER_CERT_PATH (Link - https://github.com/docker/for-win/issues/7629)


`docker-machine ls`

`docker-machine kill` 

Now, I'm trying with internal switch.

**THIS ALONE DOES THE MAGIC** (magic command{easy search}) =>

[Hyper-v's docs for Docker](https://docs.docker.com/machine/drivers/hyper-v/)

```js
docker-machine create -d hyperv --hyperv-virtual-switch "MyEthernetSwitch_1" manager1
#or
docker-machine create -d hyperv --hyperv-memory 2000 --hyperv-virtual-switch "MyWifiSwitch" manager1 #Worked, yikes!!

#Now set DOCKER_HOST user variable to set to docker vm's ip accordingly. See below instructions for that.
#remember to restart command prompt/conemu/fish for env's to take effect
#Use below command to check the DOCKER_HOST variable's value.
echo $DOCKER_HOST
#or use via additionalPath's script, i.e.,
dh # Yikes! executes $ echo $DOCKER_HOST
#or 
dockerhost #scripted to dh too.
```

in admin command prompt.
**AND DO CONFIGURE THE DOCKER_HOST value to desired ip address, you can see it via `docker-machine ls` in admin command prompt. (Remember to close and reopen cmd prompt to take envs take effect.)**

`docker-machine create -d hyperv --hyperv-virtual-switch "Primary Virtual Switch" worker1`

`docker-machine create -d hyperv --hyperv-virtual-switch "Primary Virtual Switch" worker2`

MyEthernetSwitch_1

hello-world:latest

"$ docker ps" To list currently running containers.

"$docker kill container-id-here" To kill a container.

Tutorials point seems awesome for bash - Link - 

```bash
https://www.tutorialspoint.com/docker/docker_managing_ports.htm#:~:text=Advertisements,number%20of%20the%20Docker%20host.
Below command build the image, and we need to rebuild the image if we ever change the Dockerfile. Building docker image would result in copying our project content to docker image which is locally present, but its not running currently. Build image is like static maching that is off, and image becomes container when it changes state from being static to running.
"$ docker build . -t podcast"
"$docker run --restart always -p EXTERNAL:INTERNAL sahilrajput03/podcast-classical:v1.0.0" #(USE - 8899/docker_host_port/External port/LOCAL_PORT(is what we will use actually to access the service)     :        port_on_that_app_runs/docker_container_port(or simply CONTAINER_PORT)/Internal port.
"$docker push sahilrajput03/podcast-classical:latest" #This is a good convention.
In "docker ui", we can just add from url of the docker, i.e., the public url and then it SHOULD ASK you to select the tag.
ALSO, THERE WOULD THIS LAUNCH BUTTON(In "Image" section of docker ui.), WITH WHICH YOU CAN CONFIGURE, TO SETUP VARIOUS INTERESTING THINGS, like defining `Enable auto restart` , `Create shortcut on desktop` (also define webpage for that shortcut{do define it with appropriate port number}), you can add volume that would probably be like mapping just like we did with port thing, we can also do port mapping in there too, this is making it super easily changeable(local port: container port).
LEARNING: YOU MUST HAVE A `.dockerignore` file that has `node_modules` mentioned inside it.
LEARNING: DOCKER PUSH WITH "GITHUB ACTIONS" WOULD BE COOL.
LEARNING: `const {USERNAME, PASSWORD} = process.env`
LEARNING: `$docker rm -f <image-id>`
LEARNING: `podcast` is the name of the image.
LEARNING: `$ docker ps` to see whats running.
LEARNING: We can ...what.... for after `$docker run --restart always .. `
LEARNING: I could have used -d after "docker run -d ... others"  to run container in background mode(ususally called Detached mode). 
LEARNING: WHENEVER YOU MAKE CHANGES TO Dockerfile, you'll need to re-build image and re-run the `docker run ...` command for docker.
LEARNING: We can use -v flag for mapping directory( just like we did for port{same pattern}) , like `-v "/Users/kentcdodds/Library/OpenAudible/mp3:/usr/mp3s" podcast
LEARNING: We can use environment variables through docker commandline, like using -e "USERNAME=BOB" -e "PASSWORD=the_builder" <nameofcontainerHasToBeLast>

LEARNING node(kent c dodds): setTimeout(() => {
	//HERE YOU SHOULD HAVE SOME SOPHISTICATED LOGIC SO ON BULK LOAD PROGRAM SHOULD EXIT AND DOCKER SHOULD RESTART IT.
	log("Exiting program.!!!")
	process.exit(1)
},5000)
```

```dockerfile
FROM node:alpine
COPY . /usr/src
# VOLUME /Users/kentcdodds/Library/OpenAudible/mp3 /urs/mp3s #THIS WOULD NEVER WORK(BUT would definitely work with cli way. :D) AS DOCKER DOES'T ALLOW THIS..(that is just mounting, NOT ACTUALLY COPYING OVER THING.).
# ENV USERNAME "" #It doesn't work for now.
# ENV PASSWORD "" #It doesn't work for now.
# RUN ls /usr/src
# This line is a comment.
WORKDIR /usr/src
# RUN npm i
RUN npm ci #This is better than npm i
# RUN node . #this would suckk!!
CMD ["node", "."] #This line is just same as "RUN node ." but it'll let us listen to commandline afterwards too, whereas it would have gone busy with RUN command for this thing.
#Also, CMD is a daemon that doesn't take normal parameters to make it run, but it takes array of strings.
EXPOSE 8765 # This port is actually the port on which my app is running(*INTERNAL*), and we'll let the consumer of the docker image(we would build) to be able to control at what port to run the service of the docker file.
#Here podcast is the name of the locally saved app.
```

expo - splash screen error => This issue is closed (but problem isn't resolved, see the other issue)=>  https://github.com/expo/expo/issues/10263 , https://github.com/expo/expo/issues/8995 .

1. About declaration file in typescript :-
https://www.youtube.com/watch?v=GVUPOvCRmSY

2. How declaration files work : https://www.youtube.com/results?search_query=how+declaration+files+work

3. idk? [Video 1](https://www.youtube.com/watwch?v=J-g9ZJha8FE)
4. idk? [Video 2](https://www.youtube.com/watch?v=x1rQ61otgtU)
5. idk? [Video 3](https://www.youtube.com/watch?v=eEKn8UJfYgc&t=1651s)
6.idk kent doing react-query things(just watch end of video) [reactQuery search @ youtube](https://www.youtube.com/results?search_query=livestream+refacotring+to+react+query)

"npm init esm -y" - Quick setup an esm project. , [npm init @ docs](https://docs.npmjs.com/cli/init)

[yarn create apps @ Docs](https://classic.yarnpkg.com/en/docs/cli/create)

### Configuring `virtual switch manager` for docker-machine 

![](https://i.imgur.com/O17Gh75.png "This is how virtual switch to be configured!!")

### Learn: Binded ports are available at host of docker-machine's ip address

![](https://i.imgur.com/HeHjZt6.png "How to browse the binded port!")
![](https://i.imgur.com/32gkkeN.png)
