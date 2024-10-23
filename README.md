<img src="/images/vertical-image.png" alt="Coloring Pages Design API" width="100%">


# ColoringPagesDesign API JavaScript Client

A JavaScript wrapper for the ColoringPagesDesign API, providing easy access to coloring page designs and templates.

## Getting Started

### 1. Create an Account
1. Visit [ColoringPagesDesign.com](https://www.coloringpagesdesign.com)
2. Sign up for a new account
3. Access the Developer Portal either:
   - From the account dropdown menu → "Developers"
   - Or directly at `/developers`
4. Generate your API key from the developer dashboard

### 2. Installation
bash
npm install coloringpages-api

or
yarn add coloringpages-api


### 3. Basic Usage

```javascript
import ColoringPagesAPI from 'coloringpages-api';
// Initialize the client
const api = new ColoringPagesAPI('YOUR_API_KEY');
// Request coloring page creation
const coloringPage = await api.createColoringPage('SUBJECT HERE', 'STYLE HERE', 'COMPLEXITY HERE', 'VISIBILITY HERE');
console.log('Result coloring page: ', coloringPage.imageUrl);
console.log('Is image safe: ', coloringPage.isImageSafe)
```



## API Access Levels

### Free Tier
- Access to basic API endpoints
- Rate limited/throttled requests
- Perfect for testing and small projects

### Paid Tier
- Unlimited API requests
- No rate limiting

## Rate Limits

| Tier | Requests/minute | Daily Limit |
|------|----------------|-------------|
| Free | 10             | 100         |
| Paid | Unlimited      | Unlimited   |

## Advanced Usage and Error Handling

```javascript
try {
    const api = new ColoringPagesAPI('YOUR_API_KEY');
    const subject = 'butterfly'; // Whatever subject you want
    const style = 'pixel-art' // 'figurine', 'pixel-art', 'anime'
    const complexity = 'easy'; // 'easy', 'hard'
    const visibility = 'public'; // 'public', 'private'
    const coloringPage = await api.createColoringPage(subject, style, complexity, visibility);
    console.log('Result coloring page: ', coloringPage.imageUrl);
    console.log('Is image safe: ', coloringPage.isImageSafe)
} catch (error) {
    if (error.status === 429) {
        console.log('Rate limit exceeded');
    } else {
        console.error('API Error:', error.message);
    }
}
```

## Available Methods

| Method | Description |
|--------|-------------|
| `createColoringPage(subject, style, complexity, visibility)` | Create a new coloring page |

## Support

For support, contact our support team at support-api@coloringpagesdesign.com.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
