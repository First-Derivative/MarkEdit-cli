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
<br/>or via brew<br/>
` brew install deno`

<br/>

### Installing the CLI 
1. Clone repo `git clone git@github.com:First-Derivative/MarkEdit-cli.git`
2. Run `deno task install` which compiles `markedit.ts` into an executable `markdwn` in `$HOME/.deno/bin/` (the default [DENO_INSTALL_ROOT](https://deno.land/manual@v1.32.5/getting_started/setup_your_environment#environment-variables))
3. Ensure the directory `$HOME/.deno/bin/` is exported to your `PATH`

<br/>

### Exporting deno to your path
Update your `.bashrc` or `.zshrc` file to include your deno install paths to your `PATH`.
To do so, add this line to your `.bashrc` or `.zshrc`
`export PATH=“/$HOME/.deno/bin:$PATH"`

Or run this command:<br/>
(if using `.bashrc`)
```bash
echo 'export PATH="$HOME/.deno/bin:$PATH"' >> ~/.bashrc
```

(if using `.zshrc`)
```bash
echo 'export PATH="$HOME/.deno/bin:$PATH"' >> ~/.zshrc
```

Customization
-------------

If you would like to access the cli via some command other than `markdwn` then you just need rename the output of the compilation for the install task in `deno.json`
```javascript
// demo.json 
{
  "tasks": {
 	...
    "install": "deno install --allow-run -f -n {{COMMAND_NAME}} markedit.ts"
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
2. Create file on no file found
3. Command that initializes README.md with template and opens it with MarkEdit