FROM lsiobase/ubuntu:bionic
# FROM ubuntu:latest

ENV HOME="/config"

RUN cd /tmp && chmod 1777 .

# Updating Ubuntu packages
RUN apt-get update && yes|apt-get upgrade

# package install
RUN \
    echo "**** install node repo ****" && \
    apt-get install -y \
    gnupg && \
    curl -s https://deb.nodesource.com/gpgkey/nodesource.gpg.key | apt-key add - && \
    echo 'deb https://deb.nodesource.com/node_12.x bionic main' \
    > /etc/apt/sources.list.d/nodesource.list && \
    curl -s https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo 'deb https://dl.yarnpkg.com/debian/ stable main' \
    > /etc/apt/sources.list.d/yarn.list && \
    echo "**** install build dependencies ****" && \
    apt-get update && \
    apt-get install -y \
    build-essential \
    libx11-dev \
    libxkbfile-dev \
    libsecret-1-dev \
    pkg-config && \
    echo "**** install runtime dependencies ****" && \
    apt-get install -y \
    git \
    jq \
    wget \
    nano \
    net-tools \
    nodejs \
    gdb \
    gcc \
    g++ \
    golang \
    openjdk-8-jdk \
    python3 \
    python3-pip \
    sudo \
    yarn && \
    echo "**** clean up ****" && \
    apt-get purge --auto-remove -y \
    build-essential \
    libx11-dev \
    libxkbfile-dev \
    libsecret-1-dev \
    pkg-config && \
    apt-get clean && \
    rm -rf \
    /tmp/* \
    /var/lib/apt/lists/* \
    /var/tmp/*

RUN pip3 install pylint numpy matplotlib pandas tensorflow==2.0.0b1 ipykernel jupyter

# 
RUN sudo bash -c '\
    curl -SsL https://github.com/boxboat/fixuid/releases/download/v0.4/fixuid-0.4-linux-amd64.tar.gz | tar -C /usr/local/bin -xzf - && \
    chmod 4755 /usr/local/bin/fixuid && \
    mkdir -p /etc/fixuid && \
    printf "user: coder\ngroup: coder\n" > /etc/fixuid/config.yml'

# code-server source install
RUN curl -fOL https://github.com/cdr/code-server/releases/download/v3.4.1/code-server_3.4.1_amd64.deb
RUN sudo dpkg -i code-server_3.4.1_amd64.deb 
RUN locale-gen en_US.UTF-8
ENV LC_ALL=en_US.UTF-8 
    # SHELL=/bin/bash

# add sudo
# RUN adduser --gecos '' --disabled-password coder && \
#     # echo 'code:coder' | chpasswd \ 
#     echo "coder ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers.d/nopasswd
# RUN adduser coder sudo
# USER coder
# WORKDIR /home/coder/
# RUN sudo chmod -R a+rwx /config

# Add user ubuntu with no password, add to sudo group
RUN adduser --disabled-password --gecos '' coder
RUN adduser coder sudo
RUN echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers
USER coder

WORKDIR /home/coder/
RUN chmod a+rwx /home/coder/
RUN sudo chmod a+rwx /config/

# Anaconda installing
RUN cd /
RUN wget https://repo.anaconda.com/archive/Anaconda3-2020.02-Linux-x86_64.sh
RUN sudo bash Anaconda3-2020.02-Linux-x86_64.sh -b
RUN rm Anaconda3-2020.02-Linux-x86_64.sh

# Set path to conda
ENV PATH /config/anaconda3/bin:$PATH

RUN sudo chmod a+rwx /config/anaconda3
RUN sudo chown -R $USER:$USER /config
RUN sudo chmod 777 -R ~/.conda/
RUN conda --version
# Updating Anaconda packages
RUN conda update conda
RUN conda update anaconda
RUN conda update --all
RUN conda install tensorflow-gpu=2.1.0

# Anaconda installing
ENV PATH ~/usr/local/bin/jupyter:$PATH

# config.yaml copy (bind-addr update)
COPY ./code-server /usr/lib/code-server
COPY ./config /config
COPY ./config.yaml /config/.config/code-server/config.yaml

# create & mount project dir
RUN mkdir -p /home/coder/projects
VOLUME ["/home/coder/projects"]

# start
EXPOSE 5111
CMD ["code-server"]
