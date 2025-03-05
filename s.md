
### Remove sudo password prompt

```
echo "${USER} ALL=(ALL) NOPASSWD: ALL" | sudo EDITOR="tee -a" visudo
```

### Install oh my zsh

```
sudo apt install zsh -y # install zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"  # ohmyzsh

git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions  # zsh-autosuggestions
sed -i "s/plugins=(git)/plugins=(git zsh-autosuggestions)/" ~/.zshrc
sed -i "s/# zstyle ':omz:update' mode disabled/zstyle ':omz:update' mode disabled/" ~/.zshrc
source ~/.zshrc
echo set tabstop=8 softtabstop=0 expandtab shiftwidth=4 smarttab >> ~/.vimrc
```


### Install docker

```
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update

sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

sudo usermod -aG docker $USER
```

### Install nodejs

```
curl -sL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g npm yarn
```

[Edit](https://github.com/shovity/shovity.github.io/edit/master/s.md)
