import Stripe from 'stripe';
import express from 'express';
import cors from 'cors';

const stripe = new Stripe("sk_test_51QsKuwI8IlTXEO0J7GYkGORq736TunFslDCkAb6tceDDStwU7Nq6UOHx9CnbkmTJWA2WEERjA2JtRcLTyWfeXzzY00yursmiJq", {
  apiVersion: '2025-01-27.acacia',
});

const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

const FRONTEND_URL = 'http://localhost:5173';

app.post('/create-checkout-session', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      line_items: [
        {
          price: 'price_1QsL1bI8IlTXEO0Jt5HYWKGM',
          quantity: 1,
        },
      ],
      mode: 'payment',
      return_url: `${FRONTEND_URL}/services/natal-chart?session_id={CHECKOUT_SESSION_ID}`,
      redirect_on_completion: "if_required"
    });

    res.send({ clientSecret: session.client_secret });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send({ error: error.message });
    } else {
      res.status(500).send({ error: 'Unknown error occurred' });
    }
  }
});

app.get('/session-status', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(req.query.session_id as string);

    res.send({
      status: session.status,
      payment_status: session.payment_status,
      customer_email: session.customer_details?.email,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send({ error: error.message });
    } else {
      res.status(500).send({ error: 'Unknown error occurred' });
    }
  }
});

app.listen(4242, () => console.log('Running on port 4242'));
