# Next JS CMS

A simple and elegant solution to incorporate Next JS's incremental static regeneration (ISR) into a self-managed personal blog.

## Table of Contents
- [Description](#description)
- [Technologies](#technologies)
- [Setup](#setup)
- [License](#license)

## Description

This project is intended to be used as a fully-managed content system for a personal blog. It uses Next JS 14's ISR to generate static pages that regenerate, minimizing load times. It incorporates an admin dashboard for managing posts.

# Technologies

This project uses Node JS, Next JS, MongoDB and ImageKit.

## Setup
To run this project:

1. Clone this repository
2. Run `npm install` to install dependencies
3. Create a `.env.local` file and add the follwing variables:
  - `DB_URI`: Your MongoDB connection string
  - `ACCESS_TOKEN`: A random token used for JWT authentication
  - `PUBLIC_KEY`: Your ImageKit public key
  - `PRIVATE_KEY`: Your ImageKit private key

4. Replace the `urlEndpoint` parameter with your ImageKit url endpoint in the `utils/imagekit.js`.

5. Run `npm run dev` to start in a development environment or `npm build` then `npm start` to start in a production environment.

## License

MIT License

Copyright (c) [2024]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.