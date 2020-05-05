#!/bin/bash

read -p "Por favor, insira aqui o caminho de um arquivo ou pasta: " caminho

if [ -f "$caminho" ]
then
	echo "É UM ARQUIVO COMUM!"
elif [ -d "$caminho" ]
then
	echo "É UMA PASTA!"
else
	echo "É ALGUM OUTRO TIPO DE ARQUIVO!"
fi

ls -l $caminho

