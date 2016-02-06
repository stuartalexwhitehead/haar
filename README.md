# Haar
Academic year 2015–16 is the honours year of my Computer Science degree (I know, I’m surprised I made it too!). The most important aspect of it is _the_ honours project. [RGU’s School of Computing](http://www.comp.rgu.ac.uk/about-us/) describes two aims:

- To enable the student to undertake a substantial professional software engineering project in order to acquire a comprehensive understanding of the problem and its domain
- To enable the student to develop a solution from specification through to implementation and report on the results within a fixed time frame

With that in mind, I wanted to investigate something which would keep me motivated. The Internet of Things touches on computing, design _and_ physics so it felt like the natural choice. The aim of my project is to research existing IoT technologies across the full development stack. It will culminate in the development of an IoT framework and a demonstration application.

I couldn’t develop something without a name, now. One paradigm I came across during research was _Fog Computing_, where processing tasks are distributed at the fringe of networks. Also, I’m from Aberdeen in Scotland and our east coast is known for its cold sea fog, known locally as [haar](https://en.wikipedia.org/wiki/Haar_(fog)). So there we go, the name of this project: Haar.

The research and development for Haar is quite broad so the workload has been divided across a number of repositories:
- [Haar](https://github.com/stuartalexwhitehead/haar) - Project overview and WiP report
- [Haar Engine](https://github.com/stuartalexwhitehead/haar-engine) - IoT application framework
- [Haar API](https://github.com/stuartalexwhitehead/haar-api) - Implementation of Haar Engine
- [Haar Dashboard](https://github.com/stuartalexwhitehead/haar-dashboard) - Front-end UI for Haar API
- [Haar Bridge](https://github.com/stuartalexwhitehead/haar-bridge) - Translation between ZigBee WSN and the Internet
- [Haar Nodes](https://github.com/stuartalexwhitehead/haar-nodes) - Arduino sketches and companion libraries

# Haar Report
This repository contains the report for my project. The report is being written in [LaTeX](https://www.latex-project.org/) and lends itself well to version control. What’s better than treating my report as a piece of software, too?

## Requirements
If you’d like to compile the report yourself, there are a few system pre-requisites:

- PDFLaTeX
- BibTeX
- npm Package Manager

PDFLaTeX and BibTeX come bundled for Mac with the [MacTeX](https://tug.org/mactex/) distribution. Similar bundles are available for [Windows](https://www.tug.org/protext/) and [Linux](https://www.tug.org/texlive/). You can of course check the availability of these applications with the `--version` flag.

Optionally, [Hunspell](http://hunspell.sourceforge.net/) should be available for spellchecking along with [TeXcount](http://app.uio.no/ifi/texcount/) for word counts.

## Installation
Once you’ve cloned the repository, npm can be used to install any required packages.

```
npm install
```

And that’s it (unless you need `sudo`, that is).

## Usage
Gulp is used to define compilation tasks and the commands should be run from the root direction of the repository. The compiled PDF will be available from `./compiled/haar.pdf`. Here’s what’s available:

Command           | Description
------------------|------------
`gulp latex`      | Run document through LaTeX _once_
`gulp bibtex`     | Run document through BibTeX _once_
`gulp spellcheck` | Run each `.tex` file through Hunspell spellchecker
`gulp count`      | Perform a word count on the complete document
`gulp compile`    | Compile PDF with full bibliographic citations _once_
`gulp watch`      | (Default) Watch all `.tex` and `.bib` files for changes and run the `compile` and `count` tasks
