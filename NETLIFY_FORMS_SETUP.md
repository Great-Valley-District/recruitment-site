# Netlify Forms Email Setup

The site uses Netlify Forms for form handling. Netlify automatically detects forms at deploy time by parsing the HTML.

## How It Works

The form in `/src/app/join-now/page.tsx` has a `netlify` attribute that tells Netlify to handle submissions. No server-side code or JavaScript is needed - Netlify parses the form at build time.

## Enable Form Detection (Required)

1. **Log in to Netlify Dashboard**
   - Go to https://app.netlify.com
   - Navigate to your site

2. **Enable Form Detection**
   - Go to Site Settings → Forms
   - Make sure "Form detection" is enabled
   - This allows Netlify to automatically detect forms in your HTML at deploy time

## Configure Email Notifications

After your first deployment (and first form submission):

1. **Access Forms**
   - Click on "Forms" in the main site navigation
   - You should see "scout-application" listed after deployment

2. **Add Email Notification**
   - Click on the "scout-application" form
   - Click "Notifications" or "Form notifications"
   - Click "Add notification"
   - Select "Email notification"

3. **Configure Email**
   - **Email to notify**: `info@greatvalleydistrict.org` (or your preferred email)
   - **Event to listen for**: New form submission
   - Click "Save"

4. **Test**
   - Submit a test application
   - Check that you receive the email

## Form Data Collected

Each submission includes:
- Email Address
- Phone Number
- Parent/Guardian Name
- Child's Name
- Child's Age
- ZIP Code
- Recommended Program (Cub Scouts or Scouts BSA)
- Meeting Availability (days selected)
- How they heard about Scouting
- Special Accommodations or Questions

## Success Page

After submission, users see `/thank-you.html` with a confirmation message.

## Additional Features

You can also:
- View all submissions in the Netlify dashboard
- Export submissions as CSV
- Set up webhook notifications
- Add Slack notifications
- Configure custom submission limits
