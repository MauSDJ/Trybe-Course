#!/bin/bash

arquivo=$1

if [ -d "$arquivo" ]
then
	numero_de_arquivos=`ls -l $arquivo | wc -l`
	echo "O $arquivo tem $numero_de_arquivos arquivos."
else
	echo "O argumento $arquivo não é um diretório!"
fi
