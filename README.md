# log-it-pretty

`log-it-pretty` is a customizable Express.js middleware that logs request details such as HTTP method, status code, response time, and URL in a pretty format with emojis and colors. It's designed to be simple, lightweight, and easy to integrate into any Node.js/Express.js application.

## Features

- 🎨 **Pretty-formatted logs**: Add emojis and colors to your logs to make them more readable.
- 📏 **Duration tracking**: Automatically logs the request processing time.
- 🛠 **Express.js integration**: Easily add it as middleware in your Express.js apps.
- 🔧 **Customizable**: Designed to be extended or modified to suit various use cases.

## Installation

You can install `log-it-pretty` via npm:

```bash
npm install log-it-pretty
```

## Usage

### Basic Usage in an Express Application

To use `log-it-pretty`, import the `logRequestsMiddleware` and add it to your Express.js app as middleware.

```typescript
import express from 'express'
import { logRequestsMiddleware } from 'log-it-pretty'

const app = express()

// Use log-it-pretty middleware to log requests
app.use(logRequestsMiddleware)

app.get('/api/v1/users', (req, res) => {
  res.status(200).json({ message: 'User data' })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
```

### Log Output

When a request is made to your Express app, `log-it-pretty` will log the request details to the console in a pretty format:

```
✅ 200 🟢 GET 0.123s /api/v1/users
```

- ✅: Status code indicator (e.g., 200 OK).
- 🟢: Status category indicator (e.g., success).
- `GET`: HTTP method.
- `0.123s`: Request processing time.
- `/api/v1/users`: Requested URL.

### Example Log Output

Here’s an example of what the logs might look like:

```
✅ 200 🟢 GET 0.150s /api/v1/products
⚠️ 404 🟡 GET 0.002s /api/v1/non-existent-route
❌ 500 🔴 POST 1.234s /api/v1/create-user
```

## Defining Custom Middleware

You can integrate **log-it-pretty** into your Express.js application by defining your own middleware. This allows you to have more control over how request logs are handled, including adding extra information like IP addresses, headers, or custom logic.

### Example: Custom Middleware Definition

```typescript
import type { NextFunction, Request, Response } from 'express'
import { logItPretty } from 'log-it-pretty'

// Define the custom middleware
export const logRequests = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const startTime = process.hrtime() // Start timing the request

  res.on('finish', () => {
    // Once the response is finished, log the request details
    const logMsg = logItPretty({
      statusCode: res.statusCode,
      method: req.method,
      url: req.originalUrl,
      startTime // The startTime is passed to calculate the duration
    })

    // You can use any logger service here, or simply use console.log
    console.log(logMsg) // Log the message to the console
  })

  // Continue to the next middleware
  next()
}
```

### Example: Using the Custom Middleware in an Express App

Once you’ve defined your custom middleware, you can use it in your Express app like this:

```typescript
import express from 'express'
import { logRequests } from './middleware/logRequests' // Import the custom middleware

const app = express()

// Apply the custom logging middleware to log requests
app.use(logRequests)

// Define some routes
app.get('/api/v1/users', (req, res) => {
  res.status(200).json({ message: 'User data' })
})

app.get('/api/v1/products', (req, res) => {
  res.status(200).json({ message: 'Product data' })
})

// Start the Express server
app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
```

### Example Log Output with Custom Middleware

The output will be similar to:

```
✅ 200 🟢 GET 0.123s /api/v1/users
```

## API

### logRequestsMiddleware

Middleware function to log request details automatically in Express.js applications.

```typescript
logRequestsMiddleware(req: Request, res: Response, next: NextFunction): void
```

### logItPretty

A function that formats request details into a pretty log message.

```typescript
logItPretty({
  statusCode?: number;
  method?: string;
  duration?: number; // In milliseconds
  startTime?: [number, number]; // process.hrtime tuple
  url?: string;
}): string
```

### Utilities

- **calculateDuration**: Function to calculate the duration between start and end times.
- **colorizeText**: Adds color formatting to log messages using ANSI escape codes.

## Contributing

We welcome contributions! Feel free to submit issues, bug fixes, or pull requests to improve this package.

### Running Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/log-it-pretty.git
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Build the project (if using TypeScript):

   ```bash
   npm run build
   ```

4. Run tests:
   ```bash
   npm test
   ```
