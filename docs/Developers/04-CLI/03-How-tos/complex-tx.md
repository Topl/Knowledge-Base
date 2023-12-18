---
sidebar_position: 12
---

# Create a Complex Transaction

To create a transaction from a file run the following command:

```bash
brambl-cli tx create -i $INPUT_FILE --port 9084 -o $OUTPUT_FILE -n private -h localhost
```

This will create a transaction from the file `$INPUT_FILE` and store the result in the file `$OUTPUT_FILE`.

## Example of format

A file to move the input from a height lock template to a new address would look like this:

```yaml
network: private

keys: []

inputs:
  - address: 7exK7vSMd6aCYqiiZ1VjWSYLif98zHxsQgtqaRM3WvAc#1
    keyMap: []
    proposition: threshold(1, height(1, 9223372036854775807))
    value: 10000000
outputs:
  - address: ptetP7jshHUxEn3noNHnfU5AhV8AcifVAWkhYYvXvrjfErEsey686BBukpQm
    value: 10000000
```

A file to move the input from a single signature lock template to multiple addresses would look like this:

```yaml
network: private

keys: 
  - id: alice
    vk: GeMD3jTdwPEpABPksjFYGgU9tLebpTbqiEvwF7Yyi5jHUBUXhtfsMRUVc5zE6fbL8FYrTDVNRt7eWwrbQMZuwswVP1zpWq8X8r

inputs:
  - address: 6YKBJePhf48a2kCdrov69v9NoiFAuLT7isthazhVBuu1#0
    keyMap:
     - index: 0
       identifier: alice
    proposition: threshold(1, sign(0))
    value: 10000000
outputs:
  - address: ptetP7jshHUxEn3noNHnfU5AhV8AcifVAWkhYYvXvrjfErEsey686BBukpQm 
    value: 9998000
  - address: ptetP7jshHV4h1qe2uSoaKYiM618wKHbpjwadc7HxEGiDQ85MCMzoFF6oh6R 
    value: 1000
  - address: ptetP7jshHUiwiZvm48Z1ebrARr36cxAKTKfhETfRKXomouZafiRadz2m7jp
    value: 1000
```

A file to move two different UTXOs protected by different locks and different
signatures to a single address would look like this:

```yaml
network: private

keys: 
  - id: aliceAnd
    vk: GeMD3jTedVsewW98Cin4Ksgtce784bwpnpcGZDw9wT9WxCaq3PFKo7zRGzaY6ycCcZeB7Sibdsi8DYdYR3u8go9C6W8Wq6K2TS
  - id: bobAnd
    vk: GeMD3jTdf9P5qLDw8PLzSJR77jXVcPBZfZVKYMWdZfr9urzDPvCemfdLfRHSNPUqL9hVokQTK4eYfVki5bLAtfoEFbeTU61zAY
  - id: aliceOr
    vk: GeMD3jTejkvMtBxhrZo3cgDv7g8tUaJ8QaXJocaz9jS5Re4faHQYhU6RDoimtXUwuFGcMccp4jPdJHY6R3GeKpZ5VvHF25cin3

inputs:
  - address: 3WiAub289RrnFA5rdr5wouTdEbqoef2rHWe6edygXeUL#1
    keyMap:
     - index: 0
       identifier: aliceAnd
     - index: 1
       identifier: bobAnd
    proposition: threshold(1, sign(0) and sign(1))
    value: 1000
  - address: 3WiAub289RrnFA5rdr5wouTdEbqoef2rHWe6edygXeUL#2
    keyMap:
     - index: 0
       identifier: aliceOr
     - index: 1
       identifier: aliceOr
    proposition: threshold(1, sign(0) or sign(1))
    value: 1000
outputs:
  - address: ptetP7jshHUaBVrsqnn3bhtWQ1kugVGJVYsVS4WZ47AthWeL4ZX9B9ZJNTaw 
    value: 2000
```

