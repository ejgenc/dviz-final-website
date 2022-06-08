# Web Information System Final Project

> This repository and the code it contains was prepared by Amy-Caroline Downing, Eren Janberk Genç, Ruiqi Wang and Mariko Matsuzaki as part of the requirements for completing the "Data Visualization" class, offered by the MSc Digital Humanities programme in KU Leuven.

## How to install and run this project locally

### Prerequisites

There is one prerequisite to running this web application locally:

1. **a working Node.js installation that can be accessed through a terminal** If you do not yet have a working Node.js installation on your local machine, please refer to the installation documentation [here](https://nodejs.org/en/download/). If you are going to do a fresh install on a Windows machine, you can also [consider using Node Version Manager for ease of use](https://github.com/nvm-sh/nvm).

### Download the project from GitHub

You can download the source code of the project by:

1. Using the Git CLI
2. Using the GitHub Desktop Client
3. Downloading the repo as a .zip file through our GitHub repository

Since we use Git and GitHub to enable distributed development the options one and two are the preferred options. A detailed description of how to use Git is beyond the scope of this document. Instead you can refer to  [this article](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository) for a specific guide on how to `git clone` a Git repository.

### Install the project dependencies

This web application uses Node.js as its backend. Here's what you should do to install the project dependencies:

1. Open a terminal through which you can run Node.js from.
2. Navigate to the folder in which the project source code can be found.
3. Run `npm install` to install the Node.js dependencies from npm.

### Spin up a local web server & access the web app

After installing the Node.js dependencies, you can follow the steps below to run a local web server and access the web application:

1. Open a terminal through which you can run Node.js from.
2. Navigate to the folder in which the project source code can be found.
3. Run `npm run dev` to run the web application via an NPM script
4. Open up any browser of your choice and access the following URL: `http://127.0.0.1:8000`