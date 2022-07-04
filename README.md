# vite-react-stripe

This is a basic demo on how to use Vite with React Stripe and Fastify to accept a payment. You can read the blog post for an end-to-end tutorial [here](https://dev.to).

## Versioning

This demo was built and tested with Node version `16.10.0` and npm version `7.24.0`.

## How to run this project

### Configure environment variables


Create your own `.env` file from the sample.


`cp .env-sample .env`

Configure your Stripe secret key and publishable key in this `.env` file. You can find these your Stripe dashboard in the developer section under API keys.

```
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_PUBLISHABLE_KEY=pK_test_xxx
```

### Install dependencies

`npm install`

### Run the Vite server and Node server

`npm run start`

### Navigate to the index.html page

http://localhost:4242

## Test cards

[https://stripe.com/docs/testing](https://stripe.com/docs/testing)

## End to end tutorials on dev.to

1. https://dev.to/stripe/accept-a-payment-with-vite-react-stripe-and-the-payment-element-4p1b
1. https://dev.to/stripe/automatic-payment-methods-with-the-stripe-payment-element-2o6k
1. https://dev.to/stripe/styling-a-payments-page-with-tailwind-css-1li1


## Branches

* Accept a payment: main
* Automatic payment methods: 02-automatic-payment-methods
* Styling with Tailwind CSS: 03-styling-with-tailwind-css



