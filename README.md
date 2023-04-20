MarkEdit CLI Tool
========

[MarkEdit](https://apps.apple.com/us/app/markedit-for-markdown/id1669953820?mt=12) is native Markdown text editor for MacOs. It has a gorgeous interface with a simple feature set. Letting you write content that humans will understand rather than a machine compiler. This repo is a CLI tool/interface that lets you interact with MarkEdit. 

Written in Typescript with Deno. 

And its easy as hell to use:

```bash
$ markdwn ./your_file.md
```

> opens MarkEdit with your_file.md

<br/>

Features
--------

- CLI Tool
- Ultra customizable to your own needs since this is written in Typescript.

<br/>

Installation
------------
### Install Deno
This step is only required if you don’t already have deno installed. Follow the guide [here](https://deno.land/manual@v1.32.5/getting_started/installation) or run either of these commands (MacOs):

`$ curl -fsSL https://deno.land/x/install/install.sh | sh`
<br/>OR<br/>
` brew install deno`

<br/>
### Installing the CLI 
1. Clone repo `git clone git@github.com:First-Derivative/MarkEdit-cli.git`
2. Run `deno task build` which compiles `markedit.ts` into an executable `markdwn` in `/build`
3. Add the executable to your PATH, `export PATH=$PATH:$HOME/{{PATH_TO_REPO_)}}/build` (add this line to your `.bashrc`/`.zshrc`)

<br/>

Customization
-------------

If you would like to access the cli via some command other than `markdwn` then you just need rename the output of the compilation for the build task in `deno.json`
```javascript
// demo.json 
{
  "tasks": {
 	...
    "build": "deno compile --allow-env --allow-read --allow-run --lock=deno.lock -o build/{{NAME_OF_OUTPUT}} markedit.ts"
  }
}
```
<br/>

Contribution
------------
If you are having issues, or would like some extra functionality feel free to create an Issue/Pull Request
I will also take any queries on ashraff.hatz@gmail.com

<br/>

Planned Features
----------------
1. Auto-installation script into .bashrc/.zshrc
2. Create file on no file found
3. Command that initializes README.md with template and opens it with MarkEdit