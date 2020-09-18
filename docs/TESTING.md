### Testing Criteria
------
**Single-Sign-On**: successful, quick, restricted

Results: passed

Description: Single-Sign-On requires authentication through Google users, and for this app, a G-mail was specifically required. Any account that does not belong on this domain will not be able to access the app. Since sign-in process is handled by Google redirection, it is fast, reliable and secure.

**Access to profile dashboard**: informative, clean, accessible

Results: passed

Description: Profile should include all relevant information, without overreaching into access of user's Google email profile. Profile screen includes all relevant links and shortcuts, including Daily Test page and Statistics page, as well as logout to exit app.

**COVID Symptoms Daily Test**: quick, formatted

Results: passed

Description: The COVID survey is modeled after the one provided by BU through PatientConnect. The questions have Yes/No buttons, and a submit button to create an entry into Cloud Firestore.

**Statistics Page**: formatted, informative

Results: passed

Description: COVID data was accessed through an API and the data is shown in a readable format, showing all country-specific data, which currently respectively includes total number of cases and deaths.

**Admin Dashboard**: overview of data, restricted access

Results: not working

Description: due to limited time, while only users who are flagged as admin are able to view the dashboard, it currently provides no real information, because of a lack of proper integration with Cloud Firestore. Firebase console however, already includes an Administrative Console which provides an overview of all services, including authenticated users and stored data. So the need for this specific dashboard is not necessary unless it is required to be in-app.
