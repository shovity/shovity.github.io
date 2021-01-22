echo "${USER} ALL=(ALL) NOPASSWD: ALL" | sudo EDITOR="tee -a" visudo # remove sudo password prompt

### install oh my zsh

sudo apt install zsh -y # install zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"  # ohmyzsh
y
y
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions  # zsh-autosuggestions
sed -i "s/plugins=(git)/plugins=(git zsh-autosuggestions)/" ~/.zshrc
sed -i "s/# DISABLE_AUTO_UPDATE/DISABLE_AUTO_UPDATE/" ~/.zshrc
echo 'PROMPT="%{$fg[green]%}%m%{$reset_color%} ${PROMPT}"' >> ~/.zshrc
echo alias doc="docker" >> ~/.zshrc
echo alias docc="docker-compose" >> ~/.zshrc
source ~/.zshrc

echo set tabstop=8 softtabstop=0 expandtab shiftwidth=4 smarttab >> ~/.vimrc


### install docker

sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
   
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io -y

sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

sudo usermod -aG docker shovity

### install nodejs

curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update && sudo apt install yarn