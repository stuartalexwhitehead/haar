# Honours Project
Academic year 2015–16 is the honours year of my Computer Science degree. A main component of this grade comes from a software development project, comprising of a report and a software implementation.

This repository contains the report for my project, named [Haar](https://en.wikipedia.org/wiki/Haar_(fog)). The aim of Haar is to investigate, contrast and aggregate the technologies which make the Internet of Things a possibility. Deliverables will include an application framework for building IoT applications and a full-stack demonstration application.

The report is being written in [LaTeX](https://www.latex-project.org/) and lends itself well to version control. What’s better than treating my report as a piece of software, too?

## Requirements
If you’d like to compile the report yourself, there are a few system pre-requisites:

- PDFLaTeX
- BibTeX
- npm Package Manager

PDFLaTeX and BibTeX come bundled for Mac with the [MacTeX](https://tug.org/mactex/) distribution. Similar bundles are available for [Windows](https://www.tug.org/protext/) and [Linux](https://www.tug.org/texlive/). You can of course check the availability of these applications with the `--version` flag.

Optionally, [Hunspell](http://hunspell.sourceforge.net/) should be available for spellchecking.

## Installation
Once you’ve cloned the repository, npm can be used to install any required packages.

```
npm install
```

And that’s it (unless you need `sudo`, that is).

## Usage
Gulp is used to provide compilation build steps and commands should be run from the root direction of the repository. The compiled PDF will be available from `./compiled/haar.pdf`. Here’s what’s available:

Command           | Description
------------------|------------
`gulp latex`      | Run document through LaTeX _once_
`gulp bibtex`     | Run document through BibTeX _once_
`gulp spellcheck` | Run each *.tex file through Hunspell spellchecker
`gulp compile`    | Compile PDF with full bibliographic citations _once_
`gulp watch`      | (Default) Watch all `.tex` and `.bib` files for changes and run the `compile` build step
