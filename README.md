# Lab 5 - Starter

Name: Hanwen Chen

1. The "message" feature is not suitable for unit testing because it is a feature
   that involves the UI, network requests, backend processing, and delivery to another
   user, therefore it's a full system interaction, not a single isolated unit.
2. We can use unit tests for the "max message length" feature of a messaging application
   because it's an isolated unit that is fairly deterministic, you can easily check using
   examples of different scenarios: 79 chars, 80 chars, 81 chars, for example, and check
   if it's allowed or blocked.
