#!/bin/bash

if [ $# -eq 0 ]; then
  echo "Component's name not provided!"
  echo "Usage: ./gc.sh <component_name>"
  exit 1
fi

NO_PROPS=false

for arg in "$@"; do
  if [ "$arg" == "--no-props" ]; then
    NO_PROPS=true
  fi
done

mkdir $1
touch $1/$1.tsx $1/index.ts

FILE_TSX="$1/$1.tsx"

if [ "$NO_PROPS" = false ]; then
  echo "interface $1Props {" >>$FILE_TSX
  echo ' ' >>$FILE_TSX
  echo '}' >>$FILE_TSX
  echo '' >>$FILE_TSX
fi

echo "export const $1: React.FC" >>$FILE_TSX
if [ "$NO_PROPS" = false ]; then
  echo "<$1Props> = (props) => {" >>$FILE_TSX
else
  echo " = () => {" >>$FILE_TSX
fi

echo " " >>$FILE_TSX
echo '  return (' >>$FILE_TSX
echo '    <div>' >>$FILE_TSX
echo '    </div>' >>$FILE_TSX
echo '  );' >>$FILE_TSX
echo '};' >>$FILE_TSX
echo '' >>$FILE_TSX

FILE_INDEX="$1/index.ts"

echo "import { $1 } from './$1';" >>$FILE_INDEX
echo '' >>$FILE_INDEX
echo "export default $1;" >>$FILE_INDEX
