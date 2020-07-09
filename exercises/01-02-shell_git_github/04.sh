#!/bin/bash

caminho="/home/mauricio/trybecourse/my_shell_scripts"
if [ -e $caminho ]
then
	echo "O caminho $caminho está habilitado!"
fi

if [ -w  $caminho ]
then
	echo "Você tem permissão para editar $caminho"
else
	echo "Você NÃO foi autorizado a editar $caminho"
fi

