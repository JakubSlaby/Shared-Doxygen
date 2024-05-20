#!/bin/bash

# Source: https://github.com/tahyx/doxygen-mermaid/tree/feature/md_mermaid_example
# Usage: ./doxygen_filter_mermaid.sh <md-file>
# 
# This script reads the file <md-file> in, replaces all fenced code blocks
# with html <pre> </pre> tags and prints the result into stdout. 
# So, for example following content in input file <md-file>
#
# ```mermaid
#   <mermaid syntax>
# ```
#
# would be replaced by
#
# <pre class="mermaid">
#   <mermaid syntax>
# </pre>
#
# additionally a couple of newlines are added right before and after of <pre> tags.

mermaid_start="(^\`\`\`mermaid)(.*)"
mermaid_end="(\`\`\`)"
in_mermaid=0

while IFS= read -r line || [ -n "$line" ]
do 
  if [[ $line =~ $mermaid_start ]]; then
        
        printf '\n<pre class=\"mermaid\">%s\n' "${BASH_REMATCH[2]}" 
        in_mermaid=1
  elif [ $in_mermaid -eq 1 ]; then
    if [[ $line =~ $mermaid_end ]]; then
      printf '</pre>\n\n'      
      in_mermaid=0
    else 
       printf '%s\n' "${line}"
    fi
  else
        printf '%s\n' "${line}"
        
  fi
done < "${1}"