#!/bin/bash

# Script para publicar o projeto EPQS no GitHub Pages

REPO_NAME="epqs-integrated"
USERNAME="marcos-garcon" # Substitua pelo seu nome de usuário do GitHub

echo "Configurando o repositório Git local..."
git init
git add .
git commit -m "Initial commit of EPQS Integrated System"

echo "Adicionando o repositório remoto do GitHub..."
git remote add origin https://github.com/${USERNAME}/${REPO_NAME}.git

echo "Criando e fazendo push para a branch gh-pages..."
git checkout -b gh-pages
git push -u origin gh-pages

echo "\nProjeto publicado com sucesso no GitHub Pages!"
echo "Aguarde alguns minutos para que o site esteja disponível em:"
echo "https://${USERNAME}.github.io/${REPO_NAME}/"

