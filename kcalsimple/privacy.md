# Privacy Policy | GreenAnt Apps

# Privacy Policy

*Last updated: October 17th, 2026*

**KcalSimple** is developed by **GreenAnt Apps**.

Your privacy is important to us. This Privacy Policy explains how we handle any information related to the app.

## 1. Information We Collect

KcalSimple is designed to respect your privacy by keeping your data on your device. Everything you log (foods, calorie goals, weight entries, custom foods, the details entered in the calorie goal calculator such as age, height and sex, and settings) is stored only on your device and is never sent to us.

The only exceptions are the optional features described below: AI estimates (section 2) and the Premium subscription (section 5). If you don't use these features, KcalSimple sends no information about you to our server.

The camera can be used to scan barcodes and, if you choose, to take a photo of a meal for an AI calorie estimate (see section 2). Barcode images are processed on your device and are never stored or transmitted.

## 2. AI Estimates (Optional)

KcalSimple can estimate calories from a photo of a meal or from a description of a physical activity using AI (Artificial Intelligence) tools. These features are optional and can be turned off in Settings.

**What is sent:** for a photo estimate, the photo and any associated text details you type; for an activity estimate, the text description you type. Your weight and the other personal details you enter in the app (such as your age, height, sex and activity level in the calorie goal calculator) never leave your device.

**How it is processed:** the request goes to our server (Google Cloud, in the European Union), which passes it to Google's Gemini AI to produce the estimate. We do not store the photo, details or description, and they are not recorded in our logs. Google does not use them to train its AI models, but may keep them for a limited time to detect and prevent abuse, under the Gemini API terms ([ai.google.dev/gemini-api/terms](https://ai.google.dev/gemini-api/terms)); this processing may take place outside the European Union. Our server sends back to the app only the result: for a photo estimate, a short name for the meal, the estimated calories (with a breakdown by food item) and a short explanation; for an activity estimate (calories burned), a short name for the activity, the amount you mentioned (such as a duration or distance), its estimated duration and its intensity (a standard MET value), from which the app calculates the calories burned on your device, using the weight you logged in the app.

**Anonymous app ID:** to apply the daily AI usage limits, the app creates a random anonymous ID for your installation of KcalSimple (Firebase Anonymous Authentication), the first time you use an AI estimate. Using "Delete all data" deletes it, and a new one is created the next time you use an AI estimate. It is not linked to your name, email address or Google account. Our server keeps a daily count of estimates for each ID (or each Premium subscription), deleted automatically after 30 days. Anonymous IDs are themselves deleted automatically after 30 days, and a new one is created when needed.

**Request checks:** to protect the service from abuse, requests are checked with Firebase App Check and Google Play Integrity, which confirm they come from the genuine KcalSimple app on a genuine device.

**Technical logs:** like any online service, our hosting provider (Google Cloud) automatically records basic technical information about each request, such as the IP address, time and device type, kept for 30 days for security and troubleshooting.

## 3. Food Search Services

KcalSimple uses two external services to search for food products:

- **Open Food Facts API** — when you search by name or scan a barcode, the query or barcode is sent to Open Food Facts servers. No personal data is included. Learn more at [world.openfoodfacts.org](https://world.openfoodfacts.org).
- **USDA FoodData Central API** — when you search by name, the query is also sent to the USDA FoodData Central servers to retrieve nutritional data for generic foods. No personal data is included. Learn more at [fdc.nal.usda.gov](https://fdc.nal.usda.gov).

Both services are free and publicly available. Neither receives any personal information from KcalSimple.

## 4. Ads and Analytics

KcalSimple contains **no advertisements** and collects **no analytics data** of any kind.

## 5. Purchases

KcalSimple offers optional purchases through Google Play: support tips (individual payments that unlock nothing) and a Premium subscription, which increases the daily number of AI estimates. Payments are processed entirely by Google Play; we never see or store your payment details.

To confirm a Premium subscription, the app sends its Google Play purchase token to our server, which checks it with Google Play. We store only an irreversible (hashed) form of the token, together with whether the subscription is active and when it expires, and delete it automatically 30 days after the subscription expires.

## 6. Backups and Deleting Your Data

The Data & Backup menu lets you export your data to a file, import a backup, or delete all data. Backup files are created on your device and saved or shared wherever you choose; we never receive them. "Delete all data" erases everything KcalSimple stores on your device and deletes your anonymous app ID (if your device is offline at that moment, the ID is deleted automatically within 30 days).

## 7. Data Security

Data you enter is stored on your device in a standard SQLite database, which we cannot access. The limited information our server handles (sections 2 and 5) is stored on Google Cloud and is accessible only to us and to Google as our hosting provider.

## 8. Your Rights

**Who is responsible:** GreenAnt Apps is responsible for the processing of the information described in this policy.

**Legal basis:** we process AI estimate requests and Premium subscription checks to provide the features you ask for, and we use request checks and technical logs based on our legitimate interest in keeping the service secure.

**Your rights:** you can ask to access, correct or delete your information, or object to its processing. The information our server keeps is not linked to your identity, so we cannot look it up by name or email address. You can delete it at any time with "Delete all data" (section 6) or by uninstalling the app; any remaining server records are deleted automatically within 30 days. For any other request, contact us.

**Transfers outside the European Union:** when information is processed by Google outside the European Union, it is protected by Google's data processing terms, which include the European Commission's standard contractual clauses.

If you are in the European Union, you also have the right to lodge a complaint with your data protection authority (in France, the CNIL).

## 9. Age Requirement

KcalSimple is intended for users aged 18 and over. We do not knowingly collect any information from anyone under 18.

## 10. Changes to This Privacy Policy

We may update this Privacy Policy from time to time. When we do, the updated version will be published on our website and reflected in the app.

## 11. Contact Us

If you have any questions or concerns about this Privacy Policy, please contact us at:

**greenantapps@gmail.com**
