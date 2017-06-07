# EMAIL YOUR MP BETA 0.01
NOTE: Mandrill has been sold to MailChimp so the example below requires modifications in order to actually send an email. I will remove this notice when the example has been fixed. Thank you!

Here’s a simple form that will take in a postal code, and do a look up on the associated Member of Parliament’s (MP) email and name. There are a couple of details and code samples below.

## Angular
I use a filter to lookup the postal code and find the associated MP name which is then displayed using Angular {{}} expression. I’m using some crude validation to validate mandatory fields and the email address format. View code [here](controllers.js)

## Mandrill
In order to send out emails I discovered the Mandrill email API which I can call via an ajax call which let’s you send up to 10K emails per month for free. View code [here](selectMpForm.html)
