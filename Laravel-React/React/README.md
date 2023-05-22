## Product Management App

This is a web application for managing a list of products.
It consists of two pages: a product list page and an adding a product page.

## Table of Contents
- [Product List Page](#product-list-page)
- [Adding a Product Page](#adding-a-product-page)
- [Getting Started](#getting-started)

## Product List Page

The product list page displays a list of products with their SKU, Name, Price in $, and one of the product-specific attributes such as Size (in MB) for DVD-disc, Weight (in Kg) for Book, or Dimensions (HxWxL) for Furniture. Additionally, there is an "Add" button that leads to the "Adding a Product" page.

## Adding a Product Page

The adding a product page allows users to add a new product to the list. The page consists of a form with the following fields:

- SKU
- Name
- Price
- Product type switcher with options for DVD, Book, and Furniture
- Product type-specific attribute such as Size (in MB) for DVD-disc, Weight (in Kg) for Book, or Dimensions (HxWxL) for Furniture.

Depending on the selected product type, the form would display a product-specific attribute field. The form has a submit button to add the new product to the list.

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. create a .env file in the root directory and add the following
   `VITE_API_URL= https://pr0duct-list.herokuapp.com`
4. Start the development server: `npm run dev`
5. Open the app in your browser at `in the url bar of your browser`
