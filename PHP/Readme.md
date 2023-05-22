# Product List App

A web application for managing a list of products.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Requirements](#requirements)
- [Usage](#usage)
- [Images](#images)
- [Routes](#routes)
- [Validation](#validation)

## Description

This is a web application built with PHP for managing a list of products.
The app provides basic CRUD functionality for creating, reading, and deleting products. Products are stored in a MySQL
database and can be viewed in a tabular format.

## Requirements

- PHP 7.4 or higher
- MySQL

## Installation

To install the app, follow these steps:

1. Clone the repository: `git clone git clone https://github.com/Moh-Bakr/JuniorDeveloperTask.git`
2. Navigate to the app directory: `cd PHP`
3. Create a MySQL database and import the `schemes.sql` file in the `database` folder.
4. Edit the `connection.json` file in `config` folder with your SQL database credentials.
5. Start the PHP development server: `php -S localhost:8000`

## Usage

To use the app, open a web browser and navigate to `http://localhost:8000`. The app will display a list of all products.
To add a new product, click the "Add Product" button and fill out the form.

## Images

![Alt text](Views/photos/1.png?raw=true)
![Alt text](Views/photos/2.png?raw=true)
![Alt text](Views/photos/3.png?raw=true)

## Routes

The following routes are available in the app:

- `GET /`: Displays a list of all products.
- `GET /add-product`: Displays a form for adding a new product.
- `POST /add-product`: Adds a new product to the database.
- `POST /delete-product?id={id}`: Deletes an existing product from the database.

## Validation

Each field has a validation rule:

- SKU (Must be unique, doesn't allow any special char)
- Name (doesn't allow any special char)
- Price (Must be a number)
- Product type switcher has the following options:
    - DVD: Size (Must be a number)
    - Book: Height (Must be a number), Width (Must be a number), Length (Must be a number)
    - Furniture: Weight (Must be a number)