Honestech calendar + auto-reply setup

1. Open script.google.com while signed into honestechservice@gmail.com.
2. Create a new Apps Script project.
3. Paste the contents of apps-script.gs into the project.
4. Create a Google Calendar for jobs if you want a separate one, or use the main calendar tied to honestechservice@gmail.com.
5. Copy that calendar ID and replace CALENDAR_ID in apps-script.gs.
6. Deploy > New deployment > Web app.
   - Execute as: Me
   - Who has access: Anyone
7. Copy the Web App URL.
8. In index.html, replace:
   PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE
   with the Web App URL.
9. Upload index.html, styles.css, and script.js to your GitHub Pages site.
10. Submit the website form once.
11. FormSubmit will send a one-time confirmation email to honestechservice@gmail.com.
12. Confirm that email, then test again.

Notes
- The current script creates a 30-minute placeholder event when a quote is submitted.
- If you want appointment date/time fields later, those can be added so the event lands at the exact requested time.
- The script sends the customer an auto-reply and also sends Honestech an internal notification email.
