import { Helmet } from 'react-helmet';
import axios from 'axios';
import React, { useState } from 'react';

import Error from './error';
import Success from './success';

const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const classes = {
  wrapper: 'mt-8',
  title: 'text-2xl font-semibold text-gray-800',
  description: 'text-gray-600',
  form: 'mt-4 sm:flex',
  input:
    'appearance-none w-full px-5 py-3 border border-gray-300 text-base leading-6 text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:max-w-xs',
  buttonWrapper: 'mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0',
  button:
    'w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out',
  svg: 'animate-spin -ml-1 mr-3 h-5 w-5 text-white',
};

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    if (loading) return;
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.length || !validateEmail(email)) {
      setError('Please enter a valid email.');
      setSuccess('');
      return;
    }

    setLoading(true);
    const result = await axios({
      method: 'post',
      url: 'https://api.convertkit.com/forms/1756315/subscriptions',
      headers: {
        Accept: 'application/json',
      },
      data: { email_address: email },
    });

    if (!result || !result.data || result.data.errors) {
      setError('An error occurred, please try again.');
      setSuccess('');
      setLoading(false);
      return;
    }

    // Otherwise, success
    if (result.data.status === 'success') {
      setError('');
      setSuccess('Success! Please check your inbox to confirm.');
      setEmail('');
      setLoading(false);
      return;
    }

    // End loading
    setSuccess('');
    setError('An error occurred, please try again.');
    setLoading(false);
  };

  return (
    <>
      <Helmet>
        <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
      </Helmet>
      <div className={classes.wrapper}>
        {!!error.length && <Error error={error} />}
        {!!success.length && <Success message={success} />}
        <h2 className={classes.title}>Join My Newsletter</h2>
        <p className={classes.description}>
          Get my latest posts, straight to your inbox.
        </p>
        <form
          onSubmit={handleSubmit}
          className={classes.form}
          aria-labelledby="newsletter-headline"
        >
          <input
            aria-label="Email address"
            type="email"
            onChange={handleChange}
            defaultValue={email}
            required
            className={classes.input}
            placeholder="Enter your email"
            disabled={loading}
          />
          <div className={classes.buttonWrapper}>
            <button className={classes.button} disabled={loading}>
              {loading && (
                <svg
                  className={classes.svg}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}
              Notify me
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Newsletter;
