#!/bin/bash

arquivo=$1

if [ -f "$arquivo" ]
then
        echo "É UM ARQUIVO COMUM!"
elif [ -d "$arquivo" ]
then
        echo "É UMA PASTA!"
else
        echo "É ALGUM OUTRO TIPO DE ARQUIVO!"
fi

ls -l $arquivo
