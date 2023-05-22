# Products API

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Images](#images)
- [Models](#models)
- [Requests](#requests)
- [Responses](#responses)

## Introduction

The Products API is a RESTful API that allows you to manage products and their attributes, such as price, SKU, and
dimensions. The API supports CRUD operations for products, as well as listing all available product types.

## Installation

To install the Products API, you will need to perform the following steps:

1. Clone the repository:

```bash
  git clone https://github.com/Moh-Bakr/JuniorDeveloperTask.git
   ```

 ```
   cd Laravel-React
 ```

2. Install the dependencies:

```bash
  composer install
   ```

3. Copy the `.env.example` file to `.env`:

  ```bash
    cp .env.example .env
   ```

4. Generate an application key:

```bash
php artisan key:generate
```

5. Set up your database connection in the `.env` file.

6. Migrate & seed the database:

```bash
 php artisan migrate --seed
```

## Usage

To use the Products API, you will need to make HTTP requests to the various endpoints using an HTTP client, such as cURL
or Postman. The API accepts JSON data and returns JSON responses.

## Endpoints

The Products API supports the following endpoints:

| Method | URI                   | Description                       |
|--------|-----------------------|-----------------------------------|
| GET    | `/api/products`       | List all products                 |
| POST   | `/api/products`       | Create a new product              |
| DELETE | `/api/products/{ids}` | Delete one or more products by ID |
| GET    | `/api/types`          | List all product types            |

## Images

```/api/products```

![Alt text](README/products.png?raw=true)

```/api/types```

![Alt text](README/types.png?raw=true)

```/api/products```

![Alt text](README/dvd.png?raw=true)

## Models

The Products API has two models:

- `Product`: represents a product and its attributes, such as name, price, and dimensions.
- `Type`: represents a product type, such as DVD, book, or furniture.

## Requests

The Products API has two request classes:

- `StoreProductRequest`: validates the data sent when creating a new product.
- `UpdateProductRequest`: validates the data sent when updating an existing product.

## Responses

The Products API returns the following response formats:

- `SuccessResponse`: a success response with a message and optional data.
- `ErrorResponse`: an error response with a message and optional errors.
- `ValidationErrorResponse`: an error response with a message and validation errors.
  ![Alt text](README/errros.png?raw=true)
  ![Alt text](README/delerror.png?raw=true)
